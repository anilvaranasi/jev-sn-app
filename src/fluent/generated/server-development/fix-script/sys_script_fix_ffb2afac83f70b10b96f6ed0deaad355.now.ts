import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ffb2afac83f70b10b96f6ed0deaad355'],
    table: 'sys_script_fix',
    data: {
        before: false,
        name: 'Fix Labels',
        record_for_rollback: true,
        script: `/**
 * Fix Script — Set missing column labels on x_146833_jevnowint_request
 *
 * Some columns were added without labels (pulled from SN with empty label).
 * This script updates sys_dictionary directly to set the display label.
 *
 * Safe to re-run — only updates rows where label is currently empty.
 *
 * Run via: System Definition > Fix Scripts > New > paste > Run Fix Script
 */

var TABLE = 'x_146833_jevnowint_request';

var LABELS = {
    u_severity_score:       'Severity Score',
    u_severity_confidence:  'Severity Confidence',
    u_task_id:              'Task ID',
    u_is_urgent_noul:       'Is Urgent (Noul)',
    u_department_choice:    'Department Choice',
    u_department_confidence:'Department Confidence',
    number:                 'Number'
};

var updated = 0;
var skipped = 0;

for (var col in LABELS) {
    if (!LABELS.hasOwnProperty(col)) continue;

    var label = LABELS[col];

    var dict = new GlideRecord('sys_dictionary');
    dict.addQuery('name', TABLE);
    dict.addQuery('element', col);
    dict.query();

    if (!dict.next()) {
        gs.warn('LabelFix: column not found — ' + TABLE + '.' + col);
        continue;
    }

    // Only update if label is currently empty
    var current_label = dict.getValue('column_label') || '';
    if (current_label) {
        gs.info('LabelFix: skipped ' + col + ' — already has label: ' + current_label);
        skipped++;
        continue;
    }

    dict.setValue('column_label', label);
    dict.update();
    gs.info('LabelFix: set label "' + label + '" on ' + TABLE + '.' + col);
    updated++;
}

gs.info('LabelFix complete — updated: ' + updated + ', skipped: ' + skipped);
`,
        sys_name: 'Fix Labels',
        unloadable: false,
    },
})
