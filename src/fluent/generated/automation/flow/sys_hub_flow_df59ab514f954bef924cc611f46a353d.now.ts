import { Flow, wfa, trigger } from '@servicenow/sdk/automation'

Flow(
    {
        $id: Now.ID['df59ab514f954bef924cc611f46a353d'],
        name: 'Jev - Process Pending Requests',
        internalName: 'jev__process_pending_requests',
        description: 'Processes newly created Jev Request records by calling the Jev API.',
        runAs: 'system',
        masterSnapshot: 'e26a3ec8833bc310b96f6ed0deaad3b0',
    },
    wfa.trigger(
        trigger.record.created,
        {
            $id: Now.ID['876cf2ecaf6e4f51887ae6228ca77a23'],
        },
        {
            table: 'x_146833_jevnowint_request',
            run_on_extended: 'false',
            run_when_setting: 'both',
            run_flow_in: 'background',
            condition: 'u_state=pending',
            run_when_user_setting: 'any',
            run_when_user_list: [],
        }
    ),
    (_params) => {
        wfa.action(
            '325ab6c8833bc310b96f6ed0deaad384',
            {
                $id: Now.ID['bca0b017a5d344ecabf7cf9f0293f0bf'],
            },
            {
                request_sys_id: wfa.dataPill(_params.trigger.current.sys_id, 'string'),
            }
        )
    }
)
