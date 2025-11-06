export async function GET(){
    const tickets = [
        {
            id: 't-1001',
            title: 'Cannot connect to VPN',
            description: 'User reports intermittent VPN connectivity errors.',
            priority: 'High',
            status: 'Open',
            assignee: 'unassigned',
            updatedAT: '20225-10-31T14:05:00Z'
        },
        {
            id: 't-1002',
            title: 'Email not synching on mobile',
            description: 'Outlook mobile app not receiving new emails.',
            priority: "Medium",
            status: "In Progress",
            assignee: "Ben Johnson",
            updatedAT:'2025-11-01TO9:03:00Z'
        },
        {
            id: 't-1003',
            title: 'Printer server down',
            description: 'Users report printer connectivity errors.',
            priority: 'Low',
            status: 'Open',
            assignee: 'unassigned',
            updatedAT: '2025-10-29T16:27:00Z',
        },
        {
            id: 't-1004',
            title: 'Password reset request',
            description: 'User cannot access account.',
            priority: 'Medium',
            status: 'Resolved',
            assignee: 'Lisa Simpson',
            updatedAT: '2025-12-13T31:07:00Z'
        },
        {
            id: 't-1005',
            title: 'Overheating laptop',
            description: 'Laptop overheats during zoom calls.',
            priority: 'High',
            status: "In Progress",
            assignee: "Patty Patrickson",
            updatedAT: "2025-09-11T24:25:00Z"
        },
        {
            id: 't-1006',
            title: 'Wifi deadzone in oval office.',
            description: 'Weak signal in oval office',
            priority: 'High',
            status:'In Progress',
            assignee:'Ethan Counasse',
            updatedAT:'2025-11-17T23:12:00Z'
        },
        {
            id: 't-1007',
            title: 'Database connection timeout.',
            description: 'App cannot connect to the SQL database',
            priority: 'Medium',
            status: 'Resolved',
            assignee: "Marcus Freeman",
            updatedAT:'2025-02-07T01:05:00Z'
        },
        {
            id: 't-1008',
            title: 'Teams audio devices not detected.',
            description: 'Headset itermittently disconnects',
            priority: 'Low',
            status: 'Open',
            assignee: 'unassigned',
            updatedAT: '2025-04-04T16:04:00Z'
        },
        {
            id: 't-1009',
            title: 'MacOS upgrade request',
            description: 'user wants to upgrade to latest MacOS.',
            priority: 'Medium',
            status: 'In Progress',
            assignee: 'Patrick Wilson',
            updatedAT: '2025-09-02T06:11:00Z'
        },
        {
            id: 't-1010',
            title: 'AI Bot not responding',
            description: 'AI Bot fails to post reminders.',
            priority: 'Medium',
            status: 'Resolved',
            assignee: 'Jerry Jones',
            updatedAT: '2025-11-03T10:01:00Z'
        },
       {
        id: 't-1011',
        title: 'Security alert',
        description: 'Multiple failed login attempts from foreign IP.',
        priority:'High',
        status: 'In Progress',
        assignee: 'Kenny Thompson',
        updatedAT: '2025-07-11T21:12:00Z'
       },
       {
        id: 't-1012',
        title: 'Broken HDMI port in meeting room',
        description: 'Cannot connect laptop to TV',
        priority:'Low',
        status: 'Open',
        assignee: 'Unassigned',
        updatedAT: '2025-10-10T10:10:00Z'
       }

    ];
return Response.json(tickets);
}