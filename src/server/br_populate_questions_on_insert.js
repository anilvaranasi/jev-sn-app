so /**
 * Business Rule — Populate Questions on Jev Request Insert
 *
 * Table:     x_146833_jevnowint_request
 * When:      before insert
 * Condition: u_caller_table is not empty AND u_caller_sys_id is not empty
 *            AND u_questions is empty  (don't overwrite if manually set)
 *
 * What it does:
 *   Calls JevFieldMap.forRecord(callerTable, callerSysId) to build the
 *   questions JSON from x_146833_jevnowint_field_map config rows.
 *   Also builds a structured u_state_text JSON from the caller record's
 *   fields so the flow doesn't need to do it.
 *
 * Paste into: System Definition > Business Rules > New
 *   Table:    x_146833_jevnowint_request
 *   When:     before
 *   Insert:   true   Update: false   Delete: false   Query: false
 *   Condition: current.u_caller_table != '' && current.u_caller_sys_id != ''
 *              && current.u_questions == ''
 */

(function() {

    var callerTable = current.getValue('u_caller_table');
    var callerSysId = current.getValue('u_caller_sys_id');

    // Skip if already has questions or missing caller info
    if (!callerTable || !callerSysId || current.getValue('u_questions')) {
        return;
    }

    // Build questions from the field map config table
    var questions = JevFieldMap.forRecord(callerTable, callerSysId);

    if (!questions || Object.keys(questions).length === 0) {
        gs.warn('JevRequest BR: no field map rows found for table=' + callerTable + ' — u_questions will be empty');
        return;
    }

    // Set u_questions as the JSON the flow will read
    current.setValue('u_questions', JSON.stringify(questions));

    // Also build a structured state_text from the caller record
    // so the flow sends rich context to Jev instead of a flat string
    var callerGr = new GlideRecord(callerTable);
    if (callerGr.get(callerSysId)) {

        // Collect all fields that have active field map rows for this table
        var stateObj = {};
        var mapGr = new GlideRecord('x_146833_jevnowint_field_map');
        mapGr.addQuery('u_source_table', callerTable);
        mapGr.addQuery('u_active', true);
        mapGr.query();
        while (mapGr.next()) {
            var field = mapGr.getValue('u_source_field');
            stateObj[field] = callerGr.getDisplayValue(field) || callerGr.getValue(field) || '';
        }

        // Always include short_description and description for context if they exist
        if (callerGr.isValidField('short_description')) {
            stateObj.short_description = callerGr.getValue('short_description') || '';
        }
        if (callerGr.isValidField('description')) {
            stateObj.description = callerGr.getValue('description') || '';
        }

        // Only overwrite u_state_text if it wasn't manually set
        if (!current.getValue('u_state_text')) {
            current.setValue('u_state_text', JSON.stringify(stateObj));
        }
    }

})();
