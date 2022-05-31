(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{116:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=u(a),s=n,m=p["".concat(l,".").concat(s)]||p[s]||d[s]||o;return a?r.a.createElement(m,b(b({ref:t},i),{},{components:a})):r.a.createElement(m,b({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var i=2;i<o;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(116)),l={id:"abogado-usuarios",title:"M\xe9todos de abogado - Personal"},b={unversionedId:"abogado-usuarios",id:"abogado-usuarios",isDocsHomePage:!1,title:"M\xe9todos de abogado - Personal",description:"Personal",source:"@site/docs/lawyer-user.md",slug:"/abogado-usuarios",permalink:"/docs/abogado-usuarios",version:"current",sidebar:"someSidebar",previous:{title:"M\xe9todos de abogado - Perfil",permalink:"/docs/abogado-perfil"},next:{title:"M\xe9todos de abogado - Clientes",permalink:"/docs/abogado-clientes"}},c=[{value:"Personal",id:"personal",children:[{value:"Crear un nuevo usuario",id:"crear-un-nuevo-usuario",children:[]}]}],i={toc:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"personal"},"Personal"),Object(o.b)("h3",{id:"crear-un-nuevo-usuario"},"Crear un nuevo usuario"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"POST /api/lawyer/user"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Authorization: Customer")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Content-Type: application/json")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Request")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "name": "Francisco Javier",\n  "lastName": "Marquez",\n  "email": "alyavasa@example.com"\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Response: 201 Created")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "superadmin": {\n    "_id": "5c86ec24eb1b692e049cb918",\n    "fullName": "Francisco Javier Marquez",\n    "email": "alyavasa@example.com"\n  }\n}\n')),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Atributo"),Object(o.b)("th",{parentName:"tr",align:null},"Validaciones"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"name"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"string"),", ",Object(o.b)("inlineCode",{parentName:"td"},"min:3"),", ",Object(o.b)("inlineCode",{parentName:"td"},"max:150"),", ",Object(o.b)("inlineCode",{parentName:"td"},"required"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"lastName"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"string"),", ",Object(o.b)("inlineCode",{parentName:"td"},"min:3"),", ",Object(o.b)("inlineCode",{parentName:"td"},"max:150"),", ",Object(o.b)("inlineCode",{parentName:"td"},"required"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"email"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"string"),", ",Object(o.b)("inlineCode",{parentName:"td"},"email"),", ",Object(o.b)("inlineCode",{parentName:"td"},"required"))))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Validaciones"),Object(o.b)("th",{parentName:"tr",align:null},"C\xf3digo de respuesta"),Object(o.b)("th",{parentName:"tr",align:null},"C\xf3digo de mensaje"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Si el correo ya est\xe1 registrado como usuario (cualquier modalidad)"),Object(o.b)("td",{parentName:"tr",align:null},"409"),Object(o.b)("td",{parentName:"tr",align:null},"email_in_use")))),Object(o.b)("h4",{id:"flujo-exitoso"},"Flujo Exitoso"),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Se crea un objeto ",Object(o.b)("strong",{parentName:"li"},"User")," con la informaci\xf3n recibida."),Object(o.b)("li",{parentName:"ol"},"Se crea el usuario en firebase con reclamaciones de lawyer."),Object(o.b)("li",{parentName:"ol"},"Se env\xeda un correo de bienvenida al usuario reci\xe9n registrado con el cual podr\xe1 establecer su contrase\xf1a.")))}u.isMDXComponent=!0}}]);