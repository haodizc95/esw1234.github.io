var initESW = function(gslbBaseURL) {
      embedded_svc.settings.displayHelpButton = true; //Or false
      embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'

      //embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)
      //embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)

      embedded_svc.settings.loadingText = '...'; //(Defaults to Loading)
      //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

      // Settings for Chat
      //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
            // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
            // Returns a valid button ID.
      //};
      embedded_svc.settings.prepopulatedPrechatFields = {FirstName: "justin", LastName: "macmillin", Email: "jmacmillin@salesforce.com"};//, Company: "Salesforce", Priority: "Medium", Subject: "Help me"}; //Sets the auto-population of pre-chat form fields
      //embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
      //embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)

      embedded_svc.settings.enabledFeatures = ['LiveAgent'];
      embedded_svc.settings.entryFeature = 'LiveAgent';

      // Avatars.
      embedded_svc.settings.avatarImgURL = "../../../avatar.png";
      embedded_svc.settings.chatbotAvatarImgURL = "../../../bot-avatar.png";

      embedded_svc.settings.devMode = true;

      embedded_svc.init(
            'http://jmacmillin-wsm3.internal.salesforce.com:6109',
            'http://communities.localhost.soma.force.com:6109/customerServiceNov2019',
            gslbBaseURL,
            '00Dxx0000006GgB',
            'justin',
            {
                  baseLiveAgentContentURL: 'http://jmacmillin-wsm3.internal.salesforce.com:8095/content',
                  deploymentId: '572xx0000004C92',
                  buttonId: '573xx0000004C92',
                  baseLiveAgentURL: 'http://jmacmillin-wsm3.internal.salesforce.com:8096/chat',
                  eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04Ixx0000004C92EAE_16e80adc605',
                  isOfflineSupportEnabled: true
            }
      );
};

if (!window.embedded_svc) {
      var s = document.createElement('script');
      s.setAttribute('src', 'http://jmacmillin-wsm3.internal.salesforce.com:6109/embeddedservice/5.0/esw.js');
      s.onload = function() {
            initESW(null);
      };
      document.body.appendChild(s);
} else {
      initESW('http://jmacmillin-wsm3.internal.salesforce.com:6109');
}

console.log("Loaded snippet.js");
