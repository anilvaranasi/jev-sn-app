(function() {

    var rawAnswers = current.getValue('u_answers');
    if (!rawAnswers) {
        return;
    }

    var answers = {};
    try {
        answers = JSON.parse(rawAnswers);
    } catch(e) {
        gs.warn('JevRequest ResultSummary BR: failed to parse u_answers — ' + e);
        return;
    }

    var summary = {};

    for (var field in answers) {
        if (!answers.hasOwnProperty(field)) continue;

        var ans = answers[field];
        if (!ans) continue;

        // choice type — use the winning option
        if (typeof ans.choice !== 'undefined') {
            summary[field] = ans.choice;

        // noul type — use the probability rounded to 2dp
        } else if (typeof ans.noul !== 'undefined') {
            summary[field] = Math.round(ans.noul * 100) / 100;

        // score type — use the weighted score value
        } else if (typeof ans.score !== 'undefined') {
            summary[field] = ans.score;
        }
    }

    if (Object.keys(summary).length === 0) {
        return;
    }

    var grRec = new GlideRecord('x_146833_jevnowint_request');
    if (grRec.get(current.getUniqueValue())) {
        grRec.setValue('u_result_summary', JSON.stringify(summary));
        grRec.update();
    }

})();
