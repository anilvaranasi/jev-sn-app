# JevNowIntegration — Setup & Replication Guide

## Proof of Concept — Flow Test Run

The screenshot below shows `TriggerJevIntegration` flow test run completing successfully.
`InvokeJevRESTAPI` action received the `RequestBody` built from the request record and
returned the `response_body` with answers (department: database, confidence: 0.74).

![Flow test run completed](docs/images/flow-test-run.png)

---

**GitHub repo:** https://github.com/anilvaranasi/jev-sn-app  
**Scoped app:** `x_146833_jevnowint` | `JevNowIntegration`  
**SDK:** `@servicenow/sdk` 4.13.0  

---

## Architecture

```
Developer (Bob / local)
        │
        │  git push
        ▼
    mydev  ◄──────────────────────────────────────────────────────┐
        │                                                          │
        │  PR merge                               pull-from-sn.yml │
        ▼                                       (workflow_dispatch) │
    nowdev  ──── deploy.yml (push trigger) ──► ServiceNow DEV ─────┘
        │
        │  PR merge
        ▼
      prod  ──── deploy.yml (push trigger) ──► ServiceNow PROD
```

**Branch rules:**
- `mydev` — your working branch. All code changes and SN pulls land here
- `nowdev` — deploy gate for DEV. Only receives merges from `mydev`
- `prod` — deploy gate for PROD. Only receives merges from `nowdev`

---

## What's in the repo

| Path | What it is |
|---|---|
| `src/fluent/generated/automation/flow/` | `Jev - Call API` custom action (Fluent source) |
| `src/fluent/generated/data/table/` | `x_146833_jevnowint_request` table with all 12 columns |
| `src/fluent/generated/server-development/script-include/` | `JevClient` and `JevQuestions` script includes |
| `src/fluent/generated/properties/` | `api_key` and `api_url` system properties |
| `src/fluent/generated/keys.ts` | SDK-generated sys_id key map |
| `.github/workflows/deploy.yml` | Auto-deploys on push to `nowdev` or `prod` |
| `.github/workflows/pull-from-sn.yml` | Manual workflow — pulls SN DEV → `mydev` |
| `now.config.json` | App scope, scopeId, name |

---

## GitHub Actions secrets required

Configure these under **repo → Settings → Secrets and variables → Actions**:

| Secret | Value |
|---|---|
| `SN_DEV_INSTANCE` | e.g. `https://dev123456.service-now.com` |
| `SN_DEV_USER` | ServiceNow DEV admin username |
| `SN_DEV_PASS` | ServiceNow DEV admin password |
| `SN_PROD_INSTANCE` | e.g. `https://prod123456.service-now.com` |
| `SN_PROD_USER` | ServiceNow PROD admin username |
| `SN_PROD_PASS` | ServiceNow PROD admin password |

These secrets are scoped to GitHub environments — `dev` and `production`. Create the environments under **repo → Settings → Environments** before adding secrets.

---

## GitHub Actions permissions

Under **repo → Settings → Actions → General → Workflow permissions**:  
Select **Read and write permissions** — required for the pull workflow to commit back to `mydev`.

---

## Replicating on a new laptop

### 1. Prerequisites

- Node.js 20+
- npm 9+
- Git
- Access to the GitHub repo

### 2. Clone and install

```bash
git clone https://github.com/anilvaranasi/jev-sn-app.git
cd jev-sn-app
git checkout mydev
npm install
```

### 3. Authenticate the SDK to your instances locally (optional — for local deploys)

```bash
# DEV
echo "<your_dev_password>" | npx now-sdk auth \
  --add https://dev123456.service-now.com \
  --type basic \
  --alias dev \
  --username <your_dev_user> \
  --password-stdin

# PROD
echo "<your_prod_password>" | npx now-sdk auth \
  --add https://prod123456.service-now.com \
  --type basic \
  --alias prod \
  --username <your_prod_user> \
  --password-stdin
```

### 4. Build locally to verify

```bash
npm run build
```

---

## Replicating on new ServiceNow DEV + PROD instances

### Step 1 — Update secrets in GitHub

Update all 6 secrets (`SN_DEV_INSTANCE`, `SN_DEV_USER`, `SN_DEV_PASS`, `SN_PROD_INSTANCE`, `SN_PROD_USER`, `SN_PROD_PASS`) to point to the new instances.

### Step 2 — Update now.config.json

If the scoped app `x_146833_jevnowint` does not yet exist on the new instances, you need a new scope and scopeId. Create the scoped app in ServiceNow Studio on the new DEV instance, then update `now.config.json`:

```json
{
    "scope": "x_<new_vendor_prefix>_<appname>",
    "scopeId": "<new_app_sys_id>",
    "name": "JevNowIntegration"
}
```

Commit this change to `mydev`.

### Step 3 — Set system properties on the new instance

In the new DEV instance, navigate to **System Properties** and create:

| Property name | Value |
|---|---|
| `x_146833_jevnowint.api_key` | Your TypeSafe Jev API key |
| `x_146833_jevnowint.api_url` | `https://api.typesafe.ai/v1/systemone` |

> ⚠️ The `api_key` property is never stored in the repo. Set it directly in each instance.

### Step 4 — Deploy to the new DEV instance

Merge `mydev` → `nowdev` to trigger the deploy workflow:

```bash
git checkout nowdev
git merge mydev
git push origin nowdev
git checkout mydev
```

The **Deploy to ServiceNow** GitHub Action will build and install the app on the new DEV instance automatically.

### Step 5 — Verify in SN

On the new DEV instance confirm:
- Scoped app `JevNowIntegration` is installed
- Table `x_146833_jevnowint_request` exists with all 12 columns
- Script includes `JevClient` and `JevQuestions` are active
- Custom action `Jev - Call API` exists in Flow Designer

### Step 6 — Deploy to PROD

Merge `nowdev` → `prod` to deploy to the PROD instance:

```bash
git checkout prod
git merge nowdev
git push origin prod
git checkout mydev
```

---

## Day-to-day workflow

### Making changes in SN DEV UI and pulling back to repo

1. Make changes in ServiceNow DEV (tables, flows, script includes, etc.)
2. Go to **GitHub → Actions → Pull from ServiceNow → Run workflow**
3. The action runs `now-sdk transform --auth dev`, converts SN artefacts to Fluent source, and commits them to `mydev`
4. Pull locally: `git pull --rebase origin mydev`
5. Review the changes, fix anything if needed, commit and push

### Deploying to DEV

```bash
git checkout nowdev
git merge mydev
git push origin nowdev
git checkout mydev
```

### Deploying to PROD

```bash
git checkout prod
git merge nowdev
git push origin prod
git checkout mydev
```

---

## Known gotchas

| Issue | Fix |
|---|---|
| `now-sdk transform` produces duplicate `sys_documentation` files | Delete the standalone files in `src/fluent/generated/other/sys-documentation/` — the SDK auto-includes them in the table definition |
| Pull workflow fails with 403 on push | Enable **Read and write permissions** under repo → Settings → Actions → General |
| `ChoiceColumn` / `StringColumn` imported from wrong module | Use `@servicenow/sdk/core` for table schema, `@servicenow/sdk/automation` for flows/subflows |
| Column labels empty in SN after deploy | Labels must use array format: `label: [{ label: 'My Label', plural: '' }]` |
| `IntegerColumn` with `maxLength` causes build warnings | Remove `maxLength` from `IntegerColumn` — it doesn't apply |
