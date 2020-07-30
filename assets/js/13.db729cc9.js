(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{360:function(t,e,r){t.exports=r.p+"assets/img/finalArchitecture.46a7e675.png"},361:function(t,e,r){t.exports=r.p+"assets/img/startingpoint01.c5ea4369.png"},362:function(t,e,r){t.exports=r.p+"assets/img/deploytoazure.e0e5d477.png"},363:function(t,e,r){t.exports=r.p+"assets/img/startingpoint02.52c69db3.png"},364:function(t,e,r){t.exports=r.p+"assets/img/lbresult1.7db2edf5.png"},365:function(t,e,r){t.exports=r.p+"assets/img/lbresult2.4be32af5.png"},601:function(t,e,r){"use strict";r.r(e);var a=r(42),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"challenge-7-networking-loadbalancing-your-www-server-farm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#challenge-7-networking-loadbalancing-your-www-server-farm"}},[t._v("#")]),t._v(" Challenge 7: Networking: Loadbalancing your WWW Server Farm")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/day1/"}},[t._v("back")])],1),t._v(" "),a("h2",{attrs:{id:"here-is-what-you-will-learn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn"}},[t._v("#")]),t._v(" Here is what you will learn")]),t._v(" "),a("ul",[a("li",[t._v("How to load balance http traffic to 2 webserver vms")]),t._v(" "),a("li",[t._v("Create an external load balancer using the azure portal")]),t._v(" "),a("li",[t._v("Learn to know the requirements for an azure external loadbalancer and how to configure it.")])]),t._v(" "),a("p",[t._v("Our "),a("strong",[t._v("final architecture")]),t._v(" should look like this:\n"),a("img",{attrs:{src:r(360),alt:"Final architecture"}}),a("br"),t._v("\nAt "),a("strong",[t._v("first")]),t._v(" you will deploy the "),a("em",[t._v("start environment")]),t._v(" and in the "),a("strong",[t._v("second")]),t._v(" step you will add the external loadbalancer.")]),t._v(" "),a("h2",{attrs:{id:"_1-deploy-the-starting-point"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-deploy-the-starting-point"}},[t._v("#")]),t._v(" 1. Deploy the 'starting point'")]),t._v(" "),a("p",[t._v("In this directory there is an ARM-template which includes 2 web server vms and its requirements (networking, disks,...).:")]),t._v(" "),a("p",[a("img",{attrs:{src:r(361),alt:"'Starting Point' Architecture"}})]),t._v(" "),a("p",[a("strong",[t._v("Deploy this scenario")]),t._v(" into your subscription by clicking on the\n"),a("a",{attrs:{href:"https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FCSA-OCP-GER%2Fazure-developer-college%2Fmaster%2Fday1%2Fchallenges%2FChallenge%207%2FChallenge7Start.json"}},[a("img",{attrs:{src:r(362)}})]),t._v("\nbutton.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Resource group")]),t._v(" "),a("td",[a("strong",[t._v("(new)")]),t._v(" rg-lbwww")])]),t._v(" "),a("tr",[a("td",[t._v("Location")]),t._v(" "),a("td",[a("strong",[t._v("North Europe")])])]),t._v(" "),a("tr",[a("td",[t._v("Admin user")]),t._v(" "),a("td",[t._v("demouser")])]),t._v(" "),a("tr",[a("td",[t._v("Admin password")]),t._v(" "),a("td",[a("strong",[a("em",[t._v("some complex value")])])])]),t._v(" "),a("tr",[a("td",[t._v("Vm Size")]),t._v(" "),a("td",[a("strong",[t._v("Standard_B2s")]),t._v("  or try e.g. "),a("strong",[t._v("Standard_F2s_v2")])])]),t._v(" "),a("tr",[a("td",[t._v("Disk Sku")]),t._v(" "),a("td",[t._v("StandardSSD_LRS")])])])]),t._v(" "),a("p",[t._v("The result should look similar to this:"),a("br"),t._v(" "),a("img",{attrs:{src:r(363),alt:"Deployment result"}})]),t._v(" "),a("h2",{attrs:{id:"_2-deploy-the-load-balancer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-deploy-the-load-balancer"}},[t._v("#")]),t._v(" 2. Deploy the load balancer")]),t._v(" "),a("p",[t._v("Now let's "),a("strong",[t._v("add an external azure loadbalancer")]),t._v(" in front of the 2 parallel web server machines.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[Azure Portal] -> '+' Add -> Search the marketplace for 'Load balancer'\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Resource group")]),t._v(" "),a("td",[t._v("rg-lbwww")])]),t._v(" "),a("tr",[a("td",[t._v("Name")]),t._v(" "),a("td",[a("strong",[t._v("lb-wwwfarm")])])]),t._v(" "),a("tr",[a("td",[t._v("Region")]),t._v(" "),a("td",[a("strong",[t._v("North Europe")])])]),t._v(" "),a("tr",[a("td",[t._v("Type")]),t._v(" "),a("td",[t._v("Public")])]),t._v(" "),a("tr",[a("td",[t._v("SKU")]),t._v(" "),a("td",[t._v("Basic")])]),t._v(" "),a("tr",[a("td",[t._v("Public IP address")]),t._v(" "),a("td",[a("strong",[t._v("Use existing")])])]),t._v(" "),a("tr",[a("td",[t._v("Choose public IP address")]),t._v(" "),a("td",[t._v("pip-wwwfarm")])])])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(": To "),a("strong",[t._v("get your loadbalancer working")]),t._v(" you need to "),a("strong",[t._v("configure")]),t._v(" the following:")]),t._v(" "),a("ul",[a("li",[t._v("... "),a("a",{attrs:{href:"./lbconfig01.PNG"}},[a("strong",[t._v("a backend pool")])]),t._v(" that contains the 'endpoints' i.e. the vms to which the traffic will be routed.")]),t._v(" "),a("li",[t._v("... "),a("a",{attrs:{href:"./lbconfig02.PNG"}},[a("strong",[t._v("a health probe")])]),t._v(" for TCP port 80 (http) to check if the endpoints are 'responsive' to web requests")]),t._v(" "),a("li",[t._v("... "),a("a",{attrs:{href:"./lbconfig03.PNG"}},[a("strong",[t._v("a lb rule")])]),t._v(" to forward incoming traffic (TCP port 80) on lb's frontend IP address to backend pool (TCP port 80)")])])]),t._v(" "),a("p",[a("strong",[t._v("Finally")]),a("br"),t._v("\nTo "),a("strong",[t._v("check")]),t._v(" if your "),a("strong",[t._v("lb is working")]),t._v(" do a "),a("strong",[t._v("http://"),a("em",[t._v("%PIP of your lb%")])]),a("br"),t._v("\nDepending which endpoint serves your request the "),a("strong",[t._v("result should something like")]),t._v(":"),a("br"),t._v(" "),a("a",{attrs:{href:"lbresult1.png"}},[a("img",{attrs:{src:r(364),width:"150px"}})]),t._v(" "),a("a",{attrs:{href:"lbresult2.png"}},[a("img",{attrs:{src:r(365),width:"150px"}})])]),t._v(" "),a("h2",{attrs:{id:"optional-test-server-outage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-test-server-outage"}},[t._v("#")]),t._v(" [optional] Test server outage")]),t._v(" "),a("p",[t._v("Stop one vm and verifiy if the webpage is still served."),a("br"),t._v("\nRestart the vm and check if the lb notices it and rebalances load.")]),t._v(" "),a("h2",{attrs:{id:"cleanup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[t._v("#")]),t._v(" Cleanup")]),t._v(" "),a("p",[a("strong",[t._v("Delete the resource group")]),t._v(" "),a("em",[t._v("rg-lbwww")])]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/day1/"}},[t._v("back")])],1)])}),[],!1,null,null,null);e.default=o.exports}}]);