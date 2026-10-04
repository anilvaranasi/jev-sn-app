import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['11fd3c608373c710b96f6ed0deaad3cc'],
    table: 'sys_script_fix',
    data: {
        before: false,
        name: 'Insert sample Jev Request for incidents',
        record_for_rollback: true,
        script: `/**
 * Fix Script — Insert sample Jev Request records for recent open incidents
 *
 * Reads the 5 most recently updated open incidents and creates a
 * x_146833_jevnowint_request record for each one with u_state=pending.
 * The BR "Populate Jev Questions on Insert" will auto-populate
 * u_questions and u_state_text, then the flow will call Jev.
 *
 * Run via: System Definition > Fix Scripts > New > paste > Run Fix Script
 */

var MAX_INCIDENTS = 1;
var inserted = 0;
var skipped  = 0;

var incGr = new GlideRecord('incident');
incGr.addQuery('state', 'IN', '1,2,3');   // 1=New, 2=In Progress, 3=On Hold
incGr.orderByDesc('sys_updated_on');
incGr.setLimit(MAX_INCIDENTS);
incGr.query();

while (incGr.next()) {
    var incSysId = incGr.getUniqueValue();
    var incNum   = incGr.getValue('number');

    // Skip if a pending/processing request already exists for this incident
    var existing = new GlideRecord('x_146833_jevnowint_request');
    existing.addQuery('u_caller_table',  'incident');
    existing.addQuery('u_caller_sys_id', incSysId);
    existing.addQuery('u_state',         'IN', 'pending,processing');
    existing.query();

    if (existing.next()) {
        gs.info('JevRequest seed: skipped ' + incNum + ' — active request already exists');
        skipped++;
        continue;
    }

    var jr = new GlideRecord('x_146833_jevnowint_request');
    jr.initialize();
    jr.setValue('u_caller_table',   'incident');
    jr.setValue('u_caller_sys_id',  incSysId);
    jr.setValue('u_caller_context', incNum + ' - ' + (incGr.getValue('short_description') || '').substring(0, 150));
    jr.setValue('u_state',          'pending');
    // u_questions and u_state_text will be auto-populated by the BR before insert
    jr.insert();

    gs.info('JevRequest seed: created request for incident ' + incNum + ' (' + incSysId + ')');
    inserted++;
}

gs.info('JevRequest seed complete — inserted: ' + inserted + ', skipped: ' + skipped);
`,
        sys_name: 'Insert sample Jev Request for incidents',
        unloadable: false,
    },
})
