import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['701ab4288333c710b96f6ed0deaad387'],
    table: 'sys_script_fix',
    data: {
        before: false,
        name: 'Seed Jev Field Map for incident table',
        record_for_rollback: true,
        script: `/**
 * Fix Script — Seed Jev Field Map for incident table
 *
 * Seeds x_146833_jevnowint_field_map with mappings for:
 *   - impact       (choice)  — 1 High / 2 Medium / 3 Low
 *   - urgency      (choice)  — 1 High / 2 Medium / 3 Low
 *   - business_service (noul) — reference field, yes/no whether a service is affected
 *
 * Safe to re-run — checks for existing row before inserting.
 *
 * Run via: System Definition > Fix Scripts > New > paste > Run Fix Script
 */

var ROWS = [
    {
        u_source_table: 'incident',
        u_source_field: 'impact',
        u_jev_type:     'choice',
        u_choices:      JSON.stringify(['1 - High', '2 - Medium', '3 - Low']),
        u_question:     'What is the business impact of this incident?',
        u_active:       true
    },
    {
        u_source_table: 'incident',
        u_source_field: 'urgency',
        u_jev_type:     'choice',
        u_choices:      JSON.stringify(['1 - High', '2 - Medium', '3 - Low']),
        u_question:     'How urgently does this incident need to be resolved?',
        u_active:       true
    },
    {
        u_source_table: 'incident',
        u_source_field: 'business_service',
        u_jev_type:     'choice',
        u_choices:      JSON.stringify(['e-Commerce Platform','Payment Processing','HR Management','Corporate Network','Data & Analytics','none']),
        u_question:     'Which business service is most affected by this incident?',
        u_active:       true
    }
];

var inserted = 0;
var skipped  = 0;

for (var i = 0; i < ROWS.length; i++) {
    var row = ROWS[i];

    // Check if row already exists — avoid duplicates on re-run
    var check = new GlideRecord('x_146833_jevnowint_field_map');
    check.addQuery('u_source_table', row.u_source_table);
    check.addQuery('u_source_field', row.u_source_field);
    check.query();

    if (check.next()) {
        gs.info('JevFieldMap seed: skipped existing row — ' + row.u_source_table + '.' + row.u_source_field);
        skipped++;
        continue;
    }

    var gr = new GlideRecord('x_146833_jevnowint_field_map');
    gr.initialize();
    gr.setValue('u_source_table', row.u_source_table);
    gr.setValue('u_source_field', row.u_source_field);
    gr.setValue('u_jev_type',     row.u_jev_type);
    gr.setValue('u_choices',      row.u_choices);
    gr.setValue('u_question',     row.u_question);
    gr.setValue('u_active',       row.u_active);
    gr.insert();

    gs.info('JevFieldMap seed: inserted — ' + row.u_source_table + '.' + row.u_source_field);
    inserted++;
}

gs.info('JevFieldMap seed complete — inserted: ' + inserted + ', skipped: ' + skipped);
`,
        sys_name: 'Seed Jev Field Map for incident table',
        unloadable: false,
    },
})
