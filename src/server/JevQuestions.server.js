/**
 * JevQuestions — builder helpers for the three TypeSafe question primitives.
 *
 * Pass results directly to JevClient.ask(id, question).
 * See https://docs.typesafe.ai/primitives for full reference.
 */
var JevQuestions = {

    /**
     * Noul — yes/no probability question.
     * Returns probability 0 (no) to 1 (yes).
     *
     * @param {string|object} instructions
     * @param {{ true?: string, false?: string }} [criteria]
     * @returns {object}
     *
     * @example
     *   JevQuestions.noul('Does this message convey urgency?')
     *   JevQuestions.noul('Is the customer at risk of churning?', {
     *       'true':  'Explicit cancellation intent or unresolved critical issue',
     *       'false': 'Routine inquiry with no escalation signals'
     *   })
     */
    noul: function(instructions, criteria) {
        var q = { type: 'noul', instructions: instructions };
        if (criteria) q.criteria = criteria;
        return q;
    },

    /**
     * Choice — pick one option from a named set.
     * Returns chosen option + full probability distribution + confidence.
     *
     * @param {string|object} instructions
     * @param {object} criteria  Map of option → description (max 255 options)
     * @returns {object}
     *
     * @example
     *   JevQuestions.choice('Which team should handle this?', {
     *       billing:   'Payments, invoicing, refunds',
     *       technical: 'Bugs, outages, integrations',
     *       security:  'Access, credentials, suspected breaches',
     *       hr:        'People, payroll, workplace',
     *       other:     'None of the above'
     *   })
     */
    choice: function(instructions, criteria) {
        return { type: 'choice', instructions: instructions, criteria: criteria };
    },

    /**
     * Score — rate along ordered descriptive levels.
     * Returns probability-weighted score + per-level probabilities + confidence.
     *
     * @param {string|object} instructions
     * @param {string[]} criteria  Ordered array of level descriptions (2–10 levels)
     * @returns {object}
     *
     * @example
     *   JevQuestions.score('How severe is the impact?', [
     *       'Minimal — cosmetic or informational',
     *       'Low — workaround exists',
     *       'Medium — partial service degradation',
     *       'High — critical service completely down'
     *   ])
     */
    score: function(instructions, criteria) {
        return { type: 'score', instructions: instructions, criteria: criteria };
    }
};
