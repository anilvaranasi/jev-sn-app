import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_146833_jevnowint_field_map',
    view: default_view,
    sections: [
        {
            caption: '',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'u_jev_type',
                            type: 'table_field',
                        },
                        {
                            field: 'u_question',
                            type: 'table_field',
                        },
                        {
                            field: 'u_source_table',
                            type: 'table_field',
                        },
                        {
                            field: 'u_active',
                            type: 'table_field',
                        },
                        {
                            field: 'u_choices',
                            type: 'table_field',
                        },
                        {
                            field: 'u_source_field',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
    ],
})
