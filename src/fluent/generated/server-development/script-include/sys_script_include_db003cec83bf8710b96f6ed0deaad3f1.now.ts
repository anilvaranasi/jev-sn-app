import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['db003cec83bf8710b96f6ed0deaad3f1'],
    name: 'JevFieldMap',
    script: Now.include('./sys_script_include_db003cec83bf8710b96f6ed0deaad3f1.server.js'),
    description:
        'Reads x_146833_jevnowint_field_map config rows for a source table and builds a ready-to-submit Jev questions object. Call JevFieldMap.forRecord(tableName, sysId).',
    apiName: 'x_146833_jevnowint.JevFieldMap',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
    protectionPolicy: 'read',
})
