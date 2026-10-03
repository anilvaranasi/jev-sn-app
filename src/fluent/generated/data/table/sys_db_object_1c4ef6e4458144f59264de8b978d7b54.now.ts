import { Table, StringColumn, IntegerColumn, ChoiceColumn } from '@servicenow/sdk/core'

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
            maxLength: 4000,
        }),
        u_questions: StringColumn({
            maxLength: 4000,
        }),
        u_model: StringColumn({
            default: 'jev-latest',
            maxLength: 40,
        }),
        u_answers: StringColumn({
            maxLength: 4000,
        }),
        u_model_used: StringColumn({
            maxLength: 40,
        }),
        u_input_tokens: IntegerColumn({
            maxLength: 40,
        }),
        u_output_tokens: IntegerColumn({
            maxLength: 40,
        }),
        u_error: StringColumn({
            maxLength: 1000,
        }),
        u_caller_table: StringColumn({
            maxLength: 80,
        }),
        u_caller_sys_id: StringColumn({
            maxLength: 32,
        }),
        u_caller_context: StringColumn({
            maxLength: 200,
        }),
        test_column: StringColumn({
            label: [
                {
                    label: 'test Column',
                    plural: '',
                },
            ],
            maxLength: 40,
        }),
    },
})
