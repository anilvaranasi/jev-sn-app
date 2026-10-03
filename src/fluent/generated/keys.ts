import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'a03bd5c014904a108d5671bc3cb11184'
                    }
                    br_jev_enrich_incident: {
                        table: 'sys_script'
                        id: '9a169b6fb87b4d7dbede770df376e599'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'abeed2566c9a4528be281b4f3da2148a'
                    }
                    si_jev_client: {
                        table: 'sys_script_include'
                        id: '35348259cdbf431aa12c496327432b52'
                    }
                    si_jev_questions: {
                        table: 'sys_script_include'
                        id: 'c50b2213790441b0a392374f30a9d6c3'
                    }
                    src_server_JevClient_server_js: {
                        table: 'sys_module'
                        id: 'd6d261aa78bb4d74bcbc7598cb3bc171'
                    }
                    src_server_JevIncidentDemo_server_js: {
                        table: 'sys_module'
                        id: '45a122039e44408682052067ed70616d'
                    }
                    src_server_JevQuestions_server_js: {
                        table: 'sys_module'
                        id: '2b3cd01cc5c8478ea556558d6d1c0cc9'
                    }
                }
            }
        }
    }
}
