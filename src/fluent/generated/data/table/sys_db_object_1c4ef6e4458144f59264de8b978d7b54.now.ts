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
    attributes: {
        enforce_dot_walk_cross_scope_access: true,
    },
    label: 'Jev Request',
    name: 'x_146833_jevnowint_request',
    schema: {
        u_answers: StringColumn({
            maxLength: 4000,
        }),
        u_caller_table: StringColumn({
            maxLength: 80,
        }),
        u_error: StringColumn({
            maxLength: 1000,
        }),
        u_model_used: StringColumn({
            maxLength: 40,
        }),
        u_model: StringColumn({
            default: 'jev-latest',
            maxLength: 40,
        }),
        u_input_tokens: IntegerColumn({}),
        u_state_text: StringColumn({
            maxLength: 4000,
        }),
        u_caller_sys_id: StringColumn({
            maxLength: 32,
        }),
        u_output_tokens: IntegerColumn({}),
        u_questions: StringColumn({
            maxLength: 4000,
        }),
        u_caller_context: StringColumn({
            maxLength: 200,
        }),
        u_state: ChoiceColumn({
            default: 'pending',
            choices: {
                processing: {
                    label: 'Processing',
                    sequence: 2,
                },
                processed: {
                    label: 'Processed',
                    sequence: 3,
                },
                pending: {
                    label: 'Pending',
                    sequence: 1,
                },
                failed: {
                    label: 'Failed',
                    sequence: 4,
                },
            },
        }),
    },
})
