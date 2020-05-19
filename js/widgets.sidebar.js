window._genesys = {
    widgets: {
        main: {
            debug: true,
            preload: ['sidebar'],
        },
        webchat: {
            transport: {
            	type: 'purecloud-v2-sockets',
            	dataURL: 'https://api.mypurecloud.com',
        		deploymentKey : 'DeploymentKey',
        		orgGuid : 'orgGUID',
            	interactionData: {
                  routing: {
                    targetType: 'QUEUE',
                	targetAddress: '123Test',
                	priority: 2
                	}
            	}
            }
        },
        sidebar: {
            showOnStartup: true,
            position: 'right',
            expandOnHover: true,
            channels:
            [
                {
                name: 'WebChat',
                clickCommand: 'WebChat.open', 
                displayName: 'Chat', 
                displayTitle: 'Get live help',
                icon: 'chat'
                }
            ]
        }    
    }
};