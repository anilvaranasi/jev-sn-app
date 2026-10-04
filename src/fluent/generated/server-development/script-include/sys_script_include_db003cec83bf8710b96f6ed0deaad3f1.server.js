var JevFieldMap = {

    forRecord: function(tableName, sysId) {
        var questions = {};

        var sourceGr = new GlideRecord(tableName);
        if (!sourceGr.get(sysId)) {
            gs.warn('JevFieldMap.forRecord: source record not found — table=' + tableName + ' sysId=' + sysId);
            return questions;
        }

        var mapGr = new GlideRecord('x_146833_jevnowint_field_map');
        mapGr.addQuery('u_source_table', tableName);
        mapGr.addQuery('u_active', true);
        mapGr.query();

        while (mapGr.next()) {
            var field      = mapGr.getValue('u_source_field');
            var jevType    = mapGr.getValue('u_jev_type');
            var question   = mapGr.getValue('u_question');
            var rawChoices = mapGr.getValue('u_choices');

            var fieldValue = sourceGr.getDisplayValue(field) || sourceGr.getValue(field) || '';
            if (fieldValue) {
                question = question + ' (current value: ' + fieldValue + ')';
            }

            if (jevType === 'noul') {
                questions[field] = { type: 'noul', instructions: question };

            } else if (jevType === 'choice') {
                var criteria = {};
                if (rawChoices) {
                    try {
                        var choiceArr = JSON.parse(rawChoices);
                        for (var i = 0; i < choiceArr.length; i++) {
                            criteria[choiceArr[i]] = choiceArr[i];
                        }
                    } catch(e) {
                        gs.warn('JevFieldMap.forRecord: invalid u_choices for field=' + field + ' — ' + e);
                    }
                }
                questions[field] = { type: 'choice', instructions: question, criteria: criteria };

            } else if (jevType === 'score') {
                var levels = [];
                if (rawChoices) {
                    try { levels = JSON.parse(rawChoices); }
                    catch(e) { gs.warn('JevFieldMap.forRecord: invalid u_choices for field=' + field + ' — ' + e); }
                }
                questions[field] = { type: 'score', instructions: question, criteria: levels };
            }
        }

        return questions;
    }
};