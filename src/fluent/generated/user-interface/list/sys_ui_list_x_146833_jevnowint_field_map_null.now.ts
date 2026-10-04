import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_146833_jevnowint_field_map',
    view: default_view,
    columns: ['u_active', 'u_choices', 'u_jev_type', 'u_question', 'u_source_field', 'u_source_table'],
})
