(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{640:function(e,a,t){"use strict";t.r(a);var s=t(42),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"oauth-2-implicit-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oauth-2-implicit-flow"}},[e._v("#")]),e._v(" OAuth 2 Implicit Flow")]),e._v(" "),t("h2",{attrs:{id:"here-is-what-you-ll-learn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-ll-learn"}},[e._v("#")]),e._v(" Here is what you'll learn")]),e._v(" "),t("ul",[t("li",[e._v("How to register an Azure AD application and allow the OAuth2 Implicit Grant Flow")]),e._v(" "),t("li",[e._v("How to register an Azure AD application and expose an API with OAuth2 permissions")]),e._v(" "),t("li",[e._v("How to authenticate an user and start an OAuth2 implicit flow to acquire an access token for the API")])]),e._v(" "),t("p",[t("em",[e._v("Important Note:")]),e._v("\nThe Implicit Grant Flow is less secure than the Code Grant Flow. This is because the generation of the "),t("code",[e._v("access_token")]),e._v(" for accessing the user's data on a resource server (e.g., the Graph API), is completely happening on the front channel. However, as the flow completely happens in the browser, it is suited for applications that do not have a server backend (e.g., 100% JS-based SPA).")]),e._v(" "),t("h2",{attrs:{id:"create-an-azure-ad-application-and-enable-implicit-grant-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-ad-application-and-enable-implicit-grant-flow"}},[e._v("#")]),e._v(" Create an Azure AD application and enable Implicit Grant Flow")]),e._v(" "),t("p",[e._v("Before you can authenticate an user and acquire an access token for the API you have to register an application in your Azure AD tenant.\nBy default the Implicit Grant Flow for issuing access tokens is disabled.")]),e._v(" "),t("h3",{attrs:{id:"azure-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-cli"}},[e._v("#")]),e._v(" Azure CLI")]),e._v(" "),t("p",[e._v("Firstly, create a new Azure AD Application, this time with "),t("code",[e._v("oauth2-allow-implicit-flow")]),e._v(" enabled:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az ad app create --display-name challengeimplicitgrant --reply-urls http://localhost:5001/api/tokenechofragment --identifier-uris https://challengeimplicitgrantflow --oauth2-allow-implicit-flow "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n")])])]),t("p",[e._v("As before, note down the "),t("code",[e._v("appId")]),e._v(". Next, retrieve and note the ID of your current Azure AD tenant via:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az account show \n")])])]),t("h2",{attrs:{id:"create-an-azure-ad-application-and-expose-an-api-with-oauth2-permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-ad-application-and-expose-an-api-with-oauth2-permissions"}},[e._v("#")]),e._v(" Create an Azure AD application and expose an API with OAuth2 permissions")]),e._v(" "),t("p",[e._v("In this sample we create an API that exposes four OAuth2 permissions:")]),e._v(" "),t("ol",[t("li",[e._v("Contacts.Read")]),e._v(" "),t("li",[e._v("Contacts.Create")]),e._v(" "),t("li",[e._v("Contacts.Update")]),e._v(" "),t("li",[e._v("Contacts.Delete")])]),e._v(" "),t("h3",{attrs:{id:"azure-cli-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-cli-2"}},[e._v("#")]),e._v(" Azure CLI")]),e._v(" "),t("p",[e._v("Firstly, create a new Azure AD application and write the output to a variable:")]),e._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("API_APP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("az ad app create --display-name challengeimplicitgrantapi --identifier-uris https://challengeimplicitgrantapi"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n")])])]),t("p",[e._v("After that we have created an Azure AD application that contains one default OAuth2 permission which was created by Azure AD.\nTo make your own OAuth2 permission, the default permission must be disabled first:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# get the app id")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("API_APP_ID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" $API_APP "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" jq -r "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.appId'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# disable default exposed scope")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DEFAULT_SCOPE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("az ad app show --id $API_APP_ID "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" jq "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.oauth2Permissions[0].isEnabled = false'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" jq -r "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.oauth2Permissions'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\naz ad app update --id "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$API_APP_ID")]),e._v(" --set "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("oauth2Permissions")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$DEFAULT_SCOPE")]),e._v('"')]),e._v("\n")])])]),t("p",[e._v("Now your own OAuth2 permissions can be added:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# set needed scopes from file 'oath2-permissions'")]),e._v("\naz ad app update --id "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$API_APP_ID")]),e._v(" --set "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("oauth2Permissions")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("@oauth2-permissions.json\n")])])]),t("p",[e._v("To keep it simple, the needed OAuth2 permissions are defined in a "),t("a",{attrs:{href:"oauth2-permissions.json"}},[e._v(".json")]),e._v(" file.")]),e._v(" "),t("p",[e._v("In Azure AD an Application is something like a template with all necessary settings like ReplyUrl, required permissions, OAuth2 Permissions etc.\nWhen a user logs in for the first time and grants consent, an instance of the application is created. The instance is called a "),t("strong",[e._v("Service Principal")]),e._v(".\nAll created Service principals can be found in your Azure AD under "),t("strong",[e._v("Enterprise Applications")]),e._v(".\nAs no user ever logs on to an API we must create the "),t("strong",[e._v("Service Principal")]),e._v(" for the API.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az ad sp create --id "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$API_APP_ID")]),e._v("\n")])])]),t("p",[e._v("Go to your Azure AD and have a look at the registered application. The permissions look as follow:\n"),t("img",{attrs:{src:"imgages/../images/api-premissions.png",alt:"API Permissions"}})]),e._v(" "),t("h2",{attrs:{id:"run-the-token-echo-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-the-token-echo-server"}},[e._v("#")]),e._v(" Run the Token Echo Server")]),e._v(" "),t("p",[e._v("Open another shell and run the "),t("code",[e._v("Token Echo Server")]),e._v(" from "),t("a",{attrs:{href:"../apps/token-echo-server"}},[t("code",[e._v("day5/apps/token-echo-server")])]),e._v(" in this repository. This helper ASP.NET Core tool is used to echo the token issued by your AAD. The tool is listening on port 5001 on your local machine. Tokens are accepted on the route "),t("code",[e._v("http://localhost:5001/api/tokenechofragment")]),e._v(". That's the reason why we initially registered an AAD application with a reply url pointing to "),t("code",[e._v("http://localhost:5001/api/tokenechofragment")]),e._v(".")]),e._v(" "),t("p",[e._v("Run the application via:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("dotnet run\n")])])]),t("h2",{attrs:{id:"create-the-request-to-directly-acquire-an-access-token-for-the-microsoft-graph-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-the-request-to-directly-acquire-an-access-token-for-the-microsoft-graph-api"}},[e._v("#")]),e._v(" Create the request to directly acquire an "),t("code",[e._v("access_token")]),e._v(" for the Microsoft Graph API")]),e._v(" "),t("p",[e._v("We can directly request an "),t("code",[e._v("access_token")]),e._v(" by specifying "),t("code",[e._v("token")]),e._v(" in the "),t("code",[e._v("response_type")]),e._v(" field. Adding "),t("code",[e._v("token")]),e._v(" will allow our app to receive an "),t("code",[e._v("access_token")]),e._v(" immediately from the authorize endpoint without having to make a second request to the token endpoint. If you use the token in "),t("code",[e._v("response_type")]),e._v(", the scope parameter must contain a scope indicating which resource to issue the token for.")]),e._v(" "),t("p",[e._v("Replace "),t("code",[e._v("TENANT_ID")]),e._v(" with your AAD Tenant Id and "),t("code",[e._v("APPLICATION_ID")]),e._v(" with your Application Id (this is the id that you received when you created the first application). Open a browser and paste the request:")]),e._v(" "),t("div",{staticClass:"language-HTTP extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("https:")]),e._v("//login.microsoftonline.com/TENANT_ID/oauth2/v2.0/authorize?\nclient_id=APPLICATION_ID\n&response_type=id_token+token\n&redirect_uri=http%3A%2F%2Flocalhost%3A5001%2Fapi%2Ftokenechofragment\n&response_mode=fragment\n&scope=openid%20profile%20https%3A%2F%2Fchallengeimplicitgrantapi%2FContacts.Read%20https%3A%2F%2Fchallengeimplicitgrantapi%2FContacts.Create%20https%3A%2F%2Fchallengeimplicitgrantapi%2FContacts.Update%20https%3A%2F%2Fchallengeimplicitgrantapi%2FContacts.Delete\n&nonce=1234\n")])])]),t("p",[e._v("After executing the request and you have signed in, Azure AD shows you a consent page and you have to grant access for the requested API permissions.\nAfter giving consent, have a look at your browser's address bar. The "),t("code",[e._v("access_token")]),e._v(" is in the fragment of the url and should look something like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("http://localhost:5001/api/tokenechofragment#access_token=eyJ0eX...&token_type=Bearer&expires_in=3599&scope=openid+profile+User.Read+email&id_token=eyJ0eXAiOi...&session_state=0f76c823-eac5-4ec0-9d4a-edf40b783583\n")])])]),t("p",[e._v("Make sure to only copy the "),t("code",[e._v("access_token")]),e._v(", not the full remainder of the string!")]),e._v(" "),t("p",[e._v("Go to "),t("a",{attrs:{href:"http://jwt.ms",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://jwt.ms"),t("OutboundLink")],1),e._v(", paste the token and have a look at the decoded token. You will see that there is issued an additional claim "),t("code",[e._v("scp")]),e._v(". This claim contains all OAuth2Permissions the user gave consent to.")]),e._v(" "),t("p",[e._v("More details on how the OAuth2 Implicit Grant Flow request can be used is documented "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-implicit-grant-flow#send-the-sign-in-request",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"cleanup-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cleanup-resources"}},[e._v("#")]),e._v(" Cleanup resources")]),e._v(" "),t("h3",{attrs:{id:"azure-cli-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-cli-3"}},[e._v("#")]),e._v(" Azure CLI")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az ad app delete --id "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("applicationid"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\naz ad app delete --id "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$API_APP_ID")]),e._v("\n")])])]),t("h2",{attrs:{id:"summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),t("p",[e._v("This challenge showed how to create a new application in AAD and use the OAuth 2.0 Implicit Grant Flow to request an access token for accessing the Graph API. The full process is described "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-implicit-grant-flow",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);a.default=r.exports}}]);