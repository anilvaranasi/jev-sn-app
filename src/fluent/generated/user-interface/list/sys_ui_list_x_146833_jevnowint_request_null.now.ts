import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_146833_jevnowint_request',
    view: default_view,
    columns: [
        'u_answers',
        'u_caller_context',
        'u_caller_sys_id',
        'u_caller_table',
        'u_error',
        'u_input_tokens',
        'u_model',
        'u_model_used',
        'u_output_tokens',
        'u_questions',
    ],
})
