({

    set_priority_class_style : function (component) {
        var lead          = component.get ("v.lead");
        var class_name    = '';

        if (lead.priority === '1') {
            class_name = 'high_priority';
        } else if (lead.priority === '2')  {
            class_name = 'medium_priority';
        } else {
            class_name = 'low_priority';
        }

        component.set ("v.priority_class", class_name);
    }

})