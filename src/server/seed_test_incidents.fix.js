/**
 * Fix Script — Create test incidents with varied impact/urgency/service combinations
 *
 * Creates 8 incidents with interesting combinations to test how Jev responds
 * to different scenarios. Each incident has a realistic short_description and
 * description so Jev has rich context to reason about.
 *
 * After running this, run seed_jev_requests_sample.fix.js to submit them to Jev.
 *
 * Run via: System Definition > Fix Scripts > New > paste > Run Fix Script
 */

var INCIDENTS = [
    {
        short_description: 'Production database is completely down — all services affected',
        description: 'The primary production database server became unresponsive at 08:42 AM. All customer-facing applications including the e-commerce platform, order management system, and customer portal are returning 503 errors. Estimated 4,000 customers currently unable to place orders. Revenue impact approximately $12,000 per minute.',
        impact: '1',        // 1 - High
        urgency: '1',       // 1 - High
        category: 'database',
        business_service: 'e-Commerce Platform',
        caller_id: 'abel.tuter'
    },
    {
        short_description: 'VPN connectivity issues for remote workers in Europe region',
        description: 'Approximately 45 remote employees in the UK and Germany are unable to connect to the corporate VPN since 09:15 AM. They can access email via browser but cannot reach internal systems. A workaround exists via the web portal for most tasks. No customer impact at this time.',
        impact: '2',        // 2 - Medium
        urgency: '2',       // 2 - Medium
        category: 'network',
        business_service: 'Corporate Network',
        caller_id: 'aileen.mottern'
    },
    {
        short_description: 'Payment gateway returning errors intermittently during checkout',
        description: 'The payment processor is failing on approximately 15% of transactions since 10:00 AM. Customers are experiencing declined payments even with valid cards. Some transactions go through on retry. The issue appears correlated with Visa cards specifically. Finance team reports 120 failed transactions in the last hour.',
        impact: '1',        // 1 - High
        urgency: '1',       // 1 - High
        category: 'software',
        business_service: 'Payment Processing',
        caller_id: 'bow.rufer'
    },
    {
        short_description: 'Printer on floor 3 not working — staff using floor 2 printer',
        description: 'The HP LaserJet on the 3rd floor has been offline since yesterday afternoon. Staff have been using the printer on floor 2 as a workaround. No business process is blocked. IT has ordered a replacement toner cartridge which is expected tomorrow.',
        impact: '3',        // 3 - Low
        urgency: '3',       // 3 - Low
        category: 'hardware',
        business_service: '',
        caller_id: 'charlie.whitherspoon'
    },
    {
        short_description: 'HR payroll system login failing for all managers after password policy update',
        description: 'Following last night\'s password policy enforcement update, all 23 managers are locked out of the payroll system. Payroll processing is due today at 5 PM. If not resolved before then, 850 employees will not receive their scheduled direct deposit. The IT security team applied the policy change without notifying HR.',
        impact: '1',        // 1 - High
        urgency: '1',       // 1 - High
        category: 'software',
        business_service: 'HR Management',
        caller_id: 'don.goodliffe'
    },
    {
        short_description: 'Laptop running slow after Windows update — minor productivity impact',
        description: 'Employee reports their laptop has been noticeably slower since the automatic Windows update applied last night. Boot time increased from 45 seconds to about 3 minutes. Applications take longer to open. The employee can still perform all work tasks but is frustrated by the slowness.',
        impact: '3',        // 3 - Low
        urgency: '3',       // 3 - Low
        category: 'hardware',
        business_service: '',
        caller_id: 'fred.luddy'
    },
    {
        short_description: 'Customer data export job failing — compliance report overdue',
        description: 'The nightly GDPR compliance data export job has been failing for 3 consecutive nights with an out-of-memory error. The compliance team needs this report by end of week for a regulatory submission. Missing the deadline could result in a €50,000 fine. The job processes records for approximately 200,000 customers.',
        impact: '2',        // 2 - Medium
        urgency: '1',       // 1 - High (deadline driven)
        category: 'software',
        business_service: 'Data & Analytics',
        caller_id: 'gregg.hayden'
    },
    {
        short_description: 'Office Wi-Fi intermittent in meeting rooms B4 and B5',
        description: 'Two meeting rooms on the B floor have been experiencing intermittent Wi-Fi drops during video calls. The issue started 2 days ago. Affected users can connect to wired ethernet. Video calls drop every 20-30 minutes causing disruption to external client meetings. The rooms are heavily booked this week for quarterly business reviews.',
        impact: '2',        // 2 - Medium
        urgency: '2',       // 2 - Medium
        category: 'network',
        business_service: 'Corporate Network',
        caller_id: 'howard.oliver'
    }
];

var inserted = 0;
var skipped  = 0;

for (var i = 0; i < INCIDENTS.length; i++) {
    var inc = INCIDENTS[i];

    // Skip if identical incident already exists (by short_description)
    var check = new GlideRecord('incident');
    check.addQuery('short_description', inc.short_description);
    check.query();
    if (check.next()) {
        gs.info('IncidentSeed: skipped — already exists: ' + inc.short_description.substring(0, 60));
        skipped++;
        continue;
    }

    // Resolve caller sys_id
    var callerGr = new GlideRecord('sys_user');
    callerGr.addQuery('user_name', inc.caller_id);
    callerGr.setLimit(1);
    callerGr.query();
    var callerSysId = callerGr.next() ? callerGr.getUniqueValue() : '';

    var gr = new GlideRecord('incident');
    gr.initialize();
    gr.setValue('short_description', inc.short_description);
    gr.setValue('description',       inc.description);
    gr.setValue('impact',            inc.impact);
    gr.setValue('urgency',           inc.urgency);
    gr.setValue('category',          inc.category);
    gr.setValue('state',             '1');   // New
    if (callerSysId) gr.setValue('caller_id', callerSysId);
    if (inc.business_service) {
        var svcGr = new GlideRecord('cmdb_ci_service');
        svcGr.addQuery('name', inc.business_service);
        svcGr.setLimit(1);
        svcGr.query();
        if (svcGr.next()) gr.setValue('business_service', svcGr.getUniqueValue());
    }
    gr.insert();

    gs.info('IncidentSeed: created — ' + gr.getValue('number') + ' | ' + inc.short_description.substring(0, 60));
    inserted++;
}

gs.info('IncidentSeed complete — inserted: ' + inserted + ', skipped: ' + skipped);
