# JevNowIntegration — Setup & Replication Guide

**GitHub repo:** https://github.com/anilvaranasi/jev-sn-app
**Scoped app:** `x_146833_jevnowint` | `JevNowIntegration`
**SDK:** `@servicenow/sdk` 4.13.0
**Jev API:** `https://api.beatapi.io/v1/systemone` | Model: `jev-1.13-free`

---

## Proof of Concept — End-to-end test result

### Source incident — INC0010048

![Incident INC0010048](docs/images/Incident.png)

The incident has **Impact: 2 - Medium**, **Urgency: 2 - Medium**, **Priority: 3 - Moderate**
with no business service assigned. The BR on `x_146833_jevnowint_request` reads this record,
builds the questions from the field map config, and the flow submits them to Jev.

### Processed Jev Request — JevReq0001016

![Processed Jev Request — JevReq0001016](docs/images/JevRequest.png)

| Field | Value | Notes |
|---|---|---|
| **State** | Processed | Full cycle completed successfully |
| **Model** | `jev-1.13-free` | Free tier model |
| **Input / Output Tokens** | 661 / 156 | Efficient — structured state + 3 questions |
| **Jev ID** | `task_dx5COsnAMmYwAay...` | Unique task ID from BeatAPI |
| **Jev Result** | `{"urgency":"2 - Medium","impact":"2 - Medium","business_service":"Corporate Network"}` | Clean flat summary |
| **Error** | Success | |

**Answers (JSON) breakdown:**

| Question | Answer | Confidence | Probabilities |
|---|---|---|---|
| `urgency` | `2 - Medium` | 0.85 | 2-Medium: 0.90, 1-High: 0.10, 3-Low: 0.0 |
| `impact` | `2 - Medium` | 0.96 | 2-Medium: 0.97, 1-High: 0.03, 3-Low: 0.0 |
| `business_service` | `Corporate Network` | 0.98 | Corporate Network: 0.98, others: ~0.0 |

Jev correctly identified **Corporate Network** as the affected service (98% confidence)
and assessed both impact and urgency as **Medium** — consistent with a Wi-Fi issue that
has a workaround (wired ethernet) but disrupts external client meetings.

> **Note on `business_service`:** the incident had no service assigned in SN, yet Jev
> inferred **Corporate Network** from the description alone — "Wi-Fi drops", "VPN", "wired ethernet".
> This demonstrates Jev reasoning over unstructured text, not just structured field values.

---

## What this app does

JevNowIntegration embeds the TypeSafe Jev AI decisions engine into ServiceNow workflows.
Given any source record (e.g. an incident), it submits structured AI judgment questions
and writes typed answers back — enabling automated triage, prioritisation, and routing
without hardcoded rules.

**End-to-end flow:**

```
Source record created (e.g. incident)
        │
        │  Any BR / script creates a Jev Request record
        │  setting u_caller_table, u_caller_sys_id, u_state=pending
        ▼
x_146833_jevnowint_request  (before insert)
        │
        │  BR: "Populate Jev Questions on Insert"
        │  → queries x_146833_jevnowint_field_map for active rows
        │  → reads field values from caller record
        │  → writes u_questions (JSON) + u_state_text (structured JSON)
        ▼
Flow: TriggerJevIntegration  (triggers on u_state=pending)
        │
        │  Reads u_questions + u_state_text (already built by BR)
        │  → calls InvokeJevRESTAPI action → BeatAPI
        │  → writes back u_answers, u_model_used, u_tokens, u_state=processed
        ▼
x_146833_jevnowint_request  (after update, u_state=processed)
        │
        │  BR: "Populate Result Summary on Processed"
        │  → reads u_answers
        │  → writes u_result_summary: { field → top answer value }
        ▼
Downstream BR / Flow reads u_result_summary to act on answers
(e.g. set incident priority, route to team, escalate)
```

---

## Architecture

```
Developer (Bob / local)
        │
        │  git push
        ▼
    mydev  ◄──────────────────────────────────────────────────────┐
        │                                                          │
        │  merge                                  pull-from-sn.yml │
        ▼                                       (workflow_dispatch) │
    nowdev  ──── deploy.yml (push trigger) ──► ServiceNow DEV ─────┘
        │
        │  merge
        ▼
      prod  ──── deploy.yml (push trigger) ──► ServiceNow PROD
```

**Branch rules:**
- `mydev` — working branch. All code changes and SN pulls land here
- `nowdev` — deploy gate for DEV. Only receives merges from `mydev`
- `prod` — deploy gate for PROD. Only receives merges from `nowdev`

---

## What's in the repo

### Fluent source (deployed to SN via SDK)

