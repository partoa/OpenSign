"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[8489],{91945:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>f,contentTitle:()=>x,default:()=>v,frontMatter:()=>u,metadata:()=>j,toc:()=>g});var t=s(85893),l=s(11151),n=s(58219),r=(s(62316),s(51039)),o=s.n(r),i=(s(82723),s(9487)),c=s(41429),d=s(5397),m=s(4667),p=s(9472),h=s(85162);const u={id:"deletecontact",title:"Delete Contact",description:"The Delete Contact API allows you to remove a contact from your contactbook. If you no longer need a particular contact's information, this API makes it easy to delete their record.",sidebar_label:"Delete Contact",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVm1v2zYQ/ivcfVkDyLbspB0mDMOyNuiMBkuwZBiwxAho6WSxpkiWpPwCQ/99OEq25dgJOmAosC+JdXyOd/fw7iE34PnMQfIA77XyPPUOJhFk6FIrjBdaQQL3BbIPKNEja0Hs8nbMuJR66dhaV8xrZrHUC2ScpS0kt7qkRbu1TLWe99k4Dx5KM6nVDC1TiBnjzHDrRVpJvsN/75hQubYlpzwi5gvhQuCSz9Ex4Rlyt6bYWZOcL1BYZjHVNutDBNqgDb7jDBJoQO3eEIHhlpfo0VL1G1C8REigXX8SGUQgqHrDfQHPKbm1eiEyZHr6GVM/zpjOd4XvEoIILH6phMUMEm8rjMD5taQwTpRGEgBXRuoMIcm5dARICyw5JBvwaxOQ3go1gwgaJroWXPGwSwKmGE2LEXcZ1PWEojqjlUNH+4zimP4d5r89xybRjLkqTdG5vJJy/R1EgQZUnhy5MVKkgcfBZ0fem+MsGx6IVUuse9HE3tJzqp599r+uKHfzmzmHOmrPKbv0rzuN4tF5bxj34h/uh++Six+Tt+/6cRz/DRGsSkm+7Ylm3CPt64WX++/6CNYcWRfYWmoCX5xi8U6X6AuhZmyJyrOl1WoWMSORO2TerhmfcaGY5B7tf8gqWqvt6+z8u8zqTtVCSaHwadtCTxdx/DTckXDxcisp7VmuK5V920pPhH+9nIun0a6ct8fljNWCS5EFobnXc1TftpxueN+EP+5V0YDCOhwU27U3RTpMKyv8OojcqseN6DXrycOEtIL6RO/1MQijLyCBQatng81eE2ugDe1iK5qVlZBA4b1xyWDAjelrg8qJmZJ86vqpLgfciMFiCHX0HO08nwk1673qNdkXcEckNzwelLFjkxvxCdcQbVnqolotL5BnaAOjdLUE55a7G4PqTsxUYH4xPFL8e7p92gso02lVovKhC1iuLXvmzabcYca0ojspLJL9vD9kzmAq8raB+uxRPSqaVVY5zCvJpFBzlzyqHnu4yXORCi7ZXzh1wuPkzZa55XJ5xNhZ8PkofFFNmUWj9/BZMAZau167jzOIwKMt3U1+h3YhUmxP6YVQgwAetGNBlym1dsmF3N+fvzx3ojaVIkXlsNPIlx9vr9mCnfdjiDrt8RVJD67H769+v7uifakdm0Ma9uN+TCajnS+56oQ6fMA8P97NfsT/t8+ddgw8rvzASC6CNARSN+1MP8D++ZN0XjqTCArtPAE2G2rdP62sazJ/qdCSdEwiWHAr+JRm5WEDmXD0O9u9W15k880f7RPojH3to+lkIdshVzThCy4r+oII5rg+fLbVkzraDjql2gAu0xSN77ge6fiBGH64ur66v4IIeEXEdTVmHjSm/UEBTmZ2KD5NDvSXdPCkw0901J9w/fMO3qy86NCWuEUTS5O6rv8BTdsO7w==",sidebar_class_name:"delete api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},x=void 0,j={id:"API-docs/deletecontact",title:"Delete Contact",description:"The Delete Contact API allows you to remove a contact from your contactbook. If you no longer need a particular contact's information, this API makes it easy to delete their record.",source:"@site/docs/API-docs/deletecontact.api.mdx",sourceDirName:"API-docs",slug:"/API-docs/deletecontact",permalink:"/docs/API-docs/deletecontact",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"deletecontact",title:"Delete Contact",description:"The Delete Contact API allows you to remove a contact from your contactbook. If you no longer need a particular contact's information, this API makes it easy to delete their record.",sidebar_label:"Delete Contact",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVm1v2zYQ/ivcfVkDyLbspB0mDMOyNuiMBkuwZBiwxAho6WSxpkiWpPwCQ/99OEq25dgJOmAosC+JdXyOd/fw7iE34PnMQfIA77XyPPUOJhFk6FIrjBdaQQL3BbIPKNEja0Hs8nbMuJR66dhaV8xrZrHUC2ScpS0kt7qkRbu1TLWe99k4Dx5KM6nVDC1TiBnjzHDrRVpJvsN/75hQubYlpzwi5gvhQuCSz9Ex4Rlyt6bYWZOcL1BYZjHVNutDBNqgDb7jDBJoQO3eEIHhlpfo0VL1G1C8REigXX8SGUQgqHrDfQHPKbm1eiEyZHr6GVM/zpjOd4XvEoIILH6phMUMEm8rjMD5taQwTpRGEgBXRuoMIcm5dARICyw5JBvwaxOQ3go1gwgaJroWXPGwSwKmGE2LEXcZ1PWEojqjlUNH+4zimP4d5r89xybRjLkqTdG5vJJy/R1EgQZUnhy5MVKkgcfBZ0fem+MsGx6IVUuse9HE3tJzqp599r+uKHfzmzmHOmrPKbv0rzuN4tF5bxj34h/uh++Six+Tt+/6cRz/DRGsSkm+7Ylm3CPt64WX++/6CNYcWRfYWmoCX5xi8U6X6AuhZmyJyrOl1WoWMSORO2TerhmfcaGY5B7tf8gqWqvt6+z8u8zqTtVCSaHwadtCTxdx/DTckXDxcisp7VmuK5V920pPhH+9nIun0a6ct8fljNWCS5EFobnXc1TftpxueN+EP+5V0YDCOhwU27U3RTpMKyv8OojcqseN6DXrycOEtIL6RO/1MQijLyCBQatng81eE2ugDe1iK5qVlZBA4b1xyWDAjelrg8qJmZJ86vqpLgfciMFiCHX0HO08nwk1673qNdkXcEckNzwelLFjkxvxCdcQbVnqolotL5BnaAOjdLUE55a7G4PqTsxUYH4xPFL8e7p92gso02lVovKhC1iuLXvmzabcYca0ojspLJL9vD9kzmAq8raB+uxRPSqaVVY5zCvJpFBzlzyqHnu4yXORCi7ZXzh1wuPkzZa55XJ5xNhZ8PkofFFNmUWj9/BZMAZau167jzOIwKMt3U1+h3YhUmxP6YVQgwAetGNBlym1dsmF3N+fvzx3ojaVIkXlsNPIlx9vr9mCnfdjiDrt8RVJD67H769+v7uifakdm0Ma9uN+TCajnS+56oQ6fMA8P97NfsT/t8+ddgw8rvzASC6CNARSN+1MP8D++ZN0XjqTCArtPAE2G2rdP62sazJ/qdCSdEwiWHAr+JRm5WEDmXD0O9u9W15k880f7RPojH3to+lkIdshVzThCy4r+oII5rg+fLbVkzraDjql2gAu0xSN77ge6fiBGH64ur66v4IIeEXEdTVmHjSm/UEBTmZ2KD5NDvSXdPCkw0901J9w/fMO3qy86NCWuEUTS5O6rv8BTdsO7w==",sidebar_class_name:"delete api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Get Contact",permalink:"/docs/API-docs/getcontact"},next:{title:"Get Contact list",permalink:"/docs/API-docs/contactlist"}},f={},g=[{value:"Request",id:"request",level:2}];function y(e){const a={h2:"h2",p:"p",...(0,l.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"openapi__heading",children:(0,t.jsx)(a.p,{children:"Delete Contact"})}),"\n",(0,t.jsx)(o(),{method:"delete",path:"/contact/{contact_id}"}),"\n",(0,t.jsx)(a.p,{children:"The Delete Contact API allows you to remove a contact from your contactbook. If you no longer need a particular contact's information, this API makes it easy to delete their record."}),"\n",(0,t.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(a.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(c.Z,{className:"paramsItem",param:{name:"contact_id",in:"path",description:"Provide objectId of contact to delete",required:!0,style:"simple",explode:!1,schema:{type:"string",format:"string",example:"ph2bh2asd"}}})})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsxs)(n.Z,{children:[(0,t.jsxs)(h.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"Contact deleted successfully!"})}),(0,t.jsx)("div",{children:(0,t.jsx)(i.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(p.default,{className:"openapi-tabs__schema",children:[(0,t.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(m.Z,{collapsible:!1,name:"objectId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Bxh2aspHp3"}}),(0,t.jsx)(m.Z,{collapsible:!1,name:"deletedAt",required:!1,schemaName:"date",qualifierMessage:void 0,schema:{type:"string",example:"2023-10-07T16:49:56.000Z",xml:{name:"date"},title:"date"}})]})]})}),(0,t.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(d.Z,{responseExample:'{\n  "objectId": "Bxh2aspHp3",\n  "deletedAt": "2023-10-07T16:49:56.000Z"\n}',language:"json"})})]})})})})]}),(0,t.jsxs)(h.default,{label:"400",value:"400",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"Something went wrong, please try again later!"})}),(0,t.jsx)("div",{children:(0,t.jsx)(i.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(p.default,{className:"openapi-tabs__schema",children:[(0,t.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)(m.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Something went wrong, please try again later!"}})})]})}),(0,t.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(d.Z,{responseExample:'{\n  "error": "Something went wrong, please try again later!"\n}',language:"json"})})]})})})})]}),(0,t.jsxs)(h.default,{label:"404",value:"404",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"Contact not found!"})}),(0,t.jsx)("div",{children:(0,t.jsx)(i.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(p.default,{className:"openapi-tabs__schema",children:[(0,t.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)(m.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Contact not found!"}})})]})}),(0,t.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(d.Z,{responseExample:'{\n  "error": "Contact not found!"\n}',language:"json"})})]})})})})]}),(0,t.jsxs)(h.default,{label:"405",value:"405",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"Invalid API Token!"})}),(0,t.jsx)("div",{children:(0,t.jsx)(i.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(p.default,{className:"openapi-tabs__schema",children:[(0,t.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)(m.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Invalid API token!"}})})]})}),(0,t.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(d.Z,{responseExample:'{\n  "error": "Invalid API token!"\n}',language:"json"})})]})})})})]})]})})})]})}function v(e={}){const{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(y,{...e})}):y(e)}}}]);