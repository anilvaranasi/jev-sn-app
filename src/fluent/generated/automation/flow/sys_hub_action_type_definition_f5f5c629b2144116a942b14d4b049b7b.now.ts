import { Action, wfa, actionStep } from '@servicenow/sdk/automation'
import { StringColumn } from '@servicenow/sdk/core'

export const jev_call_api = Action(
    {
        $id: Now.ID['f5f5c629b2144116a942b14d4b049b7b'],
        name: 'Jev - Call API',
        internalName: 'jev__call_api',
        description: 'Calls the Jev/TypeSafe AI API for a given request record, updates the record with the response.',
        inputs: {
            request_sys_id: StringColumn({
                label: 'Request Sys ID',
                mandatory: true,
            }),
        },
        outputs: {
            answers_json: StringColumn({
                label: 'Answers JSON',
            }),
            success: StringColumn({
                label: 'Success',
            }),
        },
        masterSnapshot: '325ab6c8833bc310b96f6ed0deaad384',
    },
    (params) => {
        const call_jev_api = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['44254512d2514074a23efac80ade11e7'],
                label: 'Call Jev API',
            },
            {
                required_run_time: 'instance',
                script: Now.include('./scripts/44254512d2514074a23efac80ade11e7.js'),
                errorHandlingType: 'stop_the_action',
                inputVariables: {
                    request_sys_id: {
                        label: 'Request Sys ID',
                        value: wfa.dataPill(params.inputs.request_sys_id, 'string'),
                    },
                },
                outputVariables: {
                    answers_json: StringColumn({
                        label: 'Answers JSON',
                    }),
                    success: StringColumn({
                        label: 'Success',
                    }),
                },
            }
        )
        wfa.assignActionOutputs(params.outputs, {
            answers_json: wfa.dataPill(call_jev_api.answers_json, 'string'),
            success: wfa.dataPill(call_jev_api.success, 'string'),
        })
    }
)
