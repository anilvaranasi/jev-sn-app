import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['0e4d30208373c710b96f6ed0deaad364'],
    name: 'Populate Jev Questions on Insert',
    table: 'x_146833_jevnowint_request',
    when: 'before',
    action: ['insert'],
    filterCondition: 'u_caller_tableISNOTEMPTY^u_caller_sys_idISNOTEMPTY^EQ',
    script: Now.include('./sys_script_0e4d30208373c710b96f6ed0deaad364.server.js'),
})
