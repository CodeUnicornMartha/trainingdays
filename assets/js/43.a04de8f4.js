(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{599:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"challenge-5-storage-account-creating-a-data-storage-for-vms-and-applications"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#challenge-5-storage-account-creating-a-data-storage-for-vms-and-applications"}},[t._v("#")]),t._v(" Challenge 5: Storage Account: Creating a Data Storage for VMs and Applications")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/day1/"}},[t._v("back")])],1),t._v(" "),e("h2",{attrs:{id:"here-is-what-you-will-learn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn"}},[t._v("#")]),t._v(" Here is what you will learn")]),t._v(" "),e("ul",[e("li",[t._v("how to create an azure storage account using the portal")]),t._v(" "),e("li",[t._v("enable access to the storagage account data (e.g. blobs) using Shared Access Signatures")]),t._v(" "),e("li",[t._v("create a SAS policy to enable permission modification after SAS tokens have been issued.")]),t._v(" "),e("li",[t._v("use AAD credentials as 'better' way for storage account authorization")]),t._v(" "),e("li",[t._v("create a file share and attach it to your azure virtual machine")])]),t._v(" "),e("h2",{attrs:{id:"create-a-storage-account-and-a-container-using-the-azure-portal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-storage-account-and-a-container-using-the-azure-portal"}},[t._v("#")]),t._v(" Create a storage account and a container using the azure portal")]),t._v(" "),e("ol",[e("li",[t._v("Login to your azure subscription "),e("strong",[t._v("and search the marketplace for 'Storage Account'")]),e("br"),t._v(" "),e("img",{attrs:{src:"sa01.PNG",alt:"Storage Account Marketplace Item"}}),e("br"),t._v(" "),e("strong",[t._v("Create a storage account")]),t._v(" with the following values:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Resource Group")]),t._v(" "),e("td",[e("strong",[t._v("(new)")]),t._v(" rg-sachallenge")])]),t._v(" "),e("tr",[e("td",[t._v("Storage account name")]),t._v(" "),e("td",[e("em",[t._v("%unique lowercase value%")])])]),t._v(" "),e("tr",[e("td",[t._v("Location")]),t._v(" "),e("td",[e("strong",[t._v("North Europe")])])]),t._v(" "),e("tr",[e("td",[t._v("Account kind")]),t._v(" "),e("td",[t._v("StorageV2")])]),t._v(" "),e("tr",[e("td",[t._v("Performance")]),t._v(" "),e("td",[t._v("Standard")])]),t._v(" "),e("tr",[e("td",[t._v("Replication")]),t._v(" "),e("td",[e("strong",[t._v("Locally-redundand storage (LRS)")])])]),t._v(" "),e("tr",[e("td",[t._v("Access tier")]),t._v(" "),e("td",[t._v("Hot")])])])]),t._v(" "),e("p",[t._v("See some use cases for SAS / "),e("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview#when-to-use-a-shared-access-signature",target:"_blank",rel:"noopener noreferrer"}},[t._v("SAS use cases"),e("OutboundLink")],1)]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Once the sa is created - "),e("strong",[t._v('generate a new "container"')]),t._v(" within the storage account:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('[Azure Portal] -> %Your Storage Account% -> Containers -> "+ Container"\n')])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Name")]),t._v(" "),e("td",[e("strong",[t._v("secured")])])]),t._v(" "),e("tr",[e("td",[t._v("Public access level")]),t._v(" "),e("td",[t._v("Private (no anonymous access)")])])])]),t._v(" "),e("p",[t._v("Now "),e("strong",[t._v("upload a small file")]),t._v("."),e("br"),t._v(" "),e("img",{attrs:{src:"sa02.PNG",alt:"Upload a txt file to a storage account"}})]),t._v(" "),e("p",[e("strong",[t._v("Can you download the file")]),t._v(" using its URI in another browser session?"),e("br"),t._v(" "),e("img",{attrs:{src:"sa03.PNG",alt:"Download URI"}}),e("br"),t._v("\nAnswer: No. Because anonymous access is not allowed and this URI does not 'carry' any auth token.")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("strong",[t._v("Create a Shared Access Signature")]),t._v(" [via the portal] to enable blob access.")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('[Azure Portal] -> %Your Storage Account% -> Shared access signature -> "Generate SAS and connection string"\n')])])]),e("p",[e("strong",[t._v("Copy the Blob Service SAS URL to the clipboard")]),t._v(" "),e("img",{attrs:{src:"sas01.PNG",alt:"SAS URL"}})]),t._v(" "),e("p",[e("strong",[t._v("Edit the SAS URL")]),t._v(": You need to add the path to uploaded file - it should look similar to:")]),t._v(" "),e("blockquote",[e("p",[t._v("https://"),e("strong",[t._v("%Your Storage Account Name%")]),t._v(".blob.core.windows.net/"),e("strong",[t._v("secured/HelloWorld.txt")]),t._v("?sv=2019-02-02&ss=bfqt&srt=sco&sp=rwdlacup&se=2020-01-26T00:03:42Z&st=2020-01-25T16:03:42Z&spr=https&sig=Pehc....")])]),t._v(" "),e("p",[e("strong",[t._v("Can you now download the file")]),t._v(" in the browser [Yes]")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note")]),t._v(": If a SAS,...")]),t._v(" "),e("ul",[e("li",[t._v("... is leaked, it can be used by anyone who obtains it, which can potentially compromise your storage account.")]),t._v(" "),e("li",[t._v("... provided to a client application expires and the application is unable to retrieve a new SAS from your service, then the application's functionality may be hindered.")])])]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("[optional] "),e("strong",[t._v("Revoke the storage account's access key1")]),t._v(".")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[Azure Portal] -> %Your Storage Account% -> Access keys -> key1 -> 'regenerate'\n")])])]),e("p",[t._v("Can you still download the file in the browser using aboves URL [No]"),e("br"),t._v("\nWhy? Because the SAS key was generated using the previous key1 -> which is no longer valid.")]),t._v(" "),e("h2",{attrs:{id:"create-a-stored-access-policy-to-control-permissions-after-sas-token-is-issued"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-stored-access-policy-to-control-permissions-after-sas-token-is-issued"}},[t._v("#")]),t._v(" Create a stored access policy to control permissions after SAS token is issued.")]),t._v(" "),e("ol",[e("li",[t._v('Define a stored access policy on the container "securedap" (write)')])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[Azure Portal] -> %Your Storage Account% -> Containers -> 'secured' -> Access policy -> 'Storage access policy' -> '+' Add policy\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Identifier")]),t._v(" "),e("td",[e("strong",[t._v("securedap")])])]),t._v(" "),e("tr",[e("td",[t._v("Permissions")]),t._v(" "),e("td",[e("strong",[t._v("Write")])])])])]),t._v(" "),e("p",[e("strong",[t._v("Note")]),t._v(" Don't forget to use the "),e("strong",[t._v("save")]),t._v(" button!"),e("br"),t._v(" "),e("img",{attrs:{src:"saaccpol01.PNG",alt:"Access policy"}})]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("strong",[t._v("Create a SAS URL that is using this access policy")]),t._v(" using Azure Storage Explorer"),e("br"),t._v(" "),e("strong",[t._v("Open")]),t._v(" "),e("a",{attrs:{href:"https://azure.microsoft.com/en-us/features/storage-explorer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft Azure Storage Explorer"),e("OutboundLink")],1),t._v(" and  "),e("RouterLink",{attrs:{to:"/day2/challenges/challenge-0.html"}},[t._v("See Also Day 2: Challenge 0 - Setup your System")]),t._v(" "),e("strong",[t._v("Navigate to your storage account")]),t._v(" and container."),e("br"),t._v(" "),e("strong",[t._v("Right click")]),t._v(" and do 'Get Shared Access Signature' based on our policy."),e("br"),t._v(" "),e("img",{attrs:{src:"saaccpol02.PNG",alt:"Storage Explorer generate SAS URI"}}),e("br"),t._v(" "),e("strong",[t._v("Copy the URI")]),t._v(" to the clipboard."),e("br"),t._v(" "),e("strong",[t._v("Edit the SAS URI")]),t._v(" -> add the path to uploaded file -> can you now download the file in the browser [No]"),e("br"),t._v(" "),e("strong",[t._v("Edit the stored access policy 'securedap' to allow READ access")])],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[Azure Portal] -> %Your Storage Account% -> Containers -> 'secured' -> Access policy -> Under 'Storage access policy' -> 'securedap' -> '...' -> Edit -> Permissions -> Add READ -> OK -> Save\n")])])]),e("p",[e("img",{attrs:{src:"saaccpol03.PNG",alt:"RW Access Policy"}}),e("br"),t._v(" "),e("strong",[t._v("Can you now download the file in the browser")]),t._v(" [Yes]")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note")]),t._v(":"),e("br"),t._v("\nWhen you now distribute this SAS URI to users or Apps you can later modify it's behaviour by modifying the access policy."),e("br"),t._v("\nSo stored access policies can help to modify permissions to a container after the SAS has been issued to users / apps.")])]),t._v(" "),e("h2",{attrs:{id:"optional-authorize-access-to-blobs-using-aad"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#optional-authorize-access-to-blobs-using-aad"}},[t._v("#")]),t._v(" [optional] Authorize access to blobs using AAD")]),t._v(" "),e("p",[e("strong",[t._v("You can")]),t._v(" also "),e("strong",[t._v("authorize access to storage accounts using Azure Active Directory (AAD) credentials")]),t._v(". "),e("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad?toc=%2fazure%2fstorage%2fblobs%2ftoc.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("See"),e("OutboundLink")],1),e("br"),t._v("\nAnd in fact this "),e("strong",[t._v("is the recommended way")]),t._v("."),e("br"),t._v("\nApps however might want to use 'service accounts' aka Service Principals in Azure."),e("br"),t._v("\nThe following PowerShell code creates a Service Principal in AAD. You can give this 'user' permissions to your storage account -> container")]),t._v(" "),e("div",{staticClass:"language-PowerShell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Login to your azure subscription")]),t._v("\nLogin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzAccount \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Right subscription selected?")]),t._v("\nGet"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzSubscription "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Out-GridView")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Title "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Select working context"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("OutputMode Single "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzContext\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Get your AAD ID")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tenantID")]),t._v(" = $"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Get"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzContext"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Tenant"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#e.g. '72f988bf-8.....'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#create service principal with null rights in AAD")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$servicePrincipalName")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mySaSP...."')]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#must be unique within AAD tenant")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sp")]),t._v(" = New"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzADServicePrincipal "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("DisplayName "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$servicePrincipalName")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Role "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$null")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#save password for later logon (see below).")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$BSTR")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[System.Runtime.InteropServices.Marshal]")]),t._v("::SecureStringToBSTR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Secret"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$UnsecureSecret")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[System.Runtime.InteropServices.Marshal]")]),t._v("::PtrToStringAuto"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$BSTR")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('<#now assign this service principal storage account contributor rights in the Portal.\n[Azure Portal] -> %Your Storage Account% -> Containers -> \'secured\' ->  Access Control (IAM) -> Add a role assignment...\n    Role: e.g. "Storage Blob Data Owner"\n    Select: "mySaSP..."\n#>')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Now sign in as this service principal")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$passwd")]),t._v(" = ConvertTo"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SecureString "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$UnsecureSecret")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AsPlainText "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Force\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pscredential")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-Object")]),t._v(" System"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Management"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Automation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PSCredential"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ServicePrincipalNames"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$passwd")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nConnect"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzAccount "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ServicePrincipal "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Credential "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pscredential")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Tenant "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tenantID")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ctx")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$null")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ctx")]),t._v(" = New"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzStorageContext "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("StorageAccountName "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%Your Storage account name%"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("UseConnectedAccount\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$container")]),t._v(" = Get"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzStorageContainer "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Context "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ctx")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Name "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'secured'")]),t._v("\nGet"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzStorageBlob "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Container $"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$container")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Context "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ctx")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#in case of error - do you have the correct role permissions? (e.g. Storage Blob Data Contributor)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Get-AzRoleAssignment -ServicePrincipalName $sp.ServicePrincipalNames[0]")]),t._v("\nGet"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzStorageBlob "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Container $"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$container")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Context "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ctx")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("out-gridview")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Title "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Select blob to download to c:\\temp'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("OutputMode Single "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" Get"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzStorageBlobContent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Destination "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c:\\temp'")]),t._v("\n\nLogout"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzAccount "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Username "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ServicePrincipalNames"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#cleanup")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Read-Host")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Prompt "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ready to cleanup? (key)"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Login to your azure subscription")]),t._v("\nLogin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzAccount \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Right subscription selected?")]),t._v("\nGet"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzSubscription "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Out-GridView")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Title "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Select working context"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("OutputMode Single "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzContext\nRemove"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzADServicePrincipal "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("DisplayName "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$servicePrincipalName")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Force\nRemove"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzADApplication "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("DisplayName "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$servicePrincipalName")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Force\n")])])]),e("h2",{attrs:{id:"add-an-azure-file-share-to-a-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-an-azure-file-share-to-a-server"}},[t._v("#")]),t._v(" Add an azure file share to a server.")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("Add the file share")]),t._v(" via the portal:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('[Azure Portal] -> Storage Account -> File Shares -> "+" File Share\n')])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Name")]),t._v(" "),e("td",[e("strong",[t._v("myfiles")])])]),t._v(" "),e("tr",[e("td",[t._v("Quota")]),t._v(" "),e("td",[e("em",[t._v("empty")])])])])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("strong",[t._v("In your Azure VM mount the share")]),t._v(" as drive by executing the command taken from:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[Azure Portal] -> Storage Account -> File Shares -> 'myfiles' -> Connect -> copy the code into the clipboard\n")])])]),e("p",[e("img",{attrs:{src:"azfiles01.PNG",alt:"Azure Files"}}),t._v(")")]),t._v(" "),e("p",[t._v("In your VM paste the code into a PowerShell window and execute it. Once successful your 'drive' has been mounted."),e("br"),t._v(" "),e("img",{attrs:{src:"azfiles02.PNG",alt:"Mounted Azure File Share"}})]),t._v(" "),e("blockquote",[e("p",[t._v("Questions:")]),t._v(" "),e("ul",[e("li",[t._v("What is the default quota of an azure file share?")]),t._v(" "),e("li",[t._v("Which user account is used for establishing the connection?")]),t._v(" "),e("li",[t._v("Is the 'drive' available to other users that logon to the VM? [No]")]),t._v(" "),e("li",[t._v("Is the 'drive' mounted 'automatically' after a reboot? [Yes]")])])]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/day1/"}},[t._v("back")])],1)])}),[],!1,null,null,null);a.default=r.exports}}]);