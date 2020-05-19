window._genesys = {
    widgets: {
        main: {
          preload: ['webchat'],
        },
        webchat: {
            chatButton: {
                enabled: true,
                template: '<div class="cx-widget cx-webchat-chat-button cx-side-button" role="button" tabindex="0" data-message="ChatButton" data-gcb-service-node="true"><span class="cx-icon"></span><span class="i18n cx-chat-button-label" data-message="ChatButton"></span></div>',
                effect: 'fade', 
                openDelay: 10,
                effectDuration: 10,
                hideDuringInvite: true
            }
        }
    }
};