import { Table, StringColumn, IntegerColumn, ChoiceColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_146833_jevnowint_request = Table({
    actions: {
        read: true,
        update: false,
        delete: false,
        create: false,
    },
    allowClientScripts: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    attributes: {},
    label: 'Jev Request',
    name: 'x_146833_jevnowint_request',
    schema: {
        u_state: ChoiceColumn({
            label: 'State',
            default: 'pending',
            choices: {
                pending: { label: 'Pending', sequence: 1 },
                processing: { label: 'Processing', sequence: 2 },
                processed: { label: 'Processed', sequence: 3 },
                failed: { label: 'Failed', sequence: 4 },
            },
            maxLength: 40,
        }),
        u_state_text: StringColumn({
            label: 'State Text',
            maxLength: 4000,
        }),
        u_questions: StringColumn({
            label: 'Questions (JSON)',
            maxLength: 4000,
        }),
        u_model: StringColumn({
            label: 'Model',
            default: 'jev-latest',
            maxLength: 40,
        }),
        u_answers: StringColumn({
            label: 'Answers (JSON)',
            maxLength: 4000,
        }),
        u_model_used: StringColumn({
            label: 'Model Used',
            maxLength: 40,
        }),
        u_input_tokens: IntegerColumn({
            label: 'Input Tokens',
            maxLength: 40,
        }),
        u_output_tokens: IntegerColumn({
            label: 'Output Tokens',
            maxLength: 40,
        }),
        u_error: StringColumn({
            label: 'Error',
            maxLength: 1000,
        }),
        u_caller_table: StringColumn({
            label: 'Caller Table',
            maxLength: 80,
        }),
        u_caller_sys_id: StringColumn({
            label: 'Caller Sys ID',
            maxLength: 32,
        }),
        u_caller_context: StringColumn({
            label: 'Caller Context',
            maxLength: 200,
        }),
        u_jev_id: StringColumn({
            label: 'Jev ID',
            maxLength: 60,
        }),
        u_result: StringColumn({
            label: 'Result',
            maxLength: 4000,
        }),
        u_severity_score: IntegerColumn({
            maxLength: 40,
        }),
        u_severity_confidence: DecimalColumn({
            maxLength: 15,
        }),
        u_task_id: StringColumn({
            maxLength: 60,
        }),
        u_is_urgent_noul: DecimalColumn({
            label: 'Is Urgent (Noul)',
            maxLength: 15,
        }),
        u_department_choice: StringColumn({
            maxLength: 80,
        }),
        u_department_confidence: DecimalColumn({
            maxLength: 15,
        }),
    },
})
