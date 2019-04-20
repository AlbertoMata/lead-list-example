({
    // Resolve $Resource dynamically
    get_avatar_url : function (component) {
        var leads = component.get ("v.lead_list");

        for (let lead of leads) {
            lead.avatar = $A.get ("$Resource" + '.' + lead.avatar);
        }

        return leads;

    }
})