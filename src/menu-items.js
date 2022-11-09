const menuItems = {
    items: [
        {
            id: 'insights-navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'insights',
                    title: 'Insights',
                    type: 'item',
                    url: '/app/insights',
                    icon: 'feather icon-activity'
                },
                {
                    id: 'insights-charts',
                    title: 'Insights Charts',
                    type: 'item',
                    url: '',
                    icon: 'feather icon-pie-chart'
                },
                {
                    id: 'advertising',
                    title: 'Advertising Services',
                    type: 'item',
                    url: '/pages/advertising-services',
                    icon: 'feather icon-briefcase'
                },
                {
                    id: 'contact',
                    title: 'Contact Agents',
                    type: 'item',
                    url: '/pages/contact-agents',
                    icon: 'feather icon-phone-call'
                },
                {
                    id: 'leads',
                    title: 'Leads',
                    type: 'item',
                    url: '/pages/leads',
                    icon: 'feather icon-grid'
                }
            ]
        }
    ]
};

export default menuItems;
