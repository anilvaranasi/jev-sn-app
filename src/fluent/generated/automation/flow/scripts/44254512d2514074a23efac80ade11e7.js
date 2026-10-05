(function execute(inputs, outputs) {

    var gr = new GlideRecord('x_146833_jevnowint_request');
    if (!gr.get(inputs.request_sys_id)) {
        outputs.success = 'false';
        outputs.answers_json = '';
        return;
    }

    gr.setValue('u_state', 'processing');
    gr.update();

    var apiKey = gs.getProperty('x_146833_jevnowint.beatapikey', '');
    var apiUrl = gs.getProperty('x_146833_jevnowint.beatjevapi_endpoint', 'https://api.beatapi.io/v1/systemone');

    var payload = JSON.stringify({
        state:     gr.getValue('u_state_text'),
        model:     gr.getValue('u_model') || 'jev-latest',
        questions: JSON.parse(gr.getValue('u_questions'))
    });

    try {
        var rm = new sn_ws.RESTMessageV2();
        rm.setEndpoint(apiUrl);
        rm.setHttpMethod('POST');
        rm.setRequestHeader('Authorization', 'Bearer ' + apiKey);
        rm.setRequestHeader('Content-Type', 'application/json');
        rm.setRequestBody(payload);

        var response = rm.execute();
        var status   = response.getStatusCode();
        var body     = response.getBody();

        if (status !== 200) {
            gr.setValue('u_state', 'failed');
            gr.setValue('u_error', 'HTTP ' + status + ': ' + body.substring(0, 500));
            gr.update();
            outputs.success = 'false';
            outputs.answers_json = '';
            return;
        }

        var parsed  = JSON.parse(body);
        var answers = parsed.answers || {};

        gr.setValue('u_state',         'processed');
        gr.setValue('u_answers',        JSON.stringify(answers));
        gr.setValue('u_model_used',     parsed.model);
        gr.setValue('u_task_id',        parsed.id        || '');
        gr.setValue('u_input_tokens',   parsed.usage ? parsed.usage.input_tokens  : 0);
        gr.setValue('u_output_tokens',  parsed.usage ? parsed.usage.output_tokens : 0);
        gr.setValue('u_error',          '');

        // Parsed answer columns
        if (answers.is_urgent) {
            gr.setValue('u_is_urgent_noul', answers.is_urgent.noul);
        }
        if (answers.department) {
            gr.setValue('u_department_choice',     answers.department.choice);
            gr.setValue('u_department_confidence', answers.department.confidence);
        }
        if (answers.severity) {
            gr.setValue('u_severity_score',      answers.severity.score);
            gr.setValue('u_severity_confidence', answers.severity.confidence);
        }

        gr.update();

        outputs.success      = 'true';
        outputs.answers_json = JSON.stringify(answers);

    } catch(e) {
        gr.setValue('u_state', 'failed');
        gr.setValue('u_error', e.message);
        gr.update();
        outputs.success = 'false';
        outputs.answers_json = '';
    }

})(inputs, outputs);