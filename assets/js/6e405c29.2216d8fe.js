"use strict";(self.webpackChunklinea_legal_specs=self.webpackChunklinea_legal_specs||[]).push([[42],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||o;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1452:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={id:"abogado-alertas",title:"M\xe9todos de abogado - Alertas"},l=void 0,i={unversionedId:"abogado-alertas",id:"abogado-alertas",title:"M\xe9todos de abogado - Alertas",description:"Alertas",source:"@site/docs/lawyer-alert.md",sourceDirName:".",slug:"/abogado-alertas",permalink:"/docs/abogado-alertas",draft:!1,tags:[],version:"current",frontMatter:{id:"abogado-alertas",title:"M\xe9todos de abogado - Alertas"},sidebar:"someSidebar",previous:{title:"M\xe9todos de abogado - Casos",permalink:"/docs/abogado-casos"},next:{title:"Actuaciones",permalink:"/docs/abogado-actuaciones"}},p={},u=[{value:"Alertas",id:"alertas",level:2},{value:"Agregar alerta",id:"agregar-alerta",level:3},{value:"Flujo Exitoso",id:"flujo-exitoso",level:4},{value:"<code>[GET]</code> Obtener alertas programadas por mes y a\xf1o",id:"get-obtener-alertas-programadas-por-mes-y-a\xf1o",level:2},{value:"Flujo exitoso",id:"flujo-exitoso-1",level:4}],d={toc:u},c="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"alertas"},"Alertas"),(0,r.kt)("h3",{id:"agregar-alerta"},"Agregar alerta"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/lawyer/alert"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Authorization: Customer")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Content-Type: application/json")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Authorization: Superadmin")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Content-Type: application/json")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Request")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "name": "Cita en el juzgado",\n  "scheduledTo": 1619509120495,\n  "priority": "high"\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response: 201 Created")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,r.kt)("th",{parentName:"tr",align:null},"Validaciones"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"min:3"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"max:150"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"required"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scheduledTo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Tiempo en milisegundos"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"required"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prority"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"(high/medium/low)"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"required"))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Validaciones"),(0,r.kt)("th",{parentName:"tr",align:null},"C\xf3digo de respuesta"),(0,r.kt)("th",{parentName:"tr",align:null},"C\xf3digo de mensaje"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Si ",(0,r.kt)("inlineCode",{parentName:"td"},"scheduleTo")," es menor a la fecha actual"),(0,r.kt)("td",{parentName:"tr",align:null},"422"),(0,r.kt)("td",{parentName:"tr",align:null},"invalid_date")))),(0,r.kt)("h4",{id:"flujo-exitoso"},"Flujo Exitoso"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Se crea un objeto ",(0,r.kt)("strong",{parentName:"li"},"Alert")," con la informaci\xf3n recibida.")),(0,r.kt)("h2",{id:"get-obtener-alertas-programadas-por-mes-y-a\xf1o"},(0,r.kt)("inlineCode",{parentName:"h2"},"[GET]")," Obtener alertas programadas por mes y a\xf1o"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"GET api/lawyer/alert/:month/:year"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Authorization: Customer")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Content-Type: : application/json")),(0,r.kt)("p",null,"Permite obtener ."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response: 200 Ok")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\n{\n    {\n        1: [ \n            {\n                _id: "5c86ec24eb1b692e049cb918", \n                scheduleTo: 1619855782000, \n                name: "Cita en el juzgado", \n                priority: \'low\'\n            }, \n            {\n                _id: "5c86ec24eb1b692e049cb918", \n                scheduleTo: 1619855783000, \n                name: "Dcumentacion", \n                priority: \'low\'\n            }, \n            {\n                _id: "5c86ec24eb1b692e049cb918", \n                scheduleTo: 1619855784000, \n                name: "Cita en el juzgado", \n                priority: \'low\'\n            }\n        ],\n        2: : \n        [ \n            {\n                _id: "5c86ec24eb1b692e049cb918", \n                scheduleTo: 1619855784000, \n                name: "Cita en el juzgado", \n                priority: \'low\'\n                } \n            ],\n        ...\n        }\n}\n')),(0,r.kt)("h4",{id:"flujo-exitoso-1"},"Flujo exitoso"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Obtiene las alertas agrupadas por d\xeda")),(0,r.kt)("p",null,"Ejemplo de c\xf3digo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let groups = _.groupBy(occurences, function (date) {\n  return moment(date).startOf('day').format();\n});\n// {\n//   '2021-05-01T00:00:00-05:00': [ 1619855782000, 1619855783000, 1619855784000 ],\n//   '2021-05-02T00:00:00-05:00': [ 1619942184000 ],\n//   '2021-06-02T00:00:00-05:00': [ 1622620584000 ]\n// }\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'db.collection.find({ $expr: { $and: [ { "$eq": [ { "$month": "$date" }, 3 ] }, { "$eq": [ { "$year": "$date" }, 2020 ] } ] } })\n')))}s.isMDXComponent=!0}}]);