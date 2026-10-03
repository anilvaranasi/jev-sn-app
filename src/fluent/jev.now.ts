import '@servicenow/sdk/global'
import { BusinessRule, ScriptInclude } from '@servicenow/sdk/core'

import { enrichIncidentOnInsert } from '../server/JevIncidentDemo.server'

// ─── 1. SCRIPT INCLUDE — JevClient ──────────────────────────────────────────

ScriptInclude({
    $id: Now.ID['si_jev_client'],
    name: 'JevClient',
    apiName: 'x_146833_jevnowint.JevClient',
    active: true,
    clientCallable: false,
    description: 'Fluent HTTP wrapper for the TypeSafe Jev API. Chain .withState().ask().evaluate() to get structured AI judgments.',
    script: Now.include('../server/JevClient.server.js'),
})

// ─── 2. SCRIPT INCLUDE — JevQuestions ───────────────────────────────────────

ScriptInclude({
    $id: Now.ID['si_jev_questions'],
    name: 'JevQuestions',
    apiName: 'x_146833_jevnowint.JevQuestions',
    active: true,
    clientCallable: false,
    description: 'Builders for TypeSafe question primitives: JevQuestions.noul(), .choice(), .score()',
    script: Now.include('../server/JevQuestions.server.js'),
})

// ─── 3. BUSINESS RULE — Enrich Incident on Insert ───────────────────────────
// Runs AFTER INSERT on incident. Calls Jev with 3 parallel questions and
// stamps answers onto u_jev_urgent, u_jev_department, u_jev_severity.

BusinessRule({
    $id: Now.ID['br_jev_enrich_incident'],
    name: 'x_146833_jevnowint - Enrich Incident with Jev on Insert',
    table: 'incident',
    active: true,
    when: 'after',
    action: ['insert'],
    order: 900,
    script: enrichIncidentOnInsert,
})
