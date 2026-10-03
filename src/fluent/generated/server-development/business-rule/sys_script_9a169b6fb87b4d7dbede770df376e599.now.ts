import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['9a169b6fb87b4d7dbede770df376e599'],
    name: 'x_146833_jevnowint - Enrich Incident wit',
    table: 'incident',
    order: 900,
    when: 'after',
    action: ['insert'],
    script: Now.include('./sys_script_9a169b6fb87b4d7dbede770df376e599.server.js'),
})
