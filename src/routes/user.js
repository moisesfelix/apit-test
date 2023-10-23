const users = [
    {
        id: 1,
        name: 'Moisés Felix',
        token: 'xilefsesiom',
        projectsRoles: [
            {
                id: 1010,
                projectName: 'CGA',
                roles: [
                    {
                        role: 'admin',
                        permisions: [
                            {
                                action: ['read'],
                                subjects: [
                                    'motorista-resource',
                                    'dashboard-page',
                                ],
                            },
                            {
                                action: ['read'],
                                subjects: [
                                    'motorista-resource',
                                    'dashboard-page',
                                ],
                            }

                        ]
                    }
                ]
            },
            {
                id: 10100,
                projectName: 'FMS Niterói',
                roles: [
                    {
                        role: 'admin',
                        permisions: [
                            'motorista-resource',
                            'dashboard-page',
                        ]
                    }
                ]
            }
        ]

    }

] 