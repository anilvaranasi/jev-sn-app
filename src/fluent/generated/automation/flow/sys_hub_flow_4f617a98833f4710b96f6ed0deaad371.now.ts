import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'
import { JsonColumn } from '@servicenow/sdk/core'

Flow(
    {
        $id: Now.ID['4f617a98833f4710b96f6ed0deaad371'],
        name: 'TriggerJevIntegration',
        internalName: 'triggerjevintegration',
        masterSnapshot: '05073218837f4710b96f6ed0deaad3ad',
        flowVariables: {
            parsedresponsebody: JsonColumn({
                label: 'parsedresponsebody',
            }),
        },
    },
    wfa.trigger(
        trigger.record.createdOrUpdated,
        {
            $id: Now.ID['af813e98833f4710b96f6ed0deaad35d'],
        },
        {
            table: 'x_146833_jevnowint_request',
            condition: 'u_state=pending',
            run_on_extended: 'false',
            run_flow_in: 'any',
            run_when_user_list: [],
            run_when_setting: 'both',
            run_when_user_setting: 'any',
            trigger_strategy: 'unique_changes',
        }
    ),
    (_params) => {
        wfa.action(
            '142796d8833b4710b96f6ed0deaad39a',
            {
                $id: Now.ID['6a5332dc833f4710b96f6ed0deaad3b7'],
                uuid: '66e593db-63ca-44e0-8ddf-e2d4cbc541e7',
            },
            {
                requestbody: wfa.inlineScript(`/*
**Access Flow/Action data using the fd_data object. Script must return a value. 
**Order number is offset by +1 in Error Handling Section.
**Available options display upon pressing "." after fd_data
**example: var shortDesc = fd_data.trigger.current.short_description;
**return shortDesc;
*/

var request_body = JSON.stringify({
    state:     fd_data.trigger.current.u_state_text + '',
    model:     fd_data.trigger.current.u_model + '' || 'jev-1.13-free',
    questions: JSON.parse(fd_data.trigger.current.u_questions)
});
return request_body;`),
            }
        )
        wfa.flowLogic.setFlowVariables(
            {
                $id: Now.ID['e36b76d083bf4710b96f6ed0deaad393'],
            },
            _params.flowVariables,
            {
                parsedresponsebody: wfa.inlineScript(`/*
**Access Flow/Action data using the fd_data object. Script must return a value. 
**Order number is offset by +1 in Error Handling Section.
**Available options display upon pressing "." after fd_data
**example: var shortDesc = fd_data.trigger.current.short_description;
**return shortDesc;
*/
return JSON.parse(fd_data._1__invokejevrestapi.reponse);`),
            }
        )
        wfa.action(
            action.core.updateRecord,
            {
                $id: Now.ID['ab29329c837f4710b96f6ed0deaad31a'],
                uuid: '782b8f09-2b30-4ca2-a3f8-3a43be314cff',
            },
            {
                table_name: 'x_146833_jevnowint_request',
                record: wfa.dataPill(_params.trigger.current, 'reference'),
                values: TemplateValue({
                    u_state: wfa.inlineScript(`/*
**Access Flow/Action data using the fd_data object. Script must return a value. 
**Order number is offset by +1 in Error Handling Section.
**Available options display upon pressing "." after fd_data
**example: var shortDesc = fd_data.trigger.current.short_description;
**return shortDesc;
*/
return 	'processed'`),
                    u_answers: wfa.inlineScript(`/*
**Access Flow/Action data using the fd_data object. Script must return a value. 
**Order number is offset by +1 in Error Handling Section.
**Available options display upon pressing "." after fd_data
**example: var shortDesc = fd_data.trigger.current.short_description;
**return shortDesc;
*/
return JSON.stringify(fd_data.flow_var.parsedresponsebody.answers);`),
                    u_model_used: wfa.inlineScript(`/*
**Access Flow/Action data using the fd_data object. Script must return a value. 
**Order number is offset by +1 in Error Handling Section.
**Available options display upon pressing "." after fd_data
**example: var shortDesc = fd_data.trigger.current.short_description;
**return shortDesc;
*/
return fd_data.flow_var.parsedresponsebody.model;`),
                    u_input_tokens: wfa.inlineScript(`/*
**Access Flow/Action data using the fd_data object. Script must return a value. 
**Order number is offset by +1 in Error Handling Section.
**Available options display upon pressing "." after fd_data
**example: var shortDesc = fd_data.trigger.current.short_description;
**return shortDesc;
*/
return fd_data.flow_var.parsedresponsebody.usage.input_tokens;`),
                    u_output_tokens: wfa.inlineScript(`/*
**Access Flow/Action data using the fd_data object. Script must return a value. 
**Order number is offset by +1 in Error Handling Section.
**Available options display upon pressing "." after fd_data
**example: var shortDesc = fd_data.trigger.current.short_description;
**return shortDesc;
*/
return fd_data.flow_var.parsedresponsebody.usage.output_tokens;`),
                }),
            }
        )
    }
)
