(function() {

    var callerTable = current.getValue('u_caller_table');
    var callerSysId = current.getValue('u_caller_sys_id');

    if (!callerTable || !callerSysId || current.getValue('u_questions')) {
        return;
    }

    // Build questions from the field map config table
    var questions = JevFieldMap.forRecord(callerTable, callerSysId);

    if (!questions || Object.keys(questions).length === 0) {
        gs.warn('JevRequest BR: no field map rows found for table=' + callerTable);
        return;
    }

    current.setValue('u_questions', JSON.stringify(questions));

    // Build structured state from the caller record
    var callerGr = new GlideRecord(callerTable);
    if (callerGr.get(callerSysId)) {

        var stateObj = {};

        // Include all fields that have active field map rows
        var mapGr = new GlideRecord('x_146833_jevnowint_field_map');
        mapGr.addQuery('u_source_table', callerTable);
        mapGr.addQuery('u_active', true);
        mapGr.query();
        while (mapGr.next()) {
            var field = mapGr.getValue('u_source_field');
            stateObj[field] = callerGr.getDisplayValue(field) || callerGr.getValue(field) || '';
        }

        // Always include short_description and description for context
        if (callerGr.isValidField('short_description')) {
            stateObj.short_description = callerGr.getValue('short_description') || '';
        }
        if (callerGr.isValidField('description')) {
            stateObj.description = callerGr.getValue('description') || '';
        }

        if (!current.getValue('u_state_text')) {
            current.setValue('u_state_text', JSON.stringify(stateObj));
        }
    }

})();