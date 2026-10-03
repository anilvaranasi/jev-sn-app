import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['346364f9d8ff49a7858a5d2a6b74e03c'],
    name: 'LogStateChange',
    table: 'incident',
    when: 'after',
    action: ['update'],
    script: Now.include('./sys_script_346364f9d8ff49a7858a5d2a6b74e03c.server.js'),
})