| Path | What it is |
|---|---|
| `src/fluent/generated/data/table/sys_db_object_1c4ef6e4...now.ts` | `x_146833_jevnowint_request` table — 16 columns |
| `src/fluent/generated/data/table/sys_db_object_jev_field_map.now.ts` | `x_146833_jevnowint_field_map` config/lookup table |
| `src/fluent/generated/automation/flow/sys_hub_flow_4f617a98...now.ts` | `TriggerJevIntegration` flow |
| `src/fluent/generated/automation/flow/sys_hub_action_type_definition_4c1712d8...now.ts` | `InvokeJevRESTAPI` custom action |
| `src/fluent/generated/server-development/script-include/sys_script_include_35348259...` | `JevClient` script include |
| `src/fluent/generated/server-development/script-include/sys_script_include_c50b2213...` | `JevQuestions` script include |
| `src/fluent/generated/server-development/script-include/sys_script_include_db003cec...` | `JevFieldMap` script include |
| `src/fluent/generated/server-development/business-rule/` | Business rules (pulled from SN) |
| `src/fluent/generated/keys.ts` | SDK sys_id key map |

### Reference scripts (not deployed — paste into SN manually)

| Path | What it is |
|---|---|
| `src/server/br_populate_questions_on_insert.js` | BR: auto-populate u_questions + u_state_text on Jev Request insert |
| `src/server/br_populate_result_summary.js` | BR: populate u_result_summary when state → processed |
| `src/server/seed_jev_field_map.fix.js` | Fix script: seed incident field map rows (impact, urgency, business_service) |
| `src/server/seed_jev_requests_sample.fix.js` | Fix script: create sample Jev Request records from 5 recent open incidents |

### Workflow files

| Path | What it is |
|---|---|
| `.github/workflows/deploy.yml` | Auto-deploys on push to `nowdev` or `prod` |
| `.github/workflows/pull-from-sn.yml` | Manual — pulls SN DEV → `mydev` |

---

## Tables

### `x_146833_jevnowint_request` — Jev Request

| Column | Type | Purpose |
|---|---|---|
| `u_state` | Choice | `pending` → `processing` → `processed` / `failed` |
| `u_state_text` | String(4000) | Structured JSON of caller record fields — sent as `state` to Jev |
| `u_questions` | String(4000) | JSON questions map built by BR from field map config |
| `u_model` | String(40) | Jev model to use (default: `jev-1.13-free`) |
| `u_answers` | String(4000) | Full raw Jev response answers JSON |
| `u_result_summary` | String(4000) | Clean flat map: `{ field → top answer value }` |
| `u_model_used` | String(40) | Actual model used as returned by Jev |
| `u_input_tokens` | Integer | Input token count |
| `u_output_tokens` | Integer | Output token count |
| `u_error` | String(1000) | Error message if state=failed |
| `u_caller_table` | String(80) | Source table name, e.g. `incident` |
| `u_caller_sys_id` | String(32) | sys_id of the source record |
| `u_caller_context` | String(200) | Human-readable label, e.g. `INC0010042 - VPN issue` |
| `u_jev_id` | String(50) | Jev task ID returned by the API |
| `u_result` | String(4000) | Generic result placeholder |

### `x_146833_jevnowint_field_map` — Jev Field Map

Config/lookup table — one row per field to evaluate per source table.

| Column | Type | Purpose |
|---|---|---|
| `u_source_table` | String(80) | SN table name, e.g. `incident` |
| `u_source_field` | String(80) | Field name on that table, e.g. `severity` |
| `u_jev_type` | Choice | `noul` / `choice` / `score` |
| `u_choices` | String(4000) | JSON array of option keys, e.g. `["1 - High","2 - Medium","3 - Low"]` |
| `u_question` | String(500) | Natural-language question text sent to Jev |
| `u_active` | Boolean | Toggle row on/off without deleting |

**Seeded rows for `incident`:**

| Field | Jev Type | Choices |
|---|---|---|
| `impact` | choice | `["1 - High","2 - Medium","3 - Low"]` |
| `urgency` | choice | `["1 - High","2 - Medium","3 - Low"]` |
| `business_service` | noul | *(none — reference field)* |

---

## Script includes

### `JevClient`
Fluent HTTP wrapper for the BeatAPI Jev endpoint. Chain `.withState().ask().evaluate()`.

### `JevQuestions`
Builder helpers for raw Jev primitives:
- `JevQuestions.noul(instructions, criteria)` — yes/no probability
- `JevQuestions.choice(instructions, criteria)` — pick one option
- `JevQuestions.score(instructions, criteria)` — rated level 0–N

### `JevFieldMap`
Dynamic question builder driven by `x_146833_jevnowint_field_map`:
```javascript
var questions = JevFieldMap.forRecord('incident', current.sys_id + '');
// Returns ready-to-submit questions object keyed by field name
```

---

## Business Rules

### BR 1 — Populate Jev Questions on Insert
- **Table:** `x_146833_jevnowint_request`
- **When:** before insert
- **Condition:** `u_caller_table != '' && u_caller_sys_id != '' && u_questions == ''`
- **What:** calls `JevFieldMap.forRecord()` → writes `u_questions` + `u_state_text`
- **Script:** `src/server/br_populate_questions_on_insert.js`

### BR 2 — Populate Result Summary on Processed
- **Table:** `x_146833_jevnowint_request`
- **When:** after update
- **Condition:** `current.u_state == 'processed' && current.u_state.changesTo('processed')`
- **What:** reads `u_answers` → writes `u_result_summary` flat map
- **Script:** `src/server/br_populate_result_summary.js`

