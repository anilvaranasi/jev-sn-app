# JevNowIntegration — ServiceNow Scoped App

TypeSafe Jev AI judgments in ServiceNow, built with the **@servicenow/sdk Fluent SDK**.
GitHub Actions handles all deployments — push to `nowdev` deploys to DEV, push to `prod` deploys to PROD.

## Branch model

```
mydev  →  (PR)  →  nowdev  →  GitHub Actions deploys to DEV instance
                   nowdev  →  (PR)  →  prod  →  GitHub Actions deploys to PROD instance
```

## Project structure

```
jev-sn-app/
├── now.config.js           # App config (scope, name, instance)
├── now.config.json         # scope + scopeId for the SDK
├── package.json            # @servicenow/sdk deps + build/deploy scripts
├── .env.example            # Credentials template (copy to app.env locally)
│
├── src/
│   ├── fluent/
│   │   ├── jev.now.ts              # Fluent declarations: ScriptIncludes + BusinessRule
│   │   └── generated/keys.ts      # sys_ids (auto-updated by SDK after first deploy)
│   └── server/
│       ├── JevClient.server.js     # Fluent HTTP client — .withState().ask().evaluate()
│       ├── JevQuestions.server.js  # Choice / Noul / Score question builders
│       └── JevIncidentDemo.server.js # Business rule logic — incident enrichment
│
└── .github/workflows/
    ├── pr-checks.yml   # Build + validate on PRs to nowdev / prod
    └── deploy.yml      # Deploy to DEV (nowdev) or PROD (prod) on push
```

## Setup

### 1. Clone and install
```bash
git clone https://github.com/anilvaranasi/jev-sn-app.git
cd jev-sn-app
npm install
```

### 2. GitHub Secrets
Add these in **Settings → Secrets and variables → Actions**:

| Secret | Value |
|---|---|
| `SN_DEV_INSTANCE` | `https://dev224768.service-now.com` |
| `SN_DEV_USER` | `admin` |
| `SN_DEV_PASS` | your dev password |
| `SN_PROD_INSTANCE` | your prod URL |
| `SN_PROD_USER` | `admin` |
| `SN_PROD_PASS` | your prod password |

Also create a **GitHub Environment** named **`dev`** (and optionally `production` with a manual approval gate for prod).

### 3. Set sys_properties on your SN instance

After first deploy, navigate to **System Properties** and set:

| Property | Value |
|---|---|
| `x_146833_jevnowint.api_key` | Your TypeSafe Bearer key from [console.typesafe.ai](https://console.typesafe.ai) |
| `x_146833_jevnowint.api_url` | `https://api.typesafe.ai/v1/systemone` (default) |
| `x_146833_jevnowint.model`   | `jev-latest` (default) |

## Usage in any SN script

```javascript
var result = new x_146833_jevnowint.JevClient()
    .withState(current.short_description + '\n' + current.description)
    .ask('is_urgent',  x_146833_jevnowint.JevQuestions.noul('Does this convey urgency?'))
    .ask('department', x_146833_jevnowint.JevQuestions.choice('Which team?', {
        network:   'Network outages, connectivity failures',
        security:  'Access, credentials, suspected breaches',
        hardware:  'Physical device failures',
        software:  'Application bugs, crashes',
        hr:        'People, payroll, workplace',
        other:     'None of the above'
    }))
    .ask('severity',   x_146833_jevnowint.JevQuestions.score('How severe?', [
        'Minimal', 'Low', 'Medium', 'High'
    ]))
    .evaluate();

if (result.success) {
    gs.info(result.answers.is_urgent.noul);      // 0.0 – 1.0
    gs.info(result.answers.department.choice);   // "software"
    gs.info(result.answers.severity.score);      // 0.0 – 3.0
}
```
