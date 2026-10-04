import { CrossScopePrivilege } from '@servicenow/sdk/core'

CrossScopePrivilege({
    $id: Now.ID['9bdab4a88333c710b96f6ed0deaad35d'],
    operation: 'read',
    status: 'allowed',
    targetName: 'incident',
    targetScope: 'global',
    targetType: 'sys_db_object',
})
