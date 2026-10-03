import { gs } from '@servicenow/glide'

/**
 * Business Rule — runs AFTER INSERT on incident.
 *
 * Sends three parallel Jev questions in a single API call:
 *   1. is_urgent   (Noul)   — probability the incident is urgent
 *   2. department  (Choice) — which team should handle it
 *   3. severity    (Score)  — how severe is the reported impact
 *
 * Stamps results onto:
 *   u_jev_urgent      — "true" / "false"  (threshold: noul >= 0.7)
 *   u_jev_department  — winning choice string
 *   u_jev_severity    — numeric score 0.00 – 3.00
 *
 * @param {GlideRecord} current
 * @param {GlideRecord} previous
 */
export function enrichIncidentOnInsert(current, previous) {
    var state = current.getValue('short_description') + '\n' +
                current.getValue('description');

    var client    = new x_146833_jevnowint.JevClient();
    var questions = x_146833_jevnowint.JevQuestions;

    var result = client
        .withState(state)
        .ask('is_urgent', questions.noul(
            'Does this message convey urgency or time pressure?',
            {
                'true':  'Explicitly time-sensitive — words like urgent, ASAP, down, failing, outage',
                'false': 'No urgency expressed — routine request or general enquiry'
            }
        ))
        .ask('department', questions.choice(
            'Which support team should handle this incident?',
            {
                'network':   'Network outages, VPN, DNS, connectivity failures',
                'security':  'Access denied, credential issues, suspected breaches',
                'hardware':  'Physical device failures, printer issues, peripheral faults',
                'software':  'Application crashes, bugs, unexpected behavior',
                'hr':        'People, payroll, workplace, HR policy questions',
                'other':     'Does not clearly fit any of the above categories'
            }
        ))
        .ask('severity', questions.score(
            'How severe is the business impact described?',
            [
                'Minimal — cosmetic or informational, no service affected',
                'Low — minor inconvenience, a workaround exists',
                'Medium — partial outage or degraded service',
                'High — critical service completely down, no workaround'
            ]
        ))
        .evaluate();

    if (!result.success) {
        gs.warn('JevIncidentDemo: Jev evaluation failed — ' + result.error);
        return;
    }

    var answers = result.answers;

    current.setValue('u_jev_urgent',     answers.is_urgent.noul >= 0.7 ? 'true' : 'false');
    current.setValue('u_jev_department', answers.department.choice);
    current.setValue('u_jev_severity',   answers.severity.score.toFixed(2));

    gs.info(
        'JevNowIntegration: enriched ' + current.getUniqueValue() +
        ' — urgent='   + answers.is_urgent.noul.toFixed(2) +
        ' dept='       + answers.department.choice +
        ' severity='   + answers.severity.score.toFixed(2) +
        ' (model='     + result.model + ')'
    );
}