> Both BRs are created manually in SN then pulled into repo via the Pull workflow.

---

## GitHub Actions secrets required

Configure under **repo → Settings → Secrets and variables → Actions**:

| Secret | Value |
|---|---|
| `SN_DEV_INSTANCE` | e.g. `https://dev123456.service-now.com` |
| `SN_DEV_USER` | ServiceNow DEV admin username |
| `SN_DEV_PASS` | ServiceNow DEV admin password |
| `SN_PROD_INSTANCE` | e.g. `https://prod123456.service-now.com` |
| `SN_PROD_USER` | ServiceNow PROD admin username |
| `SN_PROD_PASS` | ServiceNow PROD admin password |

Secrets are scoped to GitHub environments — `dev` and `production`.  
Create environments under **repo → Settings → Environments** before adding secrets.

---

## BeatAPI Connection & Credential Alias

The Jev API key and endpoint are **never stored in the repo**. They are configured in
ServiceNow using a **Connection & Credential Alias** — the native SN way to manage
external service credentials securely.

### Alias details

| Field | Value |
|---|---|
| **Name** | `JevBeatAPI` |
| **Alias** | `x_146833_jevnowint.JevBeatAPI` |
| **Connection URL** | `https://api.beatapi.io/v1/systemone` |
| **Type** | HTTP Header-based credential |

### Credential configuration

The credential attached to the alias must have:

| Field | Value |
|---|---|
| **Header name** | `Authorization` |
| **Header value** | `Bearer <your-api-key>` |

Where `<your-api-key>` is your TypeSafe Jev API key in the format `sk-...`.

### How to set it up on a new instance

1. Navigate to **Connections & Credentials → Connection & Credential Aliases**
2. Find `JevBeatAPI` (deployed by the app) or create it if missing:
   - **Name:** `JevBeatAPI`
   - **Type:** `Connection and Credential`
3. Open the alias → **Credentials** tab → **New**:
   - **Type:** `HTTP Header`
   - **Name:** `JevBeatAPI Key`
   - Add attribute:
     - **Name:** `Authorization`
     - **Value:** `Bearer sk-xxxxxxxxxxxxxxxxxxxxxxxx`
4. Open the alias → **Connections** tab → **New**:
   - **Name:** `JevBeatAPI Endpoint`
   - **Connection URL:** `https://api.beatapi.io/v1/systemone`
   - **Credential:** select the credential created above
5. Save — the `InvokeJevRESTAPI` action uses this alias automatically

> ⚠️ The credential value (Bearer token) is **never committed to the repo**.
> Set it directly in each SN instance (DEV and PROD separately).

---

## GitHub Actions permissions

Under **repo → Settings → Actions → General → Workflow permissions**:  
Select **Read and write permissions** — required for the pull workflow to commit to `mydev`.

---

## Day-to-day workflow

### Making changes in SN DEV and pulling to repo

1. Make changes in SN DEV (tables, flows, script includes, BRs, etc.)
2. **GitHub → Actions → Pull from ServiceNow → Run workflow** (branch: `mydev`)
3. Pull locally: `git pull --rebase origin mydev`
4. Clean up any stale artefacts (sys_properties, test_column docs — see gotchas)
5. Commit and push any manual cleanups

### Deploying to DEV

```bash
git checkout nowdev
git merge mydev --no-ff -m "merge: <description>"
git push origin nowdev
git checkout mydev
```

### Deploying to PROD

```bash
git checkout prod
git merge nowdev --no-ff -m "merge: <description>"
git push origin prod
git checkout mydev
```

---

## Adding a new source table to Jev

1. Run `seed_jev_field_map.fix.js` pattern — insert rows into `x_146833_jevnowint_field_map` for the new table
2. When creating a `x_146833_jevnowint_request` record set `u_caller_table=<table>`, `u_caller_sys_id=<sys_id>`, `u_state=pending`
3. The BR auto-builds questions, the flow calls Jev, BR 2 writes the summary — no flow changes needed

---

## Replicating on a new laptop

```bash
git clone https://github.com/anilvaranasi/jev-sn-app.git
cd jev-sn-app
git checkout mydev
npm install
npm run build   # verify build passes
```

---

## Known gotchas

| Issue | Fix |
|---|---|
| `sys_properties_336a80e8...` and `sys_properties_432c8f92...` come back on every pull | Delete them after each pull — they are SN-internal properties not scoped to the app |
| `test_column` doc comes back on pull | Delete `sys_documentation_x_146833_jevnowint_request_test_column_en.now.ts` — delete the column from SN permanently |
| New BR / script include has no `$id` | Create in SN first, pull to get the real sys_id, then it's tracked forever |
| `now-sdk transform` produces duplicate `sys_documentation` files | Delete standalone files in `src/fluent/generated/other/sys-documentation/` |
| `IntegerColumn` with `maxLength` causes build warnings | Remove `maxLength` from `IntegerColumn` |
| Pull workflow fails with 403 on push | Enable **Read and write permissions** under repo → Settings → Actions → General |
