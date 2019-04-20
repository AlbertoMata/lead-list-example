({

    init : function (component, event, helper) {
        helper.set_priority_class_style (component);
    },

    // With a bidirectional data binding, v.priority_class could alert the
    // parent component of the lead's changes, but component events are useful
    // to make readable the communication with deeper levels of the hierarchy. 
    // That's beacause both, the child and the parent know when a change occurs.
    // It is not a rule, but those considerations are really important.
    handle_priority_change: function (component) {
        var new_priority = component.find("priority_select").get("v.value");
        var lead = component.get("v.lead");

        lead.priority = new_priority;

        component.set("v.lead", lead);
    },

    handle_lead_change : function (component, event, helper) {
        var lead          = component.get ("v.lead");
        var lead_change   = component.getEvent ("lead_change");

        helper.set_priority_class_style (component);

        lead_change.setParams({'code': lead.code, 'priority': lead.priority});
        lead_change.fire();
    }

})