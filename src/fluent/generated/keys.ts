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
                composite: [
                    {
                        table: 'sys_choice'
                        id: '0013044f480f4db4b579e95d9af4860a'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_state'
                            value: 'pending'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '016abac8833bc310b96f6ed0deaad36b'
                        key: {
                            name: 'var__m_sys_hub_flow_input_f86abac8833bc310b96f6ed0deaad34d'
                            element: 'state_text'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '016abac8833bc310b96f6ed0deaad37c'
                        key: {
                            model: 'f86abac8833bc310b96f6ed0deaad34d'
                            element: 'questions_json'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '016abac8833bc310b96f6ed0deaad39f'
                        key: {
                            model: 'f86abac8833bc310b96f6ed0deaad34d'
                            element: 'caller_sys_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '03224e71968441c289efc8ee1e0fbee3'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_output_tokens'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '056abac8833bc310b96f6ed0deaad387'
                        key: {
                            model: 'f86abac8833bc310b96f6ed0deaad34d'
                            element: 'caller_table'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '056abac8833bc310b96f6ed0deaad3ca'
                        key: {
                            name: 'var__m_sys_hub_flow_input_f86abac8833bc310b96f6ed0deaad34d'
                            element: 'context'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '061a4243fc8b4115934eedb77eff1dc9'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_caller_context'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '066a3ec8833bc310b96f6ed0deaad31a'
                        key: {
                            model: 'df59ab514f954bef924cc611f46a353d'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '066a3ec8833bc310b96f6ed0deaad346'
                        key: {
                            model: 'df59ab514f954bef924cc611f46a353d'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '0b5af6c8833bc310b96f6ed0deaad310'
                        key: {
                            model: '325ab6c8833bc310b96f6ed0deaad384'
                            element: 'answers_json'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0b5af6c8833bc310b96f6ed0deaad316'
                        key: {
                            name: 'var__m_sys_hub_action_output_325ab6c8833bc310b96f6ed0deaad384'
                            element: 'answers_json'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '0b6b3257e1be422c8772b4da0218f322'
                        key: {
                            model: '38e65d9d8ce743069272ba6870654c90'
                            element: 'success'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0dcbb7d5792c4bee944d25eafa9dfab2'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '10683292fbeb46149ab12c113e7c1985'
                        key: {
                            name: 'var__m_sys_hub_flow_input_38e65d9d8ce743069272ba6870654c90'
                            element: 'state_text'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '117adb6bca3c4709bafc9e24d77c12dc'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_state'
                            value: 'processed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_action_status_metadata'
                        id: '135af6c8833bc310b96f6ed0deaad362'
                        key: {
                            action_type_id: '325ab6c8833bc310b96f6ed0deaad384'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '156afac8833bc310b96f6ed0deaad32f'
                        key: {
                            name: 'var__m_sys_hub_flow_output_f86abac8833bc310b96f6ed0deaad34d'
                            element: 'request_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '175af6c8833bc310b96f6ed0deaad320'
                        key: {
                            model: '325ab6c8833bc310b96f6ed0deaad384'
                            element: 'success'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '175af6c8833bc310b96f6ed0deaad352'
                        key: {
                            id: '325ab6c8833bc310b96f6ed0deaad384'
                            table: 'var__m_sys_hub_action_output_325ab6c8833bc310b96f6ed0deaad384'
                            field: 'success'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a6a3ec8833bc310b96f6ed0deaad359'
                        key: {
                            name: 'var__m_sys_hub_flow_input_df59ab514f954bef924cc611f46a353d'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1b5af6c8833bc310b96f6ed0deaad325'
                        key: {
                            name: 'var__m_sys_hub_action_output_325ab6c8833bc310b96f6ed0deaad384'
                            element: 'success'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1f5af6c8833bc310b96f6ed0deaad352'
                        key: {
                            document_key: '325ab6c8833bc310b96f6ed0deaad384'
                            variable: 'cb5af6c8833bc310b96f6ed0deaad318'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1f89d9555d094e66a1df4467b89991e1'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_caller_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '23a76b2fc19b4abe890c438ce5bcd44b'
                        key: {
                            name: 'var__m_sys_hub_flow_input_38e65d9d8ce743069272ba6870654c90'
                            element: 'caller_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2497998d26884112926008c5b8917baf'
                        key: {
                            name: 'var__m_sys_hub_action_output_f5f5c629b2144116a942b14d4b049b7b'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '266a3ec8833bc310b96f6ed0deaad3c9'
                        key: {
                            name: 'var__m_sys_hub_flow_input_e26a3ec8833bc310b96f6ed0deaad3b0'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '27f366088377c310b96f6ed0deaad3e3'
                        key: {
                            document_key: 'dbf366088377c310b96f6ed0deaad382'
                            variable: '7a59009bc7522010820469467ec260c0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2919b73a050f460eb7b06bfecd788def'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2bc96627f5a7415fb69bd9946bd39dd9'
                        key: {
                            name: 'var__m_sys_hub_action_output_f5f5c629b2144116a942b14d4b049b7b'
                            element: 'success'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '2f05e5c19b254332a701234395ad9120'
                        key: {
                            model: '38e65d9d8ce743069272ba6870654c90'
                            element: 'caller_table'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '32139e1b9bad4afeb534029212961e14'
                        key: {
                            document_key: '44254512d2514074a23efac80ade11e7'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                    {
                        table: 'sys_hub_action_status_metadata'
                        id: '33f3a6088377c310b96f6ed0deaad32b'
                        key: {
                            action_type_id: '8b632e848377c310b96f6ed0deaad317'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '35ef6f0b9b7d4effa71619f207eb5e8e'
                        key: {
                            model: '44254512d2514074a23efac80ade11e7'
                            element: 'answers_json'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '365ab6c8833bc310b96f6ed0deaad3a9'
                        key: {
                            name: 'var__m_sys_hub_action_input_325ab6c8833bc310b96f6ed0deaad384'
                            element: 'request_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '37d0bc49993d4aae83124d5997ec8ff1'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_state'
                            value: 'failed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '386cf19468804905b0bf0099799d5cc4'
                        key: {
                            name: 'var__m_sys_hub_flow_output_38e65d9d8ce743069272ba6870654c90'
                            element: 'success'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3bf3a6088377c310b96f6ed0deaad313'
                        key: {
                            name: 'var__m_sys_hub_action_output_8b632e848377c310b96f6ed0deaad317'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '3e1b2fae94af49e0ab92687e8aa6d3c5'
                        key: {
                            id: 'f5f5c629b2144116a942b14d4b049b7b'
                            table: 'var__m_sys_hub_action_output_f5f5c629b2144116a942b14d4b049b7b'
                            field: 'success'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3ff3a6088377c310b96f6ed0deaad328'
                        key: {
                            document_key: '8b632e848377c310b96f6ed0deaad317'
                            variable: 'aff366088377c310b96f6ed0deaad3ea'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '456abac8833bc310b96f6ed0deaad3b2'
                        key: {
                            name: 'var__m_sys_hub_flow_input_f86abac8833bc310b96f6ed0deaad34d'
                            element: 'caller_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '475af6c8833bc310b96f6ed0deaad30a'
                        key: {
                            document_key: 'fa5ab6c8833bc310b96f6ed0deaad3ca'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b5ab6c8833bc310b96f6ed0deaad3fe'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_fa5ab6c8833bc310b96f6ed0deaad3ca'
                            element: 'answers_json'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '4d6abac8833bc310b96f6ed0deaad3ce'
                        key: {
                            model: 'f86abac8833bc310b96f6ed0deaad34d'
                            element: 'model'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f4a97e21076411d9d8d98fe3976273a'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_model_used'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4fd37456dd694b0188e8e1500a0df9ea'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_caller_table'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4ffecbf671984851b4b6add4272051c0'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_output_tokens'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '535af6c8833bc310b96f6ed0deaad31e'
                        key: {
                            name: 'var__m_sys_hub_action_output_325ab6c8833bc310b96f6ed0deaad384'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '53f69ee7ebf149bcb74cc9d9c8fea23d'
                        key: {
                            model: '38e65d9d8ce743069272ba6870654c90'
                            element: 'questions_json'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '55940725807f41c293a2dff7e1e069b4'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_questions'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '564854f81d4f4b78808cb966ee5b25ee'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_error'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '596afac8833bc310b96f6ed0deaad317'
                        key: {
                            name: 'var__m_sys_hub_flow_output_f86abac8833bc310b96f6ed0deaad34d'
                            element: 'answers_json'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '5b5af6c8833bc310b96f6ed0deaad352'
                        key: {
                            id: '325ab6c8833bc310b96f6ed0deaad384'
                            table: 'var__m_sys_hub_action_output_325ab6c8833bc310b96f6ed0deaad384'
                            field: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '5c9444ffd0dd4a678c195353303fc1d7'
                        key: {
                            model: '38e65d9d8ce743069272ba6870654c90'
                            element: 'model'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '5d6afac8833bc310b96f6ed0deaad333'
                        key: {
                            model: 'f86abac8833bc310b96f6ed0deaad34d'
                            element: 'success'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '5ef121eb4aa44adf96d5eb253ebcf566'
                        key: {
                            model: 'f5f5c629b2144116a942b14d4b049b7b'
                            element: 'success'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '626a3ec8833bc310b96f6ed0deaad3e1'
                        key: {
                            name: 'var__m_sys_hub_flow_input_e26a3ec8833bc310b96f6ed0deaad3b0'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '646a4edeca5d48488ef4377a9ddf7757'
                        key: {
                            name: 'var__m_sys_hub_action_output_f5f5c629b2144116a942b14d4b049b7b'
                            element: 'answers_json'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '67f366088377c310b96f6ed0deaad3e2'
                        key: {
                            document_key: 'dbf366088377c310b96f6ed0deaad382'
                            variable: '58715a1c53f22010d3a8ddeeff7b1248'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '6a6a3ec8833bc310b96f6ed0deaad3b2'
                        key: {
                            model: 'e26a3ec8833bc310b96f6ed0deaad3b0'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e1a2f7e588e47b7a4e28c430d3cdd1b'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '6e6a3ec8833bc310b96f6ed0deaad3cd'
                        key: {
                            model: 'e26a3ec8833bc310b96f6ed0deaad3b0'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '71e70ab2cf2748a497da5b726d28edbe'
                        key: {
                            name: 'var__m_sys_hub_flow_output_38e65d9d8ce743069272ba6870654c90'
                            element: 'request_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '72df8ae1f549409bafe4f47877de216a'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_error'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '74161c71909a4049ad1223012cd78c94'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '743902a88ade4bc1943225a15625ae5e'
                        key: {
                            model: '38e65d9d8ce743069272ba6870654c90'
                            element: 'state_text'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '765ab6c8833bc310b96f6ed0deaad3d1'
                        key: {
                            model: 'fa5ab6c8833bc310b96f6ed0deaad3ca'
                            element: 'request_sys_id'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '7998e71dee634e11b6b644fab67b9429'
                        key: {
                            model: '38e65d9d8ce743069272ba6870654c90'
                            element: 'request_sys_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7aa4234f5bee4b20915beef0a1cbd42f'
                        key: {
                            name: 'var__m_sys_hub_flow_output_38e65d9d8ce743069272ba6870654c90'
                            element: 'answers_json'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7c74547a9a8647bfafdc5de22e3797c0'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_caller_context'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7d13a690946b43118072a519ba74b5e6'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_questions'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '7db9fc6e1c3f4125bff42ab4b99442cf'
                        key: {
                            model: 'f5f5c629b2144116a942b14d4b049b7b'
                            element: 'request_sys_id'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '7e5ab6c8833bc310b96f6ed0deaad389'
                        key: {
                            model: '325ab6c8833bc310b96f6ed0deaad384'
                            element: 'request_sys_id'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '829159eafa2541338fcc0d49e1661c84'
                        key: {
                            document_key: '44254512d2514074a23efac80ade11e7'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '835af6c8833bc310b96f6ed0deaad30a'
                        key: {
                            id: 'fa5ab6c8833bc310b96f6ed0deaad3ca'
                            table: 'var__m_sys_flow_step_definition_input_106afb6647032200b4fad7527c9a71e7'
                            field: 'script'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '88e790e16e424d8488c4176f079a1810'
                        key: {
                            model: 'f5f5c629b2144116a942b14d4b049b7b'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '89f6e31bf0804c75b5e0113832b99c60'
                        key: {
                            model: '44254512d2514074a23efac80ade11e7'
                            element: 'request_sys_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8aee973360aa41d3a71dbc0fd7db04f0'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_answers'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '8b5ab6c8833bc310b96f6ed0deaad3e1'
                        key: {
                            model: 'fa5ab6c8833bc310b96f6ed0deaad3ca'
                            element: 'answers_json'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '8d6abac8833bc310b96f6ed0deaad3b6'
                        key: {
                            model: 'f86abac8833bc310b96f6ed0deaad34d'
                            element: 'context'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '8ef86ec35d8d4cca976647b7578762cd'
                        key: {
                            id: 'f5f5c629b2144116a942b14d4b049b7b'
                            table: 'var__m_sys_hub_action_output_f5f5c629b2144116a942b14d4b049b7b'
                            field: 'answers_json'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '916afac8833bc310b96f6ed0deaad31c'
                        key: {
                            model: 'f86abac8833bc310b96f6ed0deaad34d'
                            element: 'request_sys_id'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '92f0b9de8c9041feb5507daf9f9b06da'
                        key: {
                            model: '44254512d2514074a23efac80ade11e7'
                            element: 'success'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '959c3bc82c1145af92eb136811b226df'
                        key: {
                            name: 'var__m_sys_hub_flow_input_38e65d9d8ce743069272ba6870654c90'
                            element: 'questions_json'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '9856d3c4be044f9080d53b98edf1e592'
                        key: {
                            model: '38e65d9d8ce743069272ba6870654c90'
                            element: 'caller_sys_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '98729802239948ea9a6d61a37d9a6ba5'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_caller_sys_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a424abb606b4d3b915a786e57dc9fe1'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_model'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9d49a739212246d090d84d01c31970ae'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_model'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '9d6abac8833bc310b96f6ed0deaad3f6'
                        key: {
                            model: 'f86abac8833bc310b96f6ed0deaad34d'
                            element: 'answers_json'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a323a8e941354ba290eacab26287be60'
                        key: {
                            name: 'var__m_sys_hub_flow_input_38e65d9d8ce743069272ba6870654c90'
                            element: 'caller_table'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'a55f7deb33b042ad9c73357b9a39b41a'
                        key: {
                            model: 'f5f5c629b2144116a942b14d4b049b7b'
                            element: 'answers_json'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a7f366088377c310b96f6ed0deaad3e1'
                        key: {
                            document_key: 'dbf366088377c310b96f6ed0deaad382'
                            variable: '15288f755bd24110ab933520b881c713'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'abf366088377c310b96f6ed0deaad3e2'
                        key: {
                            document_key: 'dbf366088377c310b96f6ed0deaad382'
                            variable: 'c30a451d2f201300a09a839fb18c95b4'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'ad374c28ee094eda95d6be1d6da0da32'
                        key: {
                            model: 'f5f5c629b2144116a942b14d4b049b7b'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'aff366088377c310b96f6ed0deaad3ea'
                        key: {
                            model: '8b632e848377c310b96f6ed0deaad317'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b2f8307dd0124ebb924af95b18219432'
                        key: {
                            name: 'var__m_sys_hub_flow_input_38e65d9d8ce743069272ba6870654c90'
                            element: 'model'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'b7f366088377c310b96f6ed0deaad3fc'
                        key: {
                            model: '8b632e848377c310b96f6ed0deaad317'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b81bfcd92e9e4fcc8e88aaa54abf8422'
                        key: {
                            name: 'x_146833_jevnowint_request'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: 'b8c5ba8b70aa4046b726e65d7e2089a8'
                        key: {
                            model: '38e65d9d8ce743069272ba6870654c90'
                            element: 'answers_json'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'bcecc43ecc8748e798bf707d66ef2a9e'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c1c86a00fbaf4c7582eb5d6f7bfef0a5'
                        key: {
                            name: 'var__m_sys_hub_flow_input_38e65d9d8ce743069272ba6870654c90'
                            element: 'context'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c267ee0948f54502ba2ed588ffc489fc'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_state_text'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c56abac8833bc310b96f6ed0deaad39a'
                        key: {
                            name: 'var__m_sys_hub_flow_input_f86abac8833bc310b96f6ed0deaad34d'
                            element: 'caller_table'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c75ab6c8833bc310b96f6ed0deaad3df'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_fa5ab6c8833bc310b96f6ed0deaad3ca'
                            element: 'success'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c96abac8833bc310b96f6ed0deaad382'
                        key: {
                            name: 'var__m_sys_hub_flow_input_f86abac8833bc310b96f6ed0deaad34d'
                            element: 'questions_json'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c96abac8833bc310b96f6ed0deaad3ee'
                        key: {
                            name: 'var__m_sys_hub_flow_input_f86abac8833bc310b96f6ed0deaad34d'
                            element: 'model'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca6a3ec8833bc310b96f6ed0deaad341'
                        key: {
                            name: 'var__m_sys_hub_flow_input_df59ab514f954bef924cc611f46a353d'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'cb5af6c8833bc310b96f6ed0deaad30b'
                        key: {
                            id: 'fa5ab6c8833bc310b96f6ed0deaad3ca'
                            table: 'var__m_sys_hub_step_ext_input_fa5ab6c8833bc310b96f6ed0deaad3ca'
                            field: 'request_sys_id'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'cb5af6c8833bc310b96f6ed0deaad318'
                        key: {
                            model: '325ab6c8833bc310b96f6ed0deaad384'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cc12a182c8b448f49481de3dcd6b79b8'
                        key: {
                            name: 'var__m_sys_hub_action_output_f5f5c629b2144116a942b14d4b049b7b'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'd0f00d6d97bb47e7bedf33dfa4ed9890'
                        key: {
                            model: '38e65d9d8ce743069272ba6870654c90'
                            element: 'context'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd1196587ca2d4c049804038d73c98cd7'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_caller_table'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd35af6c8833bc310b96f6ed0deaad349'
                        key: {
                            name: 'var__m_sys_hub_action_output_325ab6c8833bc310b96f6ed0deaad384'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd56afac8833bc310b96f6ed0deaad353'
                        key: {
                            name: 'var__m_sys_hub_flow_output_f86abac8833bc310b96f6ed0deaad34d'
                            element: 'success'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd794c5a91f4442ff87f4961883877826'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_model_used'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'db5af6c8833bc310b96f6ed0deaad327'
                        key: {
                            model: '325ab6c8833bc310b96f6ed0deaad384'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'df5af6c8833bc310b96f6ed0deaad351'
                        key: {
                            id: '325ab6c8833bc310b96f6ed0deaad384'
                            table: 'var__m_sys_hub_action_output_325ab6c8833bc310b96f6ed0deaad384'
                            field: 'answers_json'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e06a7a7bfb9b475987abfdddd295d20a'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_input_tokens'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'e20b9525ad514706bbb9cddf90986539'
                        key: {
                            id: '44254512d2514074a23efac80ade11e7'
                            table: 'var__m_sys_hub_step_ext_input_44254512d2514074a23efac80ade11e7'
                            field: 'request_sys_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e3f366088377c310b96f6ed0deaad3f9'
                        key: {
                            name: 'var__m_sys_hub_action_output_8b632e848377c310b96f6ed0deaad317'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ecf2d50342fb48ad9ee469ddd166c6d1'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_answers'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'efeaf8b32d4042b59558c6d482f4e0ef'
                        key: {
                            name: 'var__m_sys_hub_action_input_f5f5c629b2144116a942b14d4b049b7b'
                            element: 'request_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'eff366088377c310b96f6ed0deaad3e2'
                        key: {
                            document_key: 'dbf366088377c310b96f6ed0deaad382'
                            variable: 'f11ebf865f101300a09a2abd7f466652'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f4e36f8f65cf4dc5b42dd2310d913300'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_state'
                            value: 'processing'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f64a72c8833bc310b96f6ed0deaad373'
                        key: {
                            name: 'x_146833_jevnowint_request'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f7f3a6088377c310b96f6ed0deaad328'
                        key: {
                            document_key: '8b632e848377c310b96f6ed0deaad317'
                            variable: 'b7f366088377c310b96f6ed0deaad3fc'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'faad9c558d4f4aac9819f89326ebb80d'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_input_tokens'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'fc6abac8833bc310b96f6ed0deaad351'
                        key: {
                            model: 'f86abac8833bc310b96f6ed0deaad34d'
                            element: 'state_text'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fcd8967d513e484894f451e5f7c04a86'
                        key: {
                            name: 'x_146833_jevnowint_request'
                            element: 'u_state_text'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'fe5ab6c8833bc310b96f6ed0deaad3d9'
                        key: {
                            model: 'fa5ab6c8833bc310b96f6ed0deaad3ca'
                            element: 'success'
                        }
                    },
                ]
            }
        }
    }
}
