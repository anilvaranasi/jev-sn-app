import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['4c1712d8833b4710b96f6ed0deaad3f7'],
    table: 'sys_hub_action_type_definition',
    data: {
        access: 'public',
        active: 'true',
        attributes: '{labelCacheCleanUpExecuted=true}',
        authored_on_release_version: '30000',
        callable_by_client_api: 'false',
        description: 'Invokes Jev REST API',
        ih_action: 'true',
        internal_name: 'invokejevrestapi',
        label_cache:
            '[{"name":"{{action.requestbody}}","label":"action➛RequestBody","type":"action","ref":"","reference_display":"","base_type":"string","parent_table_name":"","column_name":"","choices":null,"attributes":{}},{"name":"{{step[86b8d8d5-9121-43f3-9319-ea5a6137b069].response_body}}","label":"step➛REST step➛Response Body","type":"step","ref":"","reference_display":"","base_type":"string","parent_table_name":"","column_name":"","choices":null,"attributes":{"hidden_for":"DATASTREAM"}}]',
        master_snapshot: '142796d8833b4710b96f6ed0deaad39a',
        name: 'InvokeJevRESTAPI',
        pre_compiled: 'false',
        state: 'published',
        sys_domain: 'global',
        sys_domain_path: '/',
        system_level: 'false',
        latest_snapshot: '142796d8833b4710b96f6ed0deaad39a',
        compiler_build: 'glide-brazil-08-25-2026__patch0-08-26-2026_09-22-2026_1636.zip',
    },
})
Record({
    $id: Now.ID['49379ad8833b4710b96f6ed0deaad3a5'],
    table: 'sys_hub_step_instance',
    data: {
        action: '4c1712d8833b4710b96f6ed0deaad3f7',
        cid: '86b8d8d5-9121-43f3-9319-ea5a6137b069',
        error_handling_type: '1',
        label: 'REST step',
        order: '1',
        step_type: '07a762fb47222200b4fad7527c9a7129',
    },
})
Record({
    $id: Now.ID['4533a6d483bb4710b96f6ed0deaad350'],
    table: 'sys_hub_step_instance',
    data: {
        action: '142796d8833b4710b96f6ed0deaad39a',
        cid: '86b8d8d5-9121-43f3-9319-ea5a6137b069',
        error_handling_type: '1',
        label: 'REST step',
        order: '1',
        step_type: '07a762fb47222200b4fad7527c9a7129',
    },
})
Record({
    $id: Now.ID['d8f2aa9483bb4710b96f6ed0deaad392'],
    table: 'sys_hub_step_ext_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,isLocal=true,uiType=password2,uiTypeLabel=Password (2 Way Encrypted),uiUniqueId=185977b6-0f45-4738-8f70-de8aa704a1f0',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'sn_auth_token',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'password2',
        label: 'Credential Value',
        mandatory: 'false',
        max_length: '255',
        model: '49379ad8833b4710b96f6ed0deaad3a5',
        model_id: '49379ad8833b4710b96f6ed0deaad3a5',
        model_table: 'sys_hub_step_instance',
        name: 'var__m_sys_hub_step_ext_output_49379ad8833b4710b96f6ed0deaad3a5',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['8933a6d483bb4710b96f6ed0deaad386'],
    table: 'sys_hub_step_ext_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,isLocal=true,uiType=password2,uiTypeLabel=Password (2 Way Encrypted),uiUniqueId=185977b6-0f45-4738-8f70-de8aa704a1f0',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'sn_auth_token',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'password2',
        label: 'Credential Value',
        mandatory: 'false',
        max_length: '255',
        model: '4533a6d483bb4710b96f6ed0deaad350',
        model_id: '4533a6d483bb4710b96f6ed0deaad350',
        model_table: 'sys_hub_step_instance',
        name: 'var__m_sys_hub_step_ext_output_4533a6d483bb4710b96f6ed0deaad350',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['cc4cea1c83fb4710b96f6ed0deaad397'],
    table: 'sys_hub_action_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=a556f2ab-c415-466d-8a6b-a7680be36ab6',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'requestbody',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'RequestBody',
        mandatory: 'false',
        max_length: '8000',
        model: '4c1712d8833b4710b96f6ed0deaad3f7',
        model_id: '4c1712d8833b4710b96f6ed0deaad3f7',
        model_table: 'sys_hub_action_type_definition',
        name: 'var__m_sys_hub_action_input_4c1712d8833b4710b96f6ed0deaad3f7',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['ae8c6a5c83fb4710b96f6ed0deaad303'],
    table: 'sys_hub_action_input',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=string,uiTypeLabel=String,uiUniqueId=a556f2ab-c415-466d-8a6b-a7680be36ab6',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'requestbody',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'RequestBody',
        mandatory: 'false',
        max_length: '8000',
        model: '142796d8833b4710b96f6ed0deaad39a',
        model_id: '142796d8833b4710b96f6ed0deaad39a',
        model_table: 'sys_hub_action_type_snapshot',
        name: 'var__m_sys_hub_action_input_142796d8833b4710b96f6ed0deaad39a',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['504c2e1c83fb4710b96f6ed0deaad318'],
    table: 'sys_hub_action_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,pwd2droppable=true,uiType=string,uiTypeLabel=String,uiUniqueId=94a90cea-8d19-401b-8323-828b0bf0110c',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'reponse',
        element_prototype: 'a804c77347622200b4fad7527c9a7119',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'reponse',
        mandatory: 'false',
        max_length: '8000',
        model: '4c1712d8833b4710b96f6ed0deaad3f7',
        model_id: '4c1712d8833b4710b96f6ed0deaad3f7',
        model_table: 'sys_hub_action_type_definition',
        name: 'var__m_sys_hub_action_output_4c1712d8833b4710b96f6ed0deaad3f7',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['731796d8833b4710b96f6ed0deaad30d'],
    table: 'sys_hub_action_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'action_error_output=true,co_type_name=FDACTIONSTATUS,element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=object,uiTypeLabel=Object,uiUniqueId=842292dc-e191-4b62-84db-870a8e625053',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: '__action_status__',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'Action Status',
        mandatory: 'false',
        max_length: '65000',
        model: '4c1712d8833b4710b96f6ed0deaad3f7',
        model_id: '4c1712d8833b4710b96f6ed0deaad3f7',
        model_table: 'sys_hub_action_type_definition',
        name: 'var__m_sys_hub_action_output_4c1712d8833b4710b96f6ed0deaad3f7',
        order: '2',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['cc2796d8833b4710b96f6ed0deaad318'],
    table: 'sys_hub_action_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'action_error_output=true,element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=260699f3-f65a-4f62-a9b5-4e14084d7992,visible_in_ui=false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        default_value: 'true',
        display: 'false',
        dynamic_creation: 'false',
        element: '__dont_treat_as_error__',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: "Don't Treat as Error",
        mandatory: 'false',
        max_length: '40',
        model: '4c1712d8833b4710b96f6ed0deaad3f7',
        model_id: '4c1712d8833b4710b96f6ed0deaad3f7',
        model_table: 'sys_hub_action_type_definition',
        name: 'var__m_sys_hub_action_output_4c1712d8833b4710b96f6ed0deaad3f7',
        order: '3',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['0b8c6a5c83fb4710b96f6ed0deaad34d'],
    table: 'sys_hub_action_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,pwd2droppable=true,uiType=string,uiTypeLabel=String,uiUniqueId=94a90cea-8d19-401b-8323-828b0bf0110c',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: 'reponse',
        element_prototype: 'a804c77347622200b4fad7527c9a7119',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'reponse',
        mandatory: 'false',
        max_length: '8000',
        model: '142796d8833b4710b96f6ed0deaad39a',
        model_id: '142796d8833b4710b96f6ed0deaad39a',
        model_table: 'sys_hub_action_type_snapshot',
        name: 'var__m_sys_hub_action_output_142796d8833b4710b96f6ed0deaad39a',
        order: '1',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['1c2796d8833b4710b96f6ed0deaad3a3'],
    table: 'sys_hub_action_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'action_error_output=true,co_type_name=FDACTIONSTATUS,element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=object,uiTypeLabel=Object,uiUniqueId=842292dc-e191-4b62-84db-870a8e625053',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        display: 'false',
        dynamic_creation: 'false',
        element: '__action_status__',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'string',
        label: 'Action Status',
        mandatory: 'false',
        max_length: '65000',
        model: '142796d8833b4710b96f6ed0deaad39a',
        model_id: '142796d8833b4710b96f6ed0deaad39a',
        model_table: 'sys_hub_action_type_snapshot',
        name: 'var__m_sys_hub_action_output_142796d8833b4710b96f6ed0deaad39a',
        order: '2',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['602796d8833b4710b96f6ed0deaad3ac'],
    table: 'sys_hub_action_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'action_error_output=true,element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=260699f3-f65a-4f62-a9b5-4e14084d7992,visible_in_ui=false',
        audit: 'false',
        calculation: `(function calculatedFieldValue(current) {

	// Add your code here
	return '';  // return the calculated value

})(current);`,
        default_value: 'true',
        display: 'false',
        dynamic_creation: 'false',
        element: '__dont_treat_as_error__',
        element_reference: 'false',
        function_field: 'false',
        internal_type: 'boolean',
        label: "Don't Treat as Error",
        mandatory: 'false',
        max_length: '40',
        model: '142796d8833b4710b96f6ed0deaad39a',
        model_id: '142796d8833b4710b96f6ed0deaad39a',
        model_table: 'sys_hub_action_type_snapshot',
        name: 'var__m_sys_hub_action_output_142796d8833b4710b96f6ed0deaad39a',
        order: '3',
        primary: 'false',
        read_only: 'false',
        reference_floats: 'false',
        spell_check: 'false',
        staged: 'false',
        table_reference: 'false',
        text_index: 'false',
        unique: 'false',
        use_dependent_field: 'false',
        use_dynamic_default: 'false',
        use_reference_qualifier: 'simple',
        virtual: 'false',
        virtual_type: 'script',
        xml_view: 'false',
    },
})
Record({
    $id: Now.ID['d82796d8833b4710b96f6ed0deaad377'],
    table: 'sys_hub_action_status_metadata',
    data: {
        action_type_id: '4c1712d8833b4710b96f6ed0deaad3f7',
    },
})
Record({
    $id: Now.ID['e82796d8833b4710b96f6ed0deaad3d6'],
    table: 'sys_hub_action_status_metadata',
    data: {
        action_type_id: '142796d8833b4710b96f6ed0deaad39a',
    },
})
Record({
    $id: Now.ID['282796d8833b4710b96f6ed0deaad3de'],
    table: 'sys_hub_action_plan',
    data: {
        action_id: '4c1712d8833b4710b96f6ed0deaad3f7',
        plan: '{"@class":"com.snc.process_flow.engine.serialization.plan_data.ChunkingPlanData","chunk_data":{"table":"sys_hub_action_plan","id":"282796d8833b4710b96f6ed0deaad3de","name":"plan","plan_signature":null},"plan_data":"CHUNKING_PLAN"}',
        snapshot: '684876d8837f4710b96f6ed0deaad3f8',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
Record({
    $id: Now.ID['142796d8833b4710b96f6ed0deaad39a'],
    table: 'sys_hub_action_type_snapshot',
    data: {
        access: 'public',
        attributes: '{labelCacheCleanUpExecuted=true}',
        authored_on_release_version: '30000',
        callable_by_client_api: 'false',
        description: 'Invokes Jev REST API',
        internal_name: 'invokejevrestapi',
        label_cache:
            '[{"name":"{{action.requestbody}}","label":"action➛RequestBody","type":"action","ref":"","reference_display":"","base_type":"string","parent_table_name":"","column_name":"","choices":null,"attributes":{}},{"name":"{{step[86b8d8d5-9121-43f3-9319-ea5a6137b069].response_body}}","label":"step➛REST step➛Response Body","type":"step","ref":"","reference_display":"","base_type":"string","parent_table_name":"","column_name":"","choices":null,"attributes":{"hidden_for":"DATASTREAM"}}]',
        master: 'true',
        name: 'InvokeJevRESTAPI',
        parent_action: '4c1712d8833b4710b96f6ed0deaad3f7',
        sys_domain: 'global',
        sys_domain_path: '/',
        system_level: 'false',
    },
})
