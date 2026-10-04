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
            label: [{ label: 'State', plural: '' }],
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
            label: [{ label: 'State Text', plural: '' }],
            maxLength: 4000,
        }),
        u_questions: StringColumn({
            label: [{ label: 'Questions (JSON)', plural: '' }],
            maxLength: 4000,
        }),
        u_model: StringColumn({
            label: [{ label: 'Model', plural: '' }],
            default: 'jev-latest',
            maxLength: 40,
        }),
        u_answers: StringColumn({
            label: [{ label: 'Answers (JSON)', plural: '' }],
            maxLength: 4000,
        }),
        u_model_used: StringColumn({
            label: [{ label: 'Model Used', plural: '' }],
            maxLength: 40,
        }),
        u_input_tokens: IntegerColumn({
            label: [{ label: 'Input Tokens', plural: '' }],
            maxLength: 40,
        }),
        u_output_tokens: IntegerColumn({
            label: [{ label: 'Output Tokens', plural: '' }],
            maxLength: 40,
        }),
        u_error: StringColumn({
            label: [{ label: 'Error', plural: '' }],
            maxLength: 1000,
        }),
        u_caller_table: StringColumn({
            label: [{ label: 'Caller Table', plural: '' }],
            maxLength: 80,
        }),
        u_caller_sys_id: StringColumn({
            label: [{ label: 'Caller Sys ID', plural: '' }],
            maxLength: 32,
        }),
        u_caller_context: StringColumn({
            label: [{ label: 'Caller Context', plural: '' }],
            maxLength: 200,
        }),
    },
})
