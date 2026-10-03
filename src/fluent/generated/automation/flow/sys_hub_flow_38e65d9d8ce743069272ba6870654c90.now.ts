import { Subflow, wfa, action } from '@servicenow/sdk/automation'
import { StringColumn } from '@servicenow/sdk/core'

export const jev_evaluate = Subflow(
    {
        $id: Now.ID['38e65d9d8ce743069272ba6870654c90'],
        name: 'Jev - Evaluate',
        internalName: 'jev__evaluate',
        description: 'Creates a Jev Request record and calls the Jev API to evaluate questions.',
        runAs: 'system',
        masterSnapshot: 'f86abac8833bc310b96f6ed0deaad34d',
        inputs: {
            caller_table: StringColumn({
                label: 'Caller Table',
            }),
            questions_json: StringColumn({
                label: 'Questions JSON',
                mandatory: true,
            }),
            model: StringColumn({
                label: 'Model',
            }),
            state_text: StringColumn({
                label: 'State Text',
                mandatory: true,
            }),
            caller_sys_id: StringColumn({
                label: 'Caller Sys ID',
            }),
            context: StringColumn({
                label: 'Context',
            }),
        },
        outputs: {
            success: StringColumn({
                label: 'Success',
            }),
            request_sys_id: StringColumn({
                label: 'Request Sys ID',
            }),
            answers_json: StringColumn({
                label: 'Answers JSON',
            }),
        },
    },
    (_params) => {
        const actionInstance_1 = wfa.action(
            action.core.createRecord,
            {
                $id: Now.ID['2f7dec74e6c94ab9a98b89efad46664f'],
            },
            {
                table_name: 'x_146833_jevnowint_request',
                values: TemplateValue({
                    u_state: 'pending',
                    u_state_text: wfa.dataPill(_params.inputs.state_text, 'string'),
                    u_questions: wfa.dataPill(_params.inputs.questions_json, 'string'),
                    u_model: wfa.dataPill(_params.inputs.model, 'string'),
                    u_caller_table: wfa.dataPill(_params.inputs.caller_table, 'string'),
                    u_caller_sys_id: wfa.dataPill(_params.inputs.caller_sys_id, 'string'),
                    u_caller_context: wfa.dataPill(_params.inputs.context, 'string'),
                }),
            }
        )
        const actionInstance_2 = wfa.action(
            '325ab6c8833bc310b96f6ed0deaad384',
            {
                $id: Now.ID['7006a268522243be96fd879070938fd2'],
            },
            {
                request_sys_id: wfa.dataPill(actionInstance_1.record.sys_id, 'string'),
            }
        )
        wfa.flowLogic.assignSubflowOutputs(
            {
                $id: Now.ID['50fcf4094b1c45318e1c07f8b5c075a5'],
            },
            _params.outputs,
            {
                answers_json: wfa.dataPill(actionInstance_2.answers_json, 'string'),
                request_sys_id: wfa.dataPill(actionInstance_1.record.sys_id, 'string'),
                success: wfa.dataPill(actionInstance_2.success, 'string'),
            }
        )
    }
)
