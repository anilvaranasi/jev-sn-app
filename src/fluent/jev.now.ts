import '@servicenow/sdk/global'
import {
    Flow,
    Subflow,
    Table,
    ScriptInclude,
    StringColumn,
    IntegerColumn,
    ChoiceColumn,
    wfa,
    action,
    trigger,
} from '@servicenow/sdk/automation'
import { callJevApi } from '../server/JevApi.server'

// ─── 1. TABLE — x_146833_jevnowint_request ──────────────────────────────────
// Staging table. Any script/flow writes a record here; the Flow picks it up
// and drives it through: pending → processing → processed / failed.

export const x_146833_jevnowint_request = Table({
    name: 'x_146833_jevnowint_request',
    label: 'Jev Request',
    schema: {
        u_state: ChoiceColumn({
            label: 'State',
            choices: [
                { label: 'Pending',    value: 'pending'    },
                { label: 'Processing', value: 'processing' },
                { label: 'Processed',  value: 'processed'  },
                { label: 'Failed',     value: 'failed'     },
            ],
            default: 'pending',
        }),
        u_state_text: StringColumn({
            label: 'State Text',
            max_length: 4000,
            mandatory: true,
        }),
        u_questions: StringColumn({
            label: 'Questions (JSON)',
            max_length: 4000,
            mandatory: true,
        }),
        u_model: StringColumn({
            label: 'Model',
            max_length: 40,
            default: 'jev-latest',
        }),
        u_answers: StringColumn({
            label: 'Answers (JSON)',
            max_length: 4000,
        }),
        u_model_used: StringColumn({
            label: 'Model Used',
            max_length: 40,
        }),
        u_input_tokens: IntegerColumn({
            label: 'Input Tokens',
        }),
        u_output_tokens: IntegerColumn({
            label: 'Output Tokens',
        }),
        u_error: StringColumn({
            label: 'Error',
            max_length: 1000,
        }),
        u_caller_table: StringColumn({
            label: 'Caller Table',
            max_length: 80,
        }),
        u_caller_sys_id: StringColumn({
            label: 'Caller Sys ID',
            max_length: 32,
        }),
        u_caller_context: StringColumn({
            label: 'Caller Context',
            max_length: 200,
        }),
    },
})

// ─── 2. SCRIPT INCLUDE — JevQuestions ───────────────────────────────────────
// Builder helpers for Choice / Noul / Score question primitives.
// Used by any script that needs to build the u_questions JSON payload.

ScriptInclude({
    $id: Now.ID['si_jev_questions'],
    name: 'JevQuestions',
    apiName: 'x_146833_jevnowint.JevQuestions',
    active: true,
    clientCallable: false,
    description: 'Builders for TypeSafe question primitives: JevQuestions.noul(), .choice(), .score()',
    script: Now.include('../server/JevQuestions.server.js'),
})

// ─── 3. SUBFLOW — Jev - Evaluate ────────────────────────────────────────────
// Reusable subflow. Any Flow, other Subflow, or API can call this.
// Inputs:  state_text, questions_json, caller_table, caller_sys_id, context
// Outputs: answers_json, request_sys_id, success

export const jevEvaluateSubflow = Subflow(
    {
        $id: Now.ID['sf_jev_evaluate'],
        name: 'Jev - Evaluate',
        description: 'Creates a Jev request record, calls the Jev API custom action, and returns structured answers.',
        runAs: 'system',
        access: 'public',
        inputs: {
            state_text:    StringColumn({ label: 'State Text',      mandatory: true  }),
            questions_json: StringColumn({ label: 'Questions JSON',  mandatory: true  }),
            caller_table:  StringColumn({ label: 'Caller Table',    mandatory: false }),
            caller_sys_id: StringColumn({ label: 'Caller Sys ID',   mandatory: false }),
            context:       StringColumn({ label: 'Context Label',   mandatory: false }),
            model:         StringColumn({ label: 'Model',           mandatory: false }),
        },
        outputs: {
            answers_json:   StringColumn({ label: 'Answers JSON'    }),
            request_sys_id: StringColumn({ label: 'Request Sys ID'  }),
            success:        StringColumn({ label: 'Success'         }),
        },
    },
    (params) => {

        // Step 1 — create the request record (state=pending)
        const requestRecord = wfa.action(
            action.core.createRecord,
            { $id: Now.ID['sf_create_request_record'] },
            {
                table_name: 'x_146833_jevnowint_request',
                values: TemplateValue({
                    u_state:          'pending',
                    u_state_text:     wfa.dataPill(params.inputs.state_text,     'string'),
                    u_questions:      wfa.dataPill(params.inputs.questions_json,  'string'),
                    u_model:          wfa.dataPill(params.inputs.model,           'string'),
                    u_caller_table:   wfa.dataPill(params.inputs.caller_table,    'string'),
                    u_caller_sys_id:  wfa.dataPill(params.inputs.caller_sys_id,   'string'),
                    u_caller_context: wfa.dataPill(params.inputs.context,         'string'),
                }),
            }
        )

        // Step 2 — call the Jev API custom action
        // Custom action sys_id: 8b632e848377c310b96f6ed0deaad317
        const jevResult = wfa.action(
            action['x_146833_jevnowint.Jev - Call API'],
            { $id: Now.ID['sf_call_jev_api'] },
            {
                request_sys_id: wfa.dataPill(requestRecord.Record.sys_id, 'string'),
            }
        )

        // Step 3 — assign subflow outputs
        wfa.flowLogic.assignSubflowOutputs(
            { $id: Now.ID['sf_assign_outputs'] },
            params.outputs,
            {
                answers_json:   wfa.dataPill(jevResult.answers_json, 'string'),
                request_sys_id: wfa.dataPill(requestRecord.Record.sys_id, 'string'),
                success:        wfa.dataPill(jevResult.success, 'string'),
            }
        )
    }
)

// ─── 4. FLOW — Jev - Process Pending Requests ───────────────────────────────
// Triggered when a new record is created on x_146833_jevnowint_request.
// Calls the Jev - Evaluate subflow automatically.

export const jevProcessPendingFlow = Flow(
    {
        $id: Now.ID['fl_jev_process_pending'],
        name: 'Jev - Process Pending Requests',
        description: 'Triggered on insert of a Jev request record. Calls the Jev - Evaluate subflow.',
        runAs: 'system',
        access: 'public',
    },
    wfa.trigger(
        trigger.record.created,
        { $id: Now.ID['fl_jev_trigger'] },
        {
            table: 'x_146833_jevnowint_request',
            condition: 'u_state=pending',
            run_flow_in: 'background',
            run_on_extended: 'false',
            run_when_setting: 'both',
            run_when_user_setting: 'any',
            run_when_user_list: [],
        }
    ),
    (params) => {
        wfa.action(
            action['x_146833_jevnowint.Jev - Call API'],
            { $id: Now.ID['fl_call_jev_action'] },
            {
                request_sys_id: wfa.dataPill(params.trigger.current.sys_id, 'string'),
            }
        )
    }
)
