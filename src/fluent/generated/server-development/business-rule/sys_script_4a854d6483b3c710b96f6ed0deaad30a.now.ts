import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['4a854d6483b3c710b96f6ed0deaad30a'],
    name: 'Populate Result Summary on Processed',
    table: 'x_146833_jevnowint_request',
    when: 'after',
    action: ['update'],
    filterCondition: 'u_stateVALCHANGES^u_state=processed^EQ',
    script: Now.include('./sys_script_4a854d6483b3c710b96f6ed0deaad30a.server.js'),
})
