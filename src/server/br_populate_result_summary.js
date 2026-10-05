/**
 * Business Rule — Populate Result Summary on Processed
 *
 * Table:     x_146833_jevnowint_request
 * When:      after update
 * Condition: current.u_state == 'processed' && current.u_state.changesTo('processed')
 *
 * What it does:
 *   Reads u_answers (raw Jev response JSON) and builds u_result_summary —
 *   a clean flat JSON map of field -> top answer value, e.g.:
 *   {
 *     "impact":           "1 - High",
 *     "urgency":          "2 - Medium",
 *     "business_service": true
 *   }
 *
 *   For each answer:
 *     choice  → uses .choice  (the winning option key)
 *     noul    → uses .noul    (probability 0-1, rounded to 2dp)
 *     score   → uses .score   (weighted score value)
 *
 * Paste into: System Definition > Business Rules > New
 *   Table:    x_146833_jevnowint_request
 *   When:     after
 *   Insert:   false   Update: true   Delete: false   Query: false
 *   Condition: current.u_state == 'processed' && current.u_state.changesTo('processed')
 */

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

    var gr = new GlideRecord('x_146833_jevnowint_request');
    if (gr.get(current.getUniqueValue())) {
        gr.setValue('u_result_summary', JSON.stringify(summary));
        gr.update();
    }

})();
