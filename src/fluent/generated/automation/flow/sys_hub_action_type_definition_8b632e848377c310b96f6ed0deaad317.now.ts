import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['8b632e848377c310b96f6ed0deaad317'],
    table: 'sys_hub_action_type_definition',
    data: {
        access: 'public',
        active: 'true',
        attributes: '{labelCacheCleanUpExecuted=true}',
        authored_on_release_version: '30000',
        callable_by_client_api: 'false',
        ih_action: 'false',
        internal_name: 'jevrestapicall',
        label_cache: '[]',
        name: 'JevRESTAPICall',
        pre_compiled: 'false',
        state: 'draft',
        sys_domain: 'global',
        sys_domain_path: '/',
        system_level: 'false',
    },
})
Record({
    $id: Now.ID['dbf366088377c310b96f6ed0deaad382'],
    table: 'sys_hub_step_instance',
    data: {
        action: '8b632e848377c310b96f6ed0deaad317',
        cid: '85bd17a1-f206-4984-9bc5-ced048fb0464',
        error_handling_type: '1',
        label: 'REST step',
        order: '1',
        step_type: '07a762fb47222200b4fad7527c9a7129',
    },
})
Record({
    $id: Now.ID['aff366088377c310b96f6ed0deaad3ea'],
    table: 'sys_hub_action_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'action_error_output=true,co_type_name=FDACTIONSTATUS,element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=object,uiTypeLabel=Object,uiUniqueId=5911a081-5c64-4277-8078-1323b1507736',
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
        model: '8b632e848377c310b96f6ed0deaad317',
        model_id: '8b632e848377c310b96f6ed0deaad317',
        model_table: 'sys_hub_action_type_definition',
        name: 'var__m_sys_hub_action_output_8b632e848377c310b96f6ed0deaad317',
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
    $id: Now.ID['b7f366088377c310b96f6ed0deaad3fc'],
    table: 'sys_hub_action_output',
    data: {
        active: 'true',
        array: 'false',
        array_denormalized: 'false',
        attributes:
            'action_error_output=true,element_mapping_provider=com.glide.flow_design.action.data.FlowDesignVariableMapper,uiType=boolean,uiTypeLabel=True/False,uiUniqueId=be27a7df-d021-43ff-bfab-e4b8fee923e5,visible_in_ui=false',
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
        model: '8b632e848377c310b96f6ed0deaad317',
        model_id: '8b632e848377c310b96f6ed0deaad317',
        model_table: 'sys_hub_action_type_definition',
        name: 'var__m_sys_hub_action_output_8b632e848377c310b96f6ed0deaad317',
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
    $id: Now.ID['33f3a6088377c310b96f6ed0deaad32b'],
    table: 'sys_hub_action_status_metadata',
    data: {
        action_type_id: '8b632e848377c310b96f6ed0deaad317',
    },
})
