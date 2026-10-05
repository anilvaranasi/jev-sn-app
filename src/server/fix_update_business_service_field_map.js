/**
 * Fix Script — Update business_service field map row for incident
 *
 * Changes the business_service mapping from noul (yes/no) to choice
 * so Jev identifies WHICH business service is affected, not just whether one is.
 *
 * Also reads actual business service names from cmdb_ci_service to build
 * the choices list dynamically, with a fallback to known values.
 *
 * Safe to re-run — updates the existing row, does not create a duplicate.
 *
 * Run via: System Definition > Fix Scripts > New > paste > Run Fix Script
 */

// Collect business service names from CMDB
var serviceNames = [];
var svcGr = new GlideRecord('cmdb_ci_service');
svcGr.addQuery('operational_status', '1'); // operational only
svcGr.orderBy('name');
svcGr.setLimit(50);
svcGr.query();
while (svcGr.next()) {
    var name = svcGr.getValue('name');
    if (name) serviceNames.push(name);
}

// Fallback to known values if CMDB is empty
if (serviceNames.length === 0) {
    serviceNames = [
        'e-Commerce Platform',
        'Payment Processing',
        'HR Management',
        'Corporate Network',
        'Data & Analytics'
    ];
    gs.warn('FieldMapUpdate: no services found in CMDB — using fallback list');
}

// Always add "none" as the last option
serviceNames.push('none');

gs.info('FieldMapUpdate: building choices from ' + (serviceNames.length - 1) + ' business services + none');

// Find and update the existing business_service row
var mapGr = new GlideRecord('x_146833_jevnowint_field_map');
mapGr.addQuery('u_source_table', 'incident');
mapGr.addQuery('u_source_field', 'business_service');
mapGr.query();

if (!mapGr.next()) {
    // Row doesn't exist — insert it
    mapGr = new GlideRecord('x_146833_jevnowint_field_map');
    mapGr.initialize();
    mapGr.setValue('u_source_table', 'incident');
    mapGr.setValue('u_source_field', 'business_service');
    mapGr.setValue('u_active',       true);
}

mapGr.setValue('u_jev_type', 'choice');
mapGr.setValue('u_choices',  JSON.stringify(serviceNames));
mapGr.setValue('u_question', 'Which business service is most affected by this incident?');

if (mapGr.isNewRecord()) {
    mapGr.insert();
    gs.info('FieldMapUpdate: inserted new business_service row with ' + serviceNames.length + ' choices');
} else {
    mapGr.update();
    gs.info('FieldMapUpdate: updated business_service row — type=choice, choices=' + JSON.stringify(serviceNames));
}
