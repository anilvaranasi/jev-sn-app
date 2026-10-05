import { Table, StringColumn, BooleanColumn, ChoiceColumn } from '@servicenow/sdk/core'

/**
 * x_146833_jevnowint_field_map
 *
 * Config/lookup table — one row per SN field that Jev should evaluate.
 * Drives dynamic question-building at runtime: given a source table + record,
 * JevFieldMap.forRecord() looks up all active rows for that table, reads the
 * actual field values from the source record, and builds the questions JSON.
 *
 * Columns:
 *   u_source_table  — SN table name, e.g. "incident"
 *   u_source_field  — field name on that table, e.g. "severity"
 *   u_jev_type      — Jev primitive: noul | choice | score
 *   u_choices       — JSON array of option keys derived from SN dictionary,
 *                     e.g. ["low","medium","high","critical"] (choice/score only)
 *   u_question      — Natural-language question text sent to Jev as instructions
 *   u_active        — Toggle row on/off without deleting
 */
export const x_146833_jevnowint_field_map = Table({
    actions: {
        read: true,
        update: true,
        delete: true,
        create: true,
    },
    allowClientScripts: false,
    allowNewFields: true,
    allowUiActions: false,
    allowWebServiceAccess: true,
    attributes: {},
    label: 'Jev Field Map',
    name: 'x_146833_jevnowint_field_map',
    schema: {
        u_source_table: StringColumn({
            label: 'Table Name',
            maxLength: 80,
            mandatory: true,
        }),
        u_source_field: StringColumn({
            label: 'Column',
            maxLength: 80,
            mandatory: true,
        }),
        u_jev_type: ChoiceColumn({
            label: 'Jev Type',
            choices: {
                noul: { label: 'Noul (yes/no)', sequence: 1 },
                choice: { label: 'Choice (pick one)', sequence: 2 },
                score: { label: 'Score (rated level)', sequence: 3 },
            },
            maxLength: 20,
            mandatory: true,
        }),
        u_choices: StringColumn({
            label: 'Choices (JSON)',
            maxLength: 4000,
        }),
        u_question: StringColumn({
            label: 'Question',
            maxLength: 500,
            mandatory: true,
        }),
        u_active: BooleanColumn({
            label: 'Active',
            default: true,
            maxLength: 40,
        }),
    },
})
