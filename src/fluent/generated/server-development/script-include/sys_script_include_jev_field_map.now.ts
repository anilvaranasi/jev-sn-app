import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    name: 'JevFieldMap',
    script: Now.include('./sys_script_include_jev_field_map.server.js'),
    description:
        'Reads x_146833_jevnowint_field_map config rows for a source table and builds ' +
        'a ready-to-submit Jev questions object. Call JevFieldMap.forRecord(tableName, sysId).',
    apiName: 'x_146833_jevnowint.JevFieldMap',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
