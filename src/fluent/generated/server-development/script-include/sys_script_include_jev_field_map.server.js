/**
 * JevFieldMap — dynamic question builder driven by x_146833_jevnowint_field_map.
 *
 * Reads the config table to find all active field mappings for a given SN table,
 * then builds a ready-to-submit Jev questions object by reading actual field values
 * from the source record and constructing the right question primitive per row.
 *
 * Usage (in a Flow script step or Business Rule):
 *
 *   var questions = JevFieldMap.forRecord('incident', current.sys_id + '');
 *   // returns e.g.:
 *   // {
 *   //   severity: { type: 'choice', instructions: 'What is the severity?',
 *   //               criteria: { low: 'low', medium: 'medium', high: 'high', critical: 'critical' } },
 *   //   is_urgent: { type: 'noul', instructions: 'Is this incident urgent?' }
 *   // }
 */
var JevFieldMap = {

    /**
     * Build a Jev questions object for a source record.
     *
     * @param {string} tableName  SN table name, e.g. 'incident'
     * @param {string} sysId      sys_id of the source record
     * @returns {object}          Questions map keyed by field name, or {} if no config rows found
     */
    forRecord: function(tableName, sysId) {
        var questions = {};

        // Load the source record once so we can embed field values in instructions
        var sourceGr = new GlideRecord(tableName);
        if (!sourceGr.get(sysId)) {
            gs.warn('JevFieldMap.forRecord: source record not found — table=' + tableName + ' sysId=' + sysId);
            return questions;
        }

        // Query all active field map rows for this table
        var mapGr = new GlideRecord('x_146833_jevnowint_field_map');
        mapGr.addQuery('u_source_table', tableName);
        mapGr.addQuery('u_active', true);
        mapGr.query();

        while (mapGr.next()) {
            var field    = mapGr.getValue('u_source_field');
            var jevType  = mapGr.getValue('u_jev_type');
            var question = mapGr.getValue('u_question');
            var rawChoices = mapGr.getValue('u_choices');

            // Append the actual current field value to the question for context
            var fieldValue = sourceGr.getDisplayValue(field) || sourceGr.getValue(field) || '';
            if (fieldValue) {
                question = question + ' (current value: ' + fieldValue + ')';
            }

            if (jevType === 'noul') {
                questions[field] = {
                    type: 'noul',
                    instructions: question
                };

            } else if (jevType === 'choice') {
                var criteria = {};
                if (rawChoices) {
                    try {
                        var choiceArr = JSON.parse(rawChoices);
                        for (var i = 0; i < choiceArr.length; i++) {
                            criteria[choiceArr[i]] = choiceArr[i];
                        }
                    } catch(e) {
                        gs.warn('JevFieldMap.forRecord: invalid JSON in u_choices for field=' + field + ' — ' + e);
                    }
                }
                questions[field] = {
                    type: 'choice',
                    instructions: question,
                    criteria: criteria
                };

            } else if (jevType === 'score') {
                var levels = [];
                if (rawChoices) {
                    try {
                        levels = JSON.parse(rawChoices);
                    } catch(e) {
                        gs.warn('JevFieldMap.forRecord: invalid JSON in u_choices for field=' + field + ' — ' + e);
                    }
                }
                questions[field] = {
                    type: 'score',
                    instructions: question,
                    criteria: levels
                };
            }
        }

        return questions;
    }
};
