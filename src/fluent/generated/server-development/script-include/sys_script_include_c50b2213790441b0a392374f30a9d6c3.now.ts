import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['c50b2213790441b0a392374f30a9d6c3'],
    name: 'JevQuestions',
    script: Now.include('./sys_script_include_c50b2213790441b0a392374f30a9d6c3.server.js'),
    description: 'Builders for TypeSafe question primitives: JevQuestions.noul(), .choice(), .score()',
    apiName: 'x_146833_jevnowint.JevQuestions',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
