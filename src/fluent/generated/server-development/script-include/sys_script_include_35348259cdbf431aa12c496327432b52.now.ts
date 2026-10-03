import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['35348259cdbf431aa12c496327432b52'],
    name: 'JevClient',
    script: Now.include('./sys_script_include_35348259cdbf431aa12c496327432b52.server.js'),
    description:
        'Fluent HTTP wrapper for the TypeSafe Jev API. Chain .withState().ask().evaluate() to get structured AI judgments.',
    apiName: 'x_146833_jevnowint.JevClient',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
