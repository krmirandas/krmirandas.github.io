(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{116:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),l=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=l.a.createContext({}),u=function(e){var t=l.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,b=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),s=n,m=p["".concat(b,".").concat(s)]||p[s]||d[s]||o;return a?l.a.createElement(m,r(r({ref:t},c),{},{components:a})):l.a.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,b=new Array(o);b[0]=s;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:n,b[1]=r;for(var c=2;c<o;c++)b[c]=a[c];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n,l=a(3),o=a(7),b=(a(0),a(116)),r={id:"abogado",title:"M\xe9todos de abogado"},i={unversionedId:"abogado",id:"abogado",isDocsHomePage:!1,title:"M\xe9todos de abogado",description:"Organizaci\xf3n",source:"@site/docs/lawyer.md",slug:"/abogado",permalink:"/docs/abogado",version:"current",sidebar:"someSidebar",previous:{title:"M\xe9todos de superadmin",permalink:"/docs/superadmin"},next:{title:"M\xe9todos de abogado - Inicio",permalink:"/docs/abogado-dashboard"}},c=[{value:"Organizaci\xf3n",id:"organizaci\xf3n",children:[{value:"Crear organizaci\xf3n",id:"crear-organizaci\xf3n",children:[]},{value:"Elegir plan de pago",id:"elegir-plan-de-pago",children:[]},{value:"Crear usuarios",id:"crear-usuarios",children:[]},{value:"Consultar usuarios",id:"consultar-usuarios",children:[]},{value:"Eliminar usuarios",id:"eliminar-usuarios",children:[]}]},{value:"M\xe9todos de pago",id:"m\xe9todos-de-pago",children:[{value:"Obtener m\xe9todos de pago",id:"obtener-m\xe9todos-de-pago",children:[]},{value:"Agregar m\xe9todo de pago",id:"agregar-m\xe9todo-de-pago",children:[]},{value:"Elegir m\xe9todo de pago default",id:"elegir-m\xe9todo-de-pago-default",children:[]},{value:"Eliminar m\xe9todo de pago",id:"eliminar-m\xe9todo-de-pago",children:[]}]},{value:"Planes",id:"planes",children:[{value:"Obtener planes de suscripci\xf3n",id:"obtener-planes-de-suscripci\xf3n",children:[]}]}],u=(n="Notice",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",e)}),p={toc:c};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(b.b)("wrapper",Object(l.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"organizaci\xf3n"},"Organizaci\xf3n"),Object(b.b)("h3",{id:"crear-organizaci\xf3n"},"Crear organizaci\xf3n"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("inlineCode",{parentName:"p"},"POST /api/lawyer/organizations"))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Authorization: Customer")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Content-Type: multipart/form-data")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Request")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "name": "ENERAP",\n  "logo": "path/to/logo.png",\n  "timezone": "America/Mexico_City"\n}\n')),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Response: 201 Created")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "organization": {\n    "_id": "5c86ec24eb1b692e049cb918",\n    "name": "ENERAP",\n    "logo": "http://linea-legal/orgs/5c86ec24eb1b692e049cb918/logo.png",\n    "timezone": "America/Mexico_City"\n    ]\n  }\n}\n')),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Atributo"),Object(b.b)("th",{parentName:"tr",align:null},"Validaciones"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"name"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"string"),", ",Object(b.b)("inlineCode",{parentName:"td"},"min:3"),", ",Object(b.b)("inlineCode",{parentName:"td"},"max:150"),", ",Object(b.b)("inlineCode",{parentName:"td"},"required"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"logo"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"file"),", ",Object(b.b)("inlineCode",{parentName:"td"},"png/jpg"),", ",Object(b.b)("inlineCode",{parentName:"td"},"max:6MB"),", ",Object(b.b)("inlineCode",{parentName:"td"},"required"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"timezone"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"string"),", ",Object(b.b)("inlineCode",{parentName:"td"},"timezone"),", ",Object(b.b)("inlineCode",{parentName:"td"},"required"))))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Validaciones"),Object(b.b)("th",{parentName:"tr",align:null},"C\xf3digo de respuesta"),Object(b.b)("th",{parentName:"tr",align:null},"C\xf3digo de mensaje"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Si ya existe una organizaci\xf3n con ese nombre."),Object(b.b)("td",{parentName:"tr",align:null},"409"),Object(b.b)("td",{parentName:"tr",align:null},"org_name_in_use")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Si el timezone no es valido."),Object(b.b)("td",{parentName:"tr",align:null},"422"),Object(b.b)("td",{parentName:"tr",align:null},"invalid_timezone")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Si el formato de la imagen no es png o jpg."),Object(b.b)("td",{parentName:"tr",align:null},"415"),Object(b.b)("td",{parentName:"tr",align:null},"invalid_file_type")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Si el logo excede el peso m\xe1ximo permitido."),Object(b.b)("td",{parentName:"tr",align:null},"415"),Object(b.b)("td",{parentName:"tr",align:null},"invalid_file_size")))),Object(b.b)("h4",{id:"flujo-exitoso"},"Flujo Exitoso"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Se crea un objeto ",Object(b.b)("strong",{parentName:"li"},"Organization")," con la informaci\xf3n recibida."),Object(b.b)("li",{parentName:"ol"},"Se asocia el usuario a la organizaci\xf3n.")),Object(b.b)("h3",{id:"elegir-plan-de-pago"},"Elegir plan de pago"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("inlineCode",{parentName:"p"},"POST /api/lawyer/organizations/:id/membership"))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Authorization: Customer")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Content-Type: application/json")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Request")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'{\n  "planId": "adgad8sdfh8sdf",\n  "schemaId": "9ag889adadsga"\n}\n')),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Response: 201 Created")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Atributo"),Object(b.b)("th",{parentName:"tr",align:null},"Validaciones"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"planId"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"string"),", ",Object(b.b)("inlineCode",{parentName:"td"},"required"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"schemaId"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"string"),", ",Object(b.b)("inlineCode",{parentName:"td"},"required"))))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Validaciones"),Object(b.b)("th",{parentName:"tr",align:null},"C\xf3digo de respuesta"),Object(b.b)("th",{parentName:"tr",align:null},"C\xf3digo de mensaje"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Si el usuario no es owner."),Object(b.b)("td",{parentName:"tr",align:null},"403"),Object(b.b)("td",{parentName:"tr",align:null},"forbidden")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Si la organizaci\xf3n no pertenece al owner."),Object(b.b)("td",{parentName:"tr",align:null},"404"),Object(b.b)("td",{parentName:"tr",align:null},"organization_not_found")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Si el plan no se encuentra."),Object(b.b)("td",{parentName:"tr",align:null},"404"),Object(b.b)("td",{parentName:"tr",align:null},"plan_not_found")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Si el esquema no se encuentra en el plan."),Object(b.b)("td",{parentName:"tr",align:null},"404"),Object(b.b)("td",{parentName:"tr",align:null},"schema_not_found")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Si la organizaci\xf3n ya cuenta con un plan activo."),Object(b.b)("td",{parentName:"tr",align:null},"409"),Object(b.b)("td",{parentName:"tr",align:null},"already_subscribed")))),Object(b.b)("h4",{id:"flujo-exitoso-1"},"Flujo Exitoso"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Se obtiene la ",Object(b.b)("strong",{parentName:"li"},"Organization"),"."),Object(b.b)("li",{parentName:"ol"},"Se obtiene el plan y el esquema de pago."),Object(b.b)("li",{parentName:"ol"},"Se asocia el plan a la organizaci\xf3n y se genera la suscripci\xf3n para el cliente.")),Object(b.b)("p",null,"Ejemplo de c\xf3digo:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},"await stripe.customers.update(\n  req.user.customerId,\n  {\n    invoice_settings: {\n      default_payment_method: req.body.paymentMethodId,\n    },\n  }\n);\nconst plan = await Plan.findOne({req.body.planId});\nconst price = plan.schemas.filter(s => s._id === req.body.schemaId)[0];\n// Create the subscription\nconst subscription = await stripe.subscriptions.create({\n  customer: req.body.customerId,\n  items: [{ price: price.stripePriceId }],\n  expand: ['latest_invoice.payment_intent']\n});\n")),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",{parentName:"div",className:"admonition-heading"},Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",{parentName:"h5",className:"admonition-icon"},Object(b.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(b.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(b.b)("div",{parentName:"div",className:"admonition-content"},Object(b.b)("p",{parentName:"div"},"Se deben escuchar los eventos relacionados a los pagos para asegurar que se brinda el servicio a los usuarios\nque han pagado. Del mismo modo, evitar brindar el servicio a los usuarios que no han realizado su pago."),Object(b.b)("p",{parentName:"div"},"Para informaci\xf3n completa del manejo de suscripciones, visita el ",Object(b.b)("a",{parentName:"p",href:"https://stripe.com/docs/billing/subscriptions/overview"},"tutorial de Stripe"),"."))),Object(b.b)("h3",{id:"crear-usuarios"},"Crear usuarios"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"POST /api/lawyer/users")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Authorization: Customer")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Content-Type: : application/json")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Request")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'  {\n    "users": [\n      "kevin@miranda.com",\n      "ricardo@miranda.com"\n    ]\n  }\n')),Object(b.b)("p",null,"Permite dar de alta usuarios dentro de la organizaci\xf3n del usuario."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Response: 201 Created")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Atributo"),Object(b.b)("th",{parentName:"tr",align:null},"Validaciones"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"users"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"typeOf:array"),", ",Object(b.b)("inlineCode",{parentName:"td"},"min:1")," ",Object(b.b)("inlineCode",{parentName:"td"},"required"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"users","[0]"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"typeOf:string"),", ",Object(b.b)("inlineCode",{parentName:"td"},"email")," ",Object(b.b)("inlineCode",{parentName:"td"},"required"))))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Validaciones"),Object(b.b)("th",{parentName:"tr",align:null},"C\xf3digo de respuesta"),Object(b.b)("th",{parentName:"tr",align:null},"C\xf3digo de mensaje"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Si la organizaci\xf3n no tiene una suscripci\xf3n activa."),Object(b.b)("td",{parentName:"tr",align:null},"412"),Object(b.b)("td",{parentName:"tr",align:null},"plan_required")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Si la organizaci\xf3n excede el n\xfamero de usuarios."),Object(b.b)("td",{parentName:"tr",align:null},"422"),Object(b.b)("td",{parentName:"tr",align:null},"user_limit_exceeded")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Si alguno de los usuarios ya se encuentra registrado."),Object(b.b)("td",{parentName:"tr",align:null},"409"),Object(b.b)("td",{parentName:"tr",align:null},"user_already_registered")))),Object(b.b)("h4",{id:"flujo-exitoso-2"},"Flujo Exitoso"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Se crea el usuario en firebase."),Object(b.b)("li",{parentName:"ol"},"Se asocia el uid de firebase a un nuevo usuario de la organizaci\xf3n."),Object(b.b)("li",{parentName:"ol"},"Se env\xeda el correo de bienvenida al nuevo usuario.")),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",{parentName:"div",className:"admonition-heading"},Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",{parentName:"h5",className:"admonition-icon"},Object(b.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(b.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(b.b)("div",{parentName:"div",className:"admonition-content"},Object(b.b)("p",{parentName:"div"},"Al agregar un usuario, se tendr\xe1n 72 horas para aceptar su invitaci\xf3n, de lo contrario ser\xe1 eliminado."))),Object(b.b)("h3",{id:"consultar-usuarios"},"Consultar usuarios"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"GET /api/lawyer/users")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Authorization: Customer")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Content-Type: : application/json")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Request")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'  {\n    "users": [\n      {\n        "_id": "97070a0s970707b",\n        "email": "kevin@miranda",\n        "inviteStatus": "accepted"\n      },\n      {\n        "_id": "97070a0s970707b",\n        "email": "ricardo@miranda",\n        "inviteStatus": "pending"\n      }\n    ]\n  }\n')),Object(b.b)("p",null,"Permite consultar a los usuarios dados de alta en la organizaci\xf3n. El atributo inviteStatus se puede obtener de la propiedad\nemailVerified de firebase."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Response: 200 Ok")),Object(b.b)("h4",{id:"flujo-exitoso-3"},"Flujo Exitoso"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Se crea el usuario en firebase."),Object(b.b)("li",{parentName:"ol"},"Se asocia el uid de firebase a un nuevo usuario de la organizaci\xf3n."),Object(b.b)("li",{parentName:"ol"},"Se env\xeda el correo de bienvenida al nuevo usuario.")),Object(b.b)("h3",{id:"eliminar-usuarios"},"Eliminar usuarios"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"DELETE /api/lawyer/users/:id")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Authorization: Customer")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Content-Type: : application/json")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Request")),Object(b.b)("p",null,"Permite eliminar a un usuario de una organizaci\xf3n, restringiendo su acceso de forma inmediata. Este proceso es irreversible."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Response: 204 No Content")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Validaciones"),Object(b.b)("th",{parentName:"tr",align:null},"C\xf3digo de respuesta"),Object(b.b)("th",{parentName:"tr",align:null},"C\xf3digo de mensaje"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Si el usuario no se encuentra en la organizaci\xf3n."),Object(b.b)("td",{parentName:"tr",align:null},"404"),Object(b.b)("td",{parentName:"tr",align:null},"user_not_found")))),Object(b.b)("h4",{id:"flujo-exitoso-4"},"Flujo Exitoso"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Obtiene el usuario de la base de datos."),Object(b.b)("li",{parentName:"ol"},"Elimina el usuario de firebase."),Object(b.b)("li",{parentName:"ol"},"Elimina el usuario de la base de datos.")),Object(b.b)("h2",{id:"m\xe9todos-de-pago"},"M\xe9todos de pago"),Object(b.b)("h3",{id:"obtener-m\xe9todos-de-pago"},"Obtener m\xe9todos de pago"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"GET /api/lawyer/payment_methods")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Authorization: Customer")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Content-Type: : application/json")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Request")),Object(b.b)("p",null,"Permite obtener las tarjetas asociadas al cliente."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Response: 200 Ok")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'  {\n    "cards": [\n      {\n        "id": "pm_1G8vgR2eZvKYlo2C9o1o4bhS",\n        "brand": "visa",\n        "last_4": "4242",\n        "exp_year": 2023\n      },\n      {...},\n      {...}\n    ]\n  }\n')),Object(b.b)("h4",{id:"flujo-exitoso-5"},"Flujo Exitoso"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Se obtiene el id de Stripe del cliente autenticado."),Object(b.b)("li",{parentName:"ol"},"Se invoca el m\xe9todo ",Object(b.b)("inlineCode",{parentName:"li"},"listSources")," del SDK de Stripe."),Object(b.b)("li",{parentName:"ol"},"Se filtra la informaci\xf3n devuelta.")),Object(b.b)("aside",{class:"info"},"Si el usuario no cuenta con m\xe9todos de pago asociados, se responde con un arreglo vac\xedo."),Object(b.b)("h3",{id:"agregar-m\xe9todo-de-pago"},"Agregar m\xe9todo de pago"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"POST /api/lawyer/payment_methods")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Authorization: Customer")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Content-Type: : application/json")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Request")),Object(b.b)("p",null,"Permite agregar un m\xe9todo de pago a un cliente. Se crear\xe1 una instancia de ",Object(b.b)("em",{parentName:"p"},"SetupIntents")," de ",Object(b.b)("a",{parentName:"p",href:"https://stripe.com/docs/api/setup_intents/create"},"Stripe"),"."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Response: 201 Created")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},'{\n  "id":"seti_1IMOE7IuKQ0PCijjuklUmXwh",\n  "object":"setup_intent",\n  "application":null,\n  "cancellation_reason":null,\n  "client_secret":"seti_1IMOE7IuKQ0PCijjuklUmXwh_secret_IyKt5WWj0jZ8RAM9i3LaBLsJmulcTk4",\n  "created":1613699775,\n  "customer":null,\n  "description":null,\n  "last_setup_error":null,\n  "latest_attempt":null,\n  "livemode":false,\n  "mandate":null,\n  "metadata":{},\n  "next_action":null,\n  "on_behalf_of":null,\n  "payment_method":null,\n  "payment_method_options":{\n    "card":{\n      "request_three_d_secure":"automatic"\n    }\n  },\n  "payment_method_types":["card"],\n  "single_use_mandate":null,\n  "status":"requires_payment_method",\n  "usage":"off_session"\n}\n')),Object(b.b)("h4",{id:"flujo-exitoso-6"},"Flujo Exitoso"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Se valida si el usuario cuenta con un identificador de Stripe, si no lo tiene, se le crea uno."),Object(b.b)("li",{parentName:"ol"},"Se invoca el m\xe9todo de Stripe ",Object(b.b)("inlineCode",{parentName:"li"},"createSetupIntent")," con el identificador del cliente."),Object(b.b)("li",{parentName:"ol"},"Se devuelve el detalle del intent.")),Object(b.b)(u,{type:"info",title:"Espera al hook",mdxType:"Notice"},"Se debe escuchar al evento *payment_method.attached* para asegurarse que se agrego un m\xe9todo de pago al usuario."),Object(b.b)("h3",{id:"elegir-m\xe9todo-de-pago-default"},"Elegir m\xe9todo de pago default"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"PUT /api/lawyer/payment_methods/default")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Authorization: Customer")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Content-Type: : application/json")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Request")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'  {\n    "card": "pm_1G8vgR2eZvKYlo2C9o1o4bhS"\n  }\n')),Object(b.b)("p",null,"Permite elegir un m\xe9todo de pago como el default."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Response: 204 No Content")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Atributo"),Object(b.b)("th",{parentName:"tr",align:null},"Validaciones"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"card"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"typeOf:string"),", ",Object(b.b)("inlineCode",{parentName:"td"},"required"))))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Validaciones"),Object(b.b)("th",{parentName:"tr",align:null},"C\xf3digo de respuesta"),Object(b.b)("th",{parentName:"tr",align:null},"C\xf3digo de mensaje"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Si la tarjeta no se encuentra."),Object(b.b)("td",{parentName:"tr",align:null},"404"),Object(b.b)("td",{parentName:"tr",align:null},"card_not_found")))),Object(b.b)("h4",{id:"flujo-exitoso-7"},"Flujo Exitoso"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Se obtiene la tarjeta de los m\xe9todos de pago del usuario."),Object(b.b)("li",{parentName:"ol"},"Se invoca el m\xe9todo de cliente ",Object(b.b)("inlineCode",{parentName:"li"},"defaultSource")," y se env\xeda el id de la tarjeta.")),Object(b.b)("h3",{id:"eliminar-m\xe9todo-de-pago"},"Eliminar m\xe9todo de pago"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"DELETE /api/lawyer/payment_methods/:id")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Authorization: Customer")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Content-Type: : application/json")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Request")),Object(b.b)("p",null,"Permite eliminar un m\xe9todo de pago del cliente."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Response: 200 Ok")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Validaciones"),Object(b.b)("th",{parentName:"tr",align:null},"C\xf3digo de respuesta"),Object(b.b)("th",{parentName:"tr",align:null},"C\xf3digo de mensaje"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Si el usuario no est\xe1 dado de alta en Stripe."),Object(b.b)("td",{parentName:"tr",align:null},"412"),Object(b.b)("td",{parentName:"tr",align:null},"must_be_in_stripe")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Si no se encuentra el m\xe9todo de pago"),Object(b.b)("td",{parentName:"tr",align:null},"404"),Object(b.b)("td",{parentName:"tr",align:null},"card_not_found")))),Object(b.b)("h4",{id:"flujo-exitoso-8"},"Flujo Exitoso"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Invoca el m\xe9todo de ",Object(b.b)("inlineCode",{parentName:"li"},"deleteSource")," de Stripe con el id de usuario y el id del m\xe9todo de pago.")),Object(b.b)("h2",{id:"planes"},"Planes"),Object(b.b)("h3",{id:"obtener-planes-de-suscripci\xf3n"},"Obtener planes de suscripci\xf3n"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"GET /api/plans")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Authorization: Customer")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Content-Type: : application/json")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Request")),Object(b.b)("p",null,"Permite obtener los planes de suscripci\xf3n disponibles en la plataforma."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Response: 200 Ok")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'  {\n    "plans": [\n      {\n        _id: "2346234j62346",\n        name: "Plan basico",\n        description: "Hasta 20 usuarios, 30GB de almacenamiento, Casos ilimitados, integraci\xf3n con Calendar, env\xedo de recordatorios"\n        maxUsersPerOrg: 20,\n        trialPeriodInDays: 7,\n        paymentSchemas: [\n          {\n            _id: "sdfsdf8sdfbsdfn8",\n            priceInCents: 30000,\n            recurrence: "monthly"\n          }\n        ]\n      },\n      {...},\n      {...}\n    ]\n  }\n')),Object(b.b)("p",null,"::: note"),Object(b.b)("p",null,"Los planes se deben asociar a objetos Product en Stripe, mientras que los esquemas son obetos de tipo Price."),Object(b.b)("h4",{id:"flujo-exitoso-9"},"Flujo Exitoso"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Se obtienen los planes de suscripci\xf3n actuales.")))}d.isMDXComponent=!0}}]);