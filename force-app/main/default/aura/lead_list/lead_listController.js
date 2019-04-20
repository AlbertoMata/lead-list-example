({
    init : function(component, event, helper) {
        var leads   = component.get ("v.lead_list");

        leads       = helper.get_avatar_url (component);
        leads       = leads.sort((first_lead, second_lead) => (
            parseInt(first_lead.priority) - parseInt(second_lead.priority))
        );

        component.set ("v.lead_list", leads);

    },

    handle_lead_change : function (component, event, helper) {
        var leads           = component.get ("v.lead_list");
        var code            = event.getParam ("code");
        var new_priority    = event.getParam ("priority");

        for (let lead of leads) {
            if (lead.code == code) {
                lead.priority = new_priority;
            }
        }

        leads = leads.sort ((first_lead, second_lead) => (
            parseInt (first_lead.priority) - parseInt (second_lead.priority))
            );

        component.set ("v.lead_list", leads);
    }
})