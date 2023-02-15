"use strict";(self.webpackChunklinea_legal_specs=self.webpackChunklinea_legal_specs||[]).push([[9042],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=l,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(k,r(r({ref:t},s),{},{components:a})):n.createElement(k,r({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:l,r[1]=i;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(7462),l=(a(7294),a(3905));const o={id:"abogado-dashboard",title:"M\xe9todos de abogado - Inicio"},r=void 0,i={unversionedId:"abogado-dashboard",id:"abogado-dashboard",title:"M\xe9todos de abogado - Inicio",description:"Expedientes",source:"@site/docs/laywer-dashboard.md",sourceDirName:".",slug:"/abogado-dashboard",permalink:"/docs/abogado-dashboard",draft:!1,tags:[],version:"current",frontMatter:{id:"abogado-dashboard",title:"M\xe9todos de abogado - Inicio"},sidebar:"someSidebar",previous:{title:"M\xe9todos de abogado",permalink:"/docs/abogado"},next:{title:"M\xe9todos de abogado - Perfil",permalink:"/docs/abogado-perfil"}},p={},d=[{value:"Expedientes",id:"expedientes",level:2},{value:"Obtener las expedientes m\xe1s recientes",id:"obtener-las-expedientes-m\xe1s-recientes",level:3},{value:"Flujo Exitoso",id:"flujo-exitoso",level:4},{value:"Obtener los pendientes de hoy",id:"obtener-los-pendientes-de-hoy",level:3},{value:"Flujo Exitoso",id:"flujo-exitoso-1",level:4},{value:"Obtener los pendientes de la semana",id:"obtener-los-pendientes-de-la-semana",level:3},{value:"Flujo Exitoso",id:"flujo-exitoso-2",level:4},{value:"Obtener los pendientes por venir",id:"obtener-los-pendientes-por-venir",level:3},{value:"Flujo Exitoso",id:"flujo-exitoso-3",level:4}],s={toc:d},u="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"expedientes"},"Expedientes"),(0,l.kt)("h3",{id:"obtener-las-expedientes-m\xe1s-recientes"},"Obtener las expedientes m\xe1s recientes"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/lawyer/cases/latest"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Authorization: Customer")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Content-Type: application/json")),(0,l.kt)("p",null,"Permite obtiene los casos m\xe1s actuales de el cliente, ordenados por fecha de actualizaci\xf3n. "),(0,l.kt)("p",null,"Este m\xe9todo acepta las siguientes consultas:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Campo"),(0,l.kt)("th",{parentName:"tr",align:null},"Tipo de dato"),(0,l.kt)("th",{parentName:"tr",align:null},"Significado"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:null},"N\xfamero de resultados a traer a partir del offset, 5 por defecto.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:null},"N\xfamero de resultados a partir del cual se devolver\xe1n al usuario que realiza la petici\xf3n, 0 por defecto.")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response: 200 Ok")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_id": "5c86ec24eb1b692e049cb918",\n    "fileNumber": "5757",\n    "name": "Despido con causa",\n    "client": "Francisco Gil",\n    "updatedAt": "1617768987809",\n    "date": "1617768987809",\n    "responsibles": [\n        {\n            "_id": "5c86ec24eb1b692e049cb918",\n            "initials": "JM"\n        }\n    ]\n}\n')),(0,l.kt)("h4",{id:"flujo-exitoso"},"Flujo Exitoso"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Obtiene los casos m\xe1s actuales de el cliente, aplicando los filtros y la paginaci\xf3n necesaria.")),(0,l.kt)("p",null,"Ejemplo de c\xf3digo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const nameString = \"Jose Miguel\" \nconst fullName = nameString.split(' ');\nconst initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);\nreturn initials.toUpperCase(); \n// JM\n")),(0,l.kt)("h3",{id:"obtener-los-pendientes-de-hoy"},"Obtener los pendientes de hoy"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/lawyer/outstanding/today"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Authorization: Customer")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Content-Type: application/json")),(0,l.kt)("p",null,"Permite obtiene los pendientes del d\xeda en curso de el cliente, ordenados por la fecha m\xe1s cercana. "),(0,l.kt)("p",null,"Este m\xe9todo acepta las siguientes consultas:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Campo"),(0,l.kt)("th",{parentName:"tr",align:null},"Tipo de dato"),(0,l.kt)("th",{parentName:"tr",align:null},"Significado"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:null},"N\xfamero de resultados a traer a partir del offset, 5 por defecto.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:null},"N\xfamero de resultados a partir del cual se devolver\xe1n al usuario que realiza la petici\xf3n, 0 por defecto.")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response: 200 Ok")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "5c86ec24eb1b692e049cb918",\n    "fileNumber": "5757",\n    "caseName": "Pelea por casa",\n    "alertName": "Cita con juzgado 03",\n    "createdBy": "Albert Camus"\n}\n')),(0,l.kt)("h4",{id:"flujo-exitoso-1"},"Flujo Exitoso"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Obtiene los pendientes m\xe1s actual de el cliente, aplicando los filtros y la paginaci\xf3n necesaria.")),(0,l.kt)("h3",{id:"obtener-los-pendientes-de-la-semana"},"Obtener los pendientes de la semana"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/lawyer/outstanding/week"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Authorization: Customer")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Content-Type: application/json")),(0,l.kt)("p",null,"Permite obtiene los pendientes de la semana en curso de el cliente (omitiendo los de el d\xeda actual), ordenados por la fecha m\xe1s cercana. "),(0,l.kt)("p",null,"Este m\xe9todo acepta las siguientes consultas:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Campo"),(0,l.kt)("th",{parentName:"tr",align:null},"Tipo de dato"),(0,l.kt)("th",{parentName:"tr",align:null},"Significado"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:null},"N\xfamero de resultados a traer a partir del offset, 5 por defecto.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:null},"N\xfamero de resultados a partir del cual se devolver\xe1n al usuario que realiza la petici\xf3n, 0 por defecto.")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response: 200 Ok")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "5c86ec24eb1b692e049cb918",\n    "fileNumber": "5751",\n    "alertCase": "Pelea en la calle",\n    "alertName": "Cita con juzgado 04",\n    "createdBy": "Jorge Ortiz"\n}\n')),(0,l.kt)("h4",{id:"flujo-exitoso-2"},"Flujo Exitoso"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Obtiene los pendientes m\xe1s actual de el cliente, aplicando los filtros y la paginaci\xf3n necesaria.")),(0,l.kt)("h3",{id:"obtener-los-pendientes-por-venir"},"Obtener los pendientes por venir"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/lawyer/outstanding/last"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Authorization: Customer")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Content-Type: application/json")),(0,l.kt)("p",null,"Permite obtiene los pendientes en curso de el cliente (ignorando la semana actual), ordenados por fecha de actualizaci\xf3n. "),(0,l.kt)("p",null,"Este m\xe9todo acepta las siguientes consultas:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Campo"),(0,l.kt)("th",{parentName:"tr",align:null},"Tipo de dato"),(0,l.kt)("th",{parentName:"tr",align:null},"Significado"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:null},"N\xfamero de resultados a traer a partir del offset, 5 por defecto.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:null},"N\xfamero de resultados a partir del cual se devolver\xe1n al usuario que realiza la petici\xf3n, 0 por defecto.")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response: 200 Ok")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "5c86ec24eb1b692e049cb918",\n    "fileNumber": "5757",\n    "alertCase": "Orina en v\xeda publica",\n    "alertName": "Cita con juzgado 06",\n    "createdBy": "Memo Aponte"\n}\n')),(0,l.kt)("h4",{id:"flujo-exitoso-3"},"Flujo Exitoso"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Obtiene los pendientes m\xe1s actual de el cliente, aplicando los filtros y la paginaci\xf3n necesaria.")))}c.isMDXComponent=!0}}]);