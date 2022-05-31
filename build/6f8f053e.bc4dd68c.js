(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{116:function(e,n,a){"use strict";a.d(n,"a",(function(){return b})),a.d(n,"b",(function(){return u}));var r=a(0),i=a.n(r);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,i=function(e,n){if(null==e)return{};var a,r,i={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),d=function(e){var n=i.a.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},b=function(e){var n=d(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var a=e.components,r=e.mdxType,t=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(a),m=r,u=b["".concat(c,".").concat(m)]||b[m]||p[m]||t;return a?i.a.createElement(u,o(o({ref:n},s),{},{components:a})):i.a.createElement(u,o({ref:n},s))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=a.length,c=new Array(t);c[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<t;s++)c[s]=a[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return c})),a.d(n,"metadata",(function(){return o})),a.d(n,"toc",(function(){return l})),a.d(n,"default",(function(){return d}));var r=a(3),i=a(7),t=(a(0),a(116)),c={id:"models",title:"Modelos"},o={unversionedId:"models",id:"models",isDocsHomePage:!1,title:"Modelos",description:"PlatformAdmin",source:"@site/docs/models.md",slug:"/models",permalink:"/docs/models",version:"current",sidebar:"someSidebar",previous:{title:"C\xf3digos",permalink:"/docs/httpcodes"},next:{title:"Diagramas de Usuario",permalink:"/docs/diagrams"}},l=[{value:"PlatformAdmin",id:"platformadmin",children:[{value:"Descripci\xf3n",id:"descripci\xf3n",children:[]},{value:"Consideraciones",id:"consideraciones",children:[]}]},{value:"User",id:"user",children:[{value:"Descripci\xf3n",id:"descripci\xf3n-1",children:[]},{value:"Consideraciones",id:"consideraciones-1",children:[]}]},{value:"Organization",id:"organization",children:[{value:"Descripci\xf3n",id:"descripci\xf3n-2",children:[]},{value:"Consideraciones",id:"consideraciones-2",children:[]}]},{value:"Payment History",id:"payment-history",children:[{value:"Descripci\xf3n",id:"descripci\xf3n-3",children:[]},{value:"Consideraciones",id:"consideraciones-3",children:[]}]},{value:"Case",id:"case",children:[{value:"Descripci\xf3n",id:"descripci\xf3n-4",children:[]},{value:"Consideraciones",id:"consideraciones-4",children:[]}]},{value:"Board",id:"board",children:[{value:"Descripci\xf3n",id:"descripci\xf3n-5",children:[]},{value:"Consideraciones",id:"consideraciones-5",children:[]}]},{value:"Plan",id:"plan",children:[{value:"Descripci\xf3n",id:"descripci\xf3n-6",children:[]},{value:"Consideraciones",id:"consideraciones-6",children:[]}]},{value:"Client",id:"client",children:[{value:"Descripci\xf3n",id:"descripci\xf3n-7",children:[]},{value:"Consideraciones",id:"consideraciones-7",children:[]}]},{value:"Alerts",id:"alerts",children:[{value:"Descripci\xf3n",id:"descripci\xf3n-8",children:[]},{value:"Consideraciones",id:"consideraciones-8",children:[]}]}],s={toc:l};function d(e){var n=e.components,a=Object(i.a)(e,["components"]);return Object(t.b)("wrapper",Object(r.a)({},s,a,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h2",{id:"platformadmin"},"PlatformAdmin"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-yaml"},"_id: ObjectId\nuid: string\nemail: string\nfullName: string\n")),Object(t.b)("h3",{id:"descripci\xf3n"},"Descripci\xf3n"),Object(t.b)("p",null,"La entidad ",Object(t.b)("em",{parentName:"p"},"PlatformAdmin")," representa a los administradores de la plataforma."),Object(t.b)("h3",{id:"consideraciones"},"Consideraciones"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"El nombre debe cumplir con la expresi\xf3n regular ",Object(t.b)("em",{parentName:"li"},"alphanumeric_extended"),", con una extensi\xf3n entre 3 y 250 caracteres."),Object(t.b)("li",{parentName:"ol"},"El uid es el identificador del usuario en firebase."),Object(t.b)("li",{parentName:"ol"},"El correo debe cumplir con la expresi\xf3n regular ",Object(t.b)("em",{parentName:"li"},"email_regex"),".")),Object(t.b)("h2",{id:"user"},"User"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-yaml"},"_id: ObjectId\nname: string\nlastName: string\nemail: string\nuid: string\nimage: string\nphone: string\nbirthday: timestamp\norganization: ObjectId\n")),Object(t.b)("h3",{id:"descripci\xf3n-1"},"Descripci\xf3n"),Object(t.b)("p",null,"La entidad ",Object(t.b)("em",{parentName:"p"},"User")," representa a los abogados."),Object(t.b)("h3",{id:"consideraciones-1"},"Consideraciones"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"El nombre debe cumplir con la expresi\xf3n regular ",Object(t.b)("em",{parentName:"li"},"alphanumeric_extended"),", con una extensi\xf3n entre 3 y 250 caracteres."),Object(t.b)("li",{parentName:"ol"},"El apellido debe cumplir con la expresi\xf3n regular ",Object(t.b)("em",{parentName:"li"},"alphanumeric_extended"),", con una extensi\xf3n entre 2 y 250 caracteres."),Object(t.b)("li",{parentName:"ol"},"El uid es el identificador del usuario en firebase."),Object(t.b)("li",{parentName:"ol"},"El correo debe cumplir con la expresi\xf3n regular ",Object(t.b)("em",{parentName:"li"},"email_regex"),"."),Object(t.b)("li",{parentName:"ol"},"La imagen del usuario es su foto de perfil."),Object(t.b)("li",{parentName:"ol"},"El tel\xe9fono del usuario debe cumplir la validaci\xf3n ",Object(t.b)("em",{parentName:"li"},"international_phone_format"),"."),Object(t.b)("li",{parentName:"ol"},"Los usuarios deben tener una fecha de nacimiento."),Object(t.b)("li",{parentName:"ol"},"Los usuarios pueden no pertenecer a una organizaci\xf3n, pero deben pertenecer a una para poder realizar acciones.")),Object(t.b)("h2",{id:"organization"},"Organization"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-yaml"},"_id: ObjectId\nname: string\ncreatedAt: timestamp\nlogo: string\ntimezone: string\npaymentStatus: enum\nsubscriptionSchema:\n  - isFreeTrial: boolean\n    trialExpiresAt: timestamp\n    priceInCents: number\n    recurrence: string\n    nextPaymentDue: timestamp\n    maxUsersPerOrg: number\n    id: ObjectId\n    name: string\n    subscriptionId: string\nlastPaymentAt: timestamp\nstatus: enum\n\n")),Object(t.b)("h3",{id:"descripci\xf3n-2"},"Descripci\xf3n"),Object(t.b)("p",null,"La entidad ",Object(t.b)("em",{parentName:"p"},"Organization")," representa de forma abstracta a las marcas, buffetes o usuarios que utilizan el sistema de Linea Legal."),Object(t.b)("h3",{id:"consideraciones-2"},"Consideraciones"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"El nombre debe cumplir con la expresi\xf3n regular ",Object(t.b)("em",{parentName:"li"},"alphanumeric_extended"),", con una extensi\xf3n entre 3 y 250 caracteres."),Object(t.b)("li",{parentName:"ol"},"Toda organizaci\xf3n tiene una fecha de creaci\xf3n."),Object(t.b)("li",{parentName:"ol"},"La organizaci\xf3n puede tener un logotipo."),Object(t.b)("li",{parentName:"ol"},"Toda organizaci\xf3n requiere una zona horaria v\xe1lida, esto con el fin de mostrar las fechas en un formato legible para los usuarios."),Object(t.b)("li",{parentName:"ol"},"Toda organizaci\xf3n cuenta con un estado actual de pago del servicio, este estado puede ser: ACTIVE o PENDING."),Object(t.b)("li",{parentName:"ol"},"Toda organizaci\xf3n cuenta con un esquema de suscripci\xf3n, el cual debe tener la informaci\xf3n relevante del pago respecto al estado del plan al momento de su contrataci\xf3n."),Object(t.b)("li",{parentName:"ol"},"El esquema de pago tiene el valor ",Object(t.b)("em",{parentName:"li"},"isFreeTrial")," que indica si se est\xe1 en periodo de prueba o no."),Object(t.b)("li",{parentName:"ol"},"Se tiene una fecha de expiraci\xf3n del periodo de prueba."),Object(t.b)("li",{parentName:"ol"},"Se tiene el precio a pagar de acuerdo al monto establecido al momento de la contrataci\xf3n, el cual debe ser mayor o igual a 1000 ($10.00 MXN)."),Object(t.b)("li",{parentName:"ol"},"Se tiene la recurrencia de pago de acuerdo al plan elegido al momento de la contrataci\xf3n, puede ser MONTHLY o YEARLY."),Object(t.b)("li",{parentName:"ol"},"Se tiene la fecha en la que se intentar\xe1 el siguiente pago."),Object(t.b)("li",{parentName:"ol"},"Se tiene el m\xe1ximo n\xfamero de usuarios por organizaci\xf3n, debe ser mayor o igual a 1.")),Object(t.b)("h2",{id:"payment-history"},"Payment History"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-yaml"},"_id: ObjectId\npaidAt: timestamp\nexpiresAt: timestamp\nretries: number\nlast4: string\norganization: ObjectId\n")),Object(t.b)("h3",{id:"descripci\xf3n-3"},"Descripci\xf3n"),Object(t.b)("p",null,"La entidad ",Object(t.b)("em",{parentName:"p"},"Payment History")," nos permite llevar registros de los pagos realizados por los usuarios."),Object(t.b)("h3",{id:"consideraciones-3"},"Consideraciones"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"Todo movimiento debe tener una fecha de pago."),Object(t.b)("li",{parentName:"ol"},"Todo movimiento debe tener una fecha de expiraci\xf3n calculada acorde al plan."),Object(t.b)("li",{parentName:"ol"},"Todo movimiento debe tener el n\xfamero de intentos fallidos previo al \xe9xito de procesamiento."),Object(t.b)("li",{parentName:"ol"},"Todo movimiento debe contar con los \xfaltimos 4 d\xedgitos de la tarjeta mediante la cual realizaron el pago."),Object(t.b)("li",{parentName:"ol"},"Todo movimiento pertenece a una organizaci\xf3n.")),Object(t.b)("h2",{id:"case"},"Case"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-yaml"},"client: ObjectId\nfiles:\n  - fileNumber: string\n    reference: string\nadverseParty:\n  - name: string\n    address: string\n    phone: string\n    notes: string\nresponsable: ObjectId\npartyType: enum\npartySpecified: string\ntype: string\naction: string\njurisdiction: string\ncourt: string\ndecription: string\ndocuments:\n  - url: string\n    alias: string\n    type: enum\nboardParent: ObjectId\n")),Object(t.b)("h3",{id:"descripci\xf3n-4"},"Descripci\xf3n"),Object(t.b)("p",null,"La entidad ",Object(t.b)("em",{parentName:"p"},"Case")," es la entidad central del sistema pues modela los casos. Tiene la informaci\xf3n de la parte adversaria, un abogado responsable del caso,\ntipo de caso, parte, acci\xf3n, juzgado, jurisdicci\xf3n, cliente, n\xfamero de expediente, referencia, descripci\xf3n del caso y un equipo asignado."),Object(t.b)("h3",{id:"consideraciones-4"},"Consideraciones"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"Todo caso debe estar asociado a un cliente."),Object(t.b)("li",{parentName:"ol"},"Todo caso debe de llevar un parte."),Object(t.b)("li",{parentName:"ol"},"Un caso puede tener uno o m\xe1s n\xfamero de expedientes asociados."),Object(t.b)("li",{parentName:"ol"},"Un caso debe tener partes."),Object(t.b)("li",{parentName:"ol"},"Los juzgados as\xed como las jur\xedsdicciones deben cumplir con la expresi\xf3n regular ",Object(t.b)("em",{parentName:"li"},"alphanumeric_extended"),", con una extensi\xf3n entre 3 y 250 caracteres."),Object(t.b)("li",{parentName:"ol"},"La descripci\xf3n del caso debe cumplir con la expresi\xf3n regular ",Object(t.b)("em",{parentName:"li"},"alphanumeric_extended"),", con una extensi\xf3n entre 3 y 250 caracteres."),Object(t.b)("li",{parentName:"ol"},"Todo caso requiere de los datos de contacto de la parte contraria."),Object(t.b)("li",{parentName:"ol"},"El nombre de la parte contraria debe cumplir con la expresi\xf3n regular ",Object(t.b)("em",{parentName:"li"},"alphanumeric_extended"),", con una extensi\xf3n entre 3 y 100 caracteres."),Object(t.b)("li",{parentName:"ol"},"La direcci\xf3n de la parte contraria debe cumplir con la expresi\xf3n regular ",Object(t.b)("em",{parentName:"li"},"alphanumeric_extended"),", con una extensi\xf3n entre 10 y 250 caracteres."),Object(t.b)("li",{parentName:"ol"},"La parte contraria debe tener un tel\xe9fono de contacto, que debe cumplir con la validaci\xf3n ",Object(t.b)("em",{parentName:"li"},"international_phone_format"),"."),Object(t.b)("li",{parentName:"ol"},"La parte contraria puede tener notas asociadas, que deben cumplir con la validaci\xf3n ",Object(t.b)("em",{parentName:"li"},"alphanumeric_extended"),", con una extensi\xf3n entre 3 y 1000 caracteres."),Object(t.b)("li",{parentName:"ol"},"Todo caso debe tener un abogado responsable."),Object(t.b)("li",{parentName:"ol"},"Los casos pueden tener un equipo asignado, compuesto de usuarios de la misma organizaci\xf3n.")),Object(t.b)("h2",{id:"board"},"Board"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-yaml"},"_id: ObjectId\npositionRelativeToParent: enum:[next, up, down]\nstatus: enum:[active, paused, finished]\nname: string\ndescription: string\nslug: string\nparent: ObjectId references Board\ndocuments:\n  - ObjectId\ncurrentStatus: enum\npauseMessage: string\ndocuments:\n  - url: string\n    alias: string\n    type: enum\n")),Object(t.b)("h3",{id:"descripci\xf3n-5"},"Descripci\xf3n"),Object(t.b)("p",null,"La entidad ",Object(t.b)("em",{parentName:"p"},"Board")," modela las actuaciones dentro de un caso, contienen un nombre, descripci\xf3n, slug, la referencia al padre as\xed como la posici\xf3n\ncon respecto al mismo, contiene un arreglo de documentos, un status y un mensaje por pausa."),Object(t.b)("h3",{id:"consideraciones-5"},"Consideraciones"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"El nombre debe cumplir con la expresi\xf3n regular ",Object(t.b)("em",{parentName:"li"},"alphanumeric_extended"),", con una extensi\xf3n entre 3 y 100 caracteres."),Object(t.b)("li",{parentName:"ol"},"La descripci\xf3n debe cumplir con la expresi\xf3n regular ",Object(t.b)("em",{parentName:"li"},"alphanumeric_extended"),", con una extensi\xf3n entre 3 y 500 caracteres."),Object(t.b)("li",{parentName:"ol"},"El slug debe cumplir con la expresi\xf3n regular ",Object(t.b)("em",{parentName:"li"},"alphanumeric"),", con una extensi\xf3n entre 3 y 20 caracteres."),Object(t.b)("li",{parentName:"ol"},"La posici\xf3n relativa con el padre puede ser: NEXT, UP o DOWN."),Object(t.b)("li",{parentName:"ol"},"El parent es la referencia a la actuaci\xf3n anterior, puede ser nula en caso de ser la ra\xedz."),Object(t.b)("li",{parentName:"ol"},"Los documentos son un arreglo d referencias al modelo ",Object(t.b)("em",{parentName:"li"},"File"),"."),Object(t.b)("li",{parentName:"ol"},"Los status que puede tomar una actuaci\xf3n son: ACTIVE, PAUSED y FINISHED."),Object(t.b)("li",{parentName:"ol"},"El mensaje de pausa debe cumplir con la expresi\xf3n regular ",Object(t.b)("em",{parentName:"li"},"alphanumeric_extended"),", con una extensi\xf3n entre 3 y 200 caracteres.")),Object(t.b)("h2",{id:"plan"},"Plan"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-yaml"},"_id: ObjectId\nname: string\ndescription: string\nmaxUsersPerOrg: number\ntrialPeriodInDays: number\npaymentSchemas:\n  - priceInCents: number\n    recurrence: enum\n    productId: string\n")),Object(t.b)("h3",{id:"descripci\xf3n-6"},"Descripci\xf3n"),Object(t.b)("p",null,"La entidad ",Object(t.b)("em",{parentName:"p"},"Plan")," contiene las restricciones sobre el uso que le puede dar un grupo de usuarios en una organizaci\xf3n, as\xed como el precio\ny la recurrencia de pago."),Object(t.b)("h3",{id:"consideraciones-6"},"Consideraciones"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"El nombre debe cumplir con la expresi\xf3n regular ",Object(t.b)("em",{parentName:"li"},"alphanumeric_extended"),", con una extensi\xf3n entre 3 y 100 caracteres."),Object(t.b)("li",{parentName:"ol"},"La descripci\xf3n debe cumplir con la expresi\xf3n regular ",Object(t.b)("em",{parentName:"li"},"alphanumeric_extended"),", con una extensi\xf3n entre 3 y 500 caracteres."),Object(t.b)("li",{parentName:"ol"},"El n\xfamero m\xe1ximo de usuarios debe ser mayor a 1."),Object(t.b)("li",{parentName:"ol"},"El n\xfamero de d\xedas de prueba gratis debe ser mayor o igual a 0."),Object(t.b)("li",{parentName:"ol"},"Debe haber al menos un esquema de pago."),Object(t.b)("li",{parentName:"ol"},"Los esquemas de pago deben tener un precio mayor o igual a 1000 ($10.00 MXN)."),Object(t.b)("li",{parentName:"ol"},"La recurrencia de pago puede ser: MONTHLY o YEARLY.")),Object(t.b)("h2",{id:"client"},"Client"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-yaml"},"_id: ObjectId\nfullname: string\nemail: string\ngender: enum\ntype: enum\nphones:\n  - value: string\n    type: string\nnotes: string\n")),Object(t.b)("h3",{id:"descripci\xf3n-7"},"Descripci\xf3n"),Object(t.b)("p",null,"La entidad ",Object(t.b)("em",{parentName:"p"},"Client")," modela a los clientes de la organizaci\xf3n, contiene datos b\xe1sicos como nombre completo, correo electr\xf3nico, genero,\ntipo de cliente, tel\xe9fonos y notas sobre el cliente."),Object(t.b)("h3",{id:"consideraciones-7"},"Consideraciones"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"El nombre debe cumplir con la expresi\xf3n regular ",Object(t.b)("em",{parentName:"li"},"alphanumeric_extended"),"."),Object(t.b)("li",{parentName:"ol"},"El correo debe cumplir con la expresi\xf3n regular ",Object(t.b)("em",{parentName:"li"},"email_regex"),"."),Object(t.b)("li",{parentName:"ol"},"El genero puede tener los valores: MALE, FEMALE y N/A."),Object(t.b)("li",{parentName:"ol"},"El tipo de cliente puede ser:."),Object(t.b)("li",{parentName:"ol"},"Cada tel\xe9fono debe tener un n\xfamero v\xe1lido y el tipo de tel\xe9fono."),Object(t.b)("li",{parentName:"ol"},"El n\xfamero de tel\xe9fono debe cumplir la validaci\xf3n ",Object(t.b)("em",{parentName:"li"},"international_phone_format"),"."),Object(t.b)("li",{parentName:"ol"},"El tipo de tel\xe9fono puede ser: PERSONAL, OFFICE y CORPORATE."),Object(t.b)("li",{parentName:"ol"},"LAs notas deben cumplir la expresi\xf3n regular ",Object(t.b)("em",{parentName:"li"},"alphanumeric_extended"),", con una extensi\xf3n m\xe1xima de 2500 caracteres.")),Object(t.b)("h2",{id:"alerts"},"Alerts"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-yaml"},"_id: ObjectId\nname: string\ndate: timestamp\nhour: string\npriority: enum\ncreatedBy: ObjectId\ninvitees:\n  - ObjectId\nboard: ObjectId\n")),Object(t.b)("h3",{id:"descripci\xf3n-8"},"Descripci\xf3n"),Object(t.b)("p",null,"La entidad alerts modela las alertas que se visualizan en el calendario de los usuarios, estas alertas tienen un nombre, prioridad, fecha y hora,\nusuarios interesados y un usuario creador."),Object(t.b)("h3",{id:"consideraciones-8"},"Consideraciones"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"Una alerta puede ser global (de calendario) o pertenecer a una actuaci\xf3n."),Object(t.b)("li",{parentName:"ol"},"Las alertas siempre tienen creador (usuario)."),Object(t.b)("li",{parentName:"ol"},"Las alertas deben tener una fecha y hora, dada por la zona horaria de la organizaci\xf3n (se almacenar\xe1n en UTC)."),Object(t.b)("li",{parentName:"ol"},"Si la alerta es global, se debe elegir a los interesados en recibirla en el arreglo de invitees."),Object(t.b)("li",{parentName:"ol"},"Si la alerta es de una actuaci\xf3n, llegar\xe1 a todos los usuarios asignados a la misma por defecto, aunque se pueden indicar los interesados."),Object(t.b)("li",{parentName:"ol"},"Las prioridades disponibles son: LOW, MEDIUM y HIGH."),Object(t.b)("li",{parentName:"ol"},"El nombre de una alerta debe hacer match con la expresi\xf3n regular ",Object(t.b)("em",{parentName:"li"},"alphanumeric"),", con una extensi\xf3n entre 5 y 150 caracteres.")))}d.isMDXComponent=!0}}]);