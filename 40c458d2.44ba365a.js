(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{117:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=d(a),s=n,m=p["".concat(b,".").concat(s)]||p[s]||u[s]||c;return a?r.a.createElement(m,o(o({ref:t},i),{},{components:a})):r.a.createElement(m,o({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var i=2;i<c;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=(a(0),a(117)),b={id:"abogado-actuaciones",title:"Actuaciones"},o={unversionedId:"abogado-actuaciones",id:"abogado-actuaciones",isDocsHomePage:!1,title:"Actuaciones",description:"Actuaciones",source:"@site/docs/boards.md",slug:"/abogado-actuaciones",permalink:"/docs/abogado-actuaciones",version:"current",sidebar:"someSidebar",previous:{title:"M\xe9todos de abogado - Alertas",permalink:"/docs/abogado-alertas"}},l=[{value:"Actuaciones",id:"actuaciones",children:[{value:"Agregar Actuaciones",id:"agregar-actuaciones",children:[]}]},{value:"<code>[POST]</code> Agregar Actuaciones Adyacentes",id:"post-agregar-actuaciones-adyacentes",children:[{value:"Obtener las actuaciones de un caso",id:"obtener-las-actuaciones-de-un-caso",children:[]},{value:"Agregar Alerta a Actuaci\xf3n",id:"agregar-alerta-a-actuaci\xf3n",children:[]}]}],i={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"actuaciones"},"Actuaciones"),Object(c.b)("h3",{id:"agregar-actuaciones"},"Agregar Actuaciones"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"POST /api/lawyer/cases/;id/board'"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Authorization: Customer")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Content-Type: application/json")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Request")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "name": "Auditoria",\n  "description": "El cliente volvio a ser acusado de robar ganicitos en el oxxo.",\n  "actedAt": 1619855782000\n}\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Response: 201 Created")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"{}\n")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Atributo"),Object(c.b)("th",{parentName:"tr",align:null},"Validaciones"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"name"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"string"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"actedAt"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"timestamp"),", ",Object(c.b)("inlineCode",{parentName:"td"},"Tiempo en milisegundos"),", ",Object(c.b)("inlineCode",{parentName:"td"},"required"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"description"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"string"),", ",Object(c.b)("inlineCode",{parentName:"td"},"required"))))),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Validaciones"),Object(c.b)("th",{parentName:"tr",align:null},"C\xf3digo de respuesta"),Object(c.b)("th",{parentName:"tr",align:null},"C\xf3digo de mensaje")))),Object(c.b)("h4",{id:"flujo-exitoso"},"Flujo Exitoso"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Se crea un objeto ",Object(c.b)("strong",{parentName:"li"},"Board")," con la informaci\xf3n recibida.")),Object(c.b)("h2",{id:"post-agregar-actuaciones-adyacentes"},Object(c.b)("inlineCode",{parentName:"h2"},"[POST]")," Agregar Actuaciones Adyacentes"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"POST /api/lawyer/cases/:id/board/:id'"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Authorization: Customer")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Content-Type: application/json")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Request")),Object(c.b)("p",null,"Se agrega el id del padre para y la direcci\xf3n que debe tomar"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "name": "Auditoria",\n  "description": "El cliente volvio a ser acusado de robar ganicitos en el oxxo.",\n  "actedAt": 1619855782000,\n  "positionRelativeToParent": (\'next\', \'up\', \'down\')\n}\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Response: 201 Created")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"\n{}\n")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Atributo"),Object(c.b)("th",{parentName:"tr",align:null},"Validaciones"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"name"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"string"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"actedAt"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"timestamp"),", ",Object(c.b)("inlineCode",{parentName:"td"},"Tiempo en milisegundos"),", ",Object(c.b)("inlineCode",{parentName:"td"},"required"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"description"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"string"),", ",Object(c.b)("inlineCode",{parentName:"td"},"required"))))),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Validaciones"),Object(c.b)("th",{parentName:"tr",align:null},"C\xf3digo de respuesta"),Object(c.b)("th",{parentName:"tr",align:null},"C\xf3digo de mensaje")))),Object(c.b)("h4",{id:"flujo-exitoso-1"},"Flujo Exitoso"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Se crea un objeto ",Object(c.b)("strong",{parentName:"li"},"Board")," con la informaci\xf3n recibida.")),Object(c.b)("h3",{id:"obtener-las-actuaciones-de-un-caso"},"Obtener las actuaciones de un caso"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"GET /api/lawyer/cases/:id/boards"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Authorization: Customer")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Content-Type: application/json")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Response: 200 Ok")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n  "tree": {\n    "_id": "6348f67ac4e1f4dd7c96acb6",\n    "name": "Amparo",\n    "description": "El proceso se realizar\xe1 este mes",\n    "actedAt": "2022-06-01T11:49:10.089Z",\n    "created_at": "2022-10-14T05:41:14.826Z",\n    "parent": null,\n    "up": [\n      {\n        "_id": "6348f67ac4e1f4dd7c96acb7",\n        "positionRelativeToParent": "up",\n        "parent": "6348f67ac4e1f4dd7c96acb6",\n        "next": {\n          "_id": "6348f67ac4e1f4dd7c96acba",\n          "positionRelativeToParent": "next",\n          "parent": "6348f67ac4e1f4dd7c96acb7",\n          "next": null,\n          "up": [],\n          "down": [],\n          "actedAt": "2021-12-31T06:09:11.528Z",\n          "name": "Amparo",\n          "description": "El proceso se realizar\xe1 este mes",\n          "created_at": "2022-10-14T05:41:14.858Z"\n        },\n        "up": [],\n        "down": [],\n        "actedAt": "2021-10-22T19:39:56.619Z",\n        "name": "Amparo",\n        "description": "El proceso se realizar\xe1 este mes",\n        "created_at": "2022-10-14T05:41:14.831Z"\n      }\n    ],\n    "down": [\n      {\n        "_id": "6348f67ac4e1f4dd7c96acb9",\n        "positionRelativeToParent": "down",\n        "parent": "6348f67ac4e1f4dd7c96acb6",\n        "next": {\n          "_id": "6348f67ac4e1f4dd7c96acbc",\n          "positionRelativeToParent": "next",\n          "parent": "6348f67ac4e1f4dd7c96acb9",\n          "next": null,\n          "up": [],\n          "down": [],\n          "actedAt": "2022-09-12T17:44:53.894Z",\n          "name": "Amparo",\n          "description": "El proceso se realizar\xe1 este mes",\n          "created_at": "2022-10-14T05:41:14.870Z"\n        },\n        "up": [],\n        "down": [],\n        "actedAt": "2022-04-06T15:58:29.466Z",\n        "name": "Amparo",\n        "description": "El proceso se realizar\xe1 este mes",\n        "created_at": "2022-10-14T05:41:14.851Z"\n      }\n    ],\n    "next": {\n      "_id": "6348f67ac4e1f4dd7c96acb8",\n      "positionRelativeToParent": "next",\n      "parent": "6348f67ac4e1f4dd7c96acb6",\n      "next": {\n        "_id": "6348f67ac4e1f4dd7c96acbb",\n        "positionRelativeToParent": "next",\n        "parent": "6348f67ac4e1f4dd7c96acb8",\n        "next": null,\n        "up": [],\n        "down": [],\n        "actedAt": "2021-11-20T22:28:48.729Z",\n        "name": "Amparo",\n        "description": "El proceso se realizar\xe1 este mes",\n        "created_at": "2022-10-14T05:41:14.863Z"\n      },\n      "up": [],\n      "down": [],\n      "actedAt": "2022-02-23T01:04:51.678Z",\n      "name": "Amparo",\n      "description": "El proceso se realizar\xe1 este mes",\n      "created_at": "2022-10-14T05:41:14.840Z"\n    },\n    "positionRelativeToParent": "next"\n  }\n}\n')),Object(c.b)("h4",{id:"flujo-exitoso-2"},"Flujo Exitoso"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Obtiene el arbol con todas las actuaciones")),Object(c.b)("h3",{id:"agregar-alerta-a-actuaci\xf3n"},"Agregar Alerta a Actuaci\xf3n"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"POST /api/lawyer/cases/:idCase/boards/:idBoard/alerts"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Authorization: Customer")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Content-Type: application/json")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Request")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'{\n    "name": \'Cita en el juzgado\',\n    "scheduledTo": 1619509120495,\n    "priority": \'high\'\n}\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Response: 201 Created")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"{}\n")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Atributo"),Object(c.b)("th",{parentName:"tr",align:null},"Validaciones"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"name"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"string"),", ",Object(c.b)("inlineCode",{parentName:"td"},"min:3"),", ",Object(c.b)("inlineCode",{parentName:"td"},"max:150"),", ",Object(c.b)("inlineCode",{parentName:"td"},"required"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"scheduledTo"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"timestamp"),", ",Object(c.b)("inlineCode",{parentName:"td"},"Tiempo en milisegundos"),", ",Object(c.b)("inlineCode",{parentName:"td"},"required"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"prority"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"string"),", ",Object(c.b)("inlineCode",{parentName:"td"},"(high/medium/low)"),", ",Object(c.b)("inlineCode",{parentName:"td"},"required"))))),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Validaciones"),Object(c.b)("th",{parentName:"tr",align:null},"C\xf3digo de respuesta"),Object(c.b)("th",{parentName:"tr",align:null},"C\xf3digo de mensaje"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"Si ",Object(c.b)("inlineCode",{parentName:"td"},"scheduleTo")," es menor a la fecha actual"),Object(c.b)("td",{parentName:"tr",align:null},"422"),Object(c.b)("td",{parentName:"tr",align:null},"invalid_date")))),Object(c.b)("h4",{id:"flujo-exitoso-3"},"Flujo Exitoso"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Se crea un objeto ",Object(c.b)("strong",{parentName:"li"},"Alert")," con la informaci\xf3n recibida.")))}d.isMDXComponent=!0}}]);