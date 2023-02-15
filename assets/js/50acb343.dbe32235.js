"use strict";(self.webpackChunklinea_legal_specs=self.webpackChunklinea_legal_specs||[]).push([[5646],{6762:(e,a,t)=>{t.r(a),t.d(a,{Notice:()=>u,assets:()=>c,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var o=t(7462),l=(t(7294),t(3905)),n=t(1528);const i={id:"s3",title:"S3"},r=void 0,p={unversionedId:"s3",id:"s3",title:"S3",description:"Almacenamiento de archivos",source:"@site/docs/S3.md",sourceDirName:".",slug:"/s3",permalink:"/docs/s3",draft:!1,tags:[],version:"current",frontMatter:{id:"s3",title:"S3"},sidebar:"someSidebar",previous:{title:"Notificaciones",permalink:"/docs/notifications"},next:{title:"Metodos de Pago",permalink:"/docs/stripe"}},c={},s=[{value:"Almacenamiento de archivos",id:"almacenamiento-de-archivos",level:2},{value:"<code>[POST]</code> Subir archivo del S3",id:"post-subir-archivo-del-s3",level:3},{value:"Flujo exitoso",id:"flujo-exitoso",level:4},{value:"<code>[GET]</code> Obtener archivo del S3",id:"get-obtener-archivo-del-s3",level:3},{value:"Flujo exitoso",id:"flujo-exitoso-1",level:4}],u=e=>{let{children:a,type:t,title:o}=e;return(0,l.kt)("div",{class:`notice ${t}`},(0,l.kt)("p",null,(0,l.kt)("span",{class:"span-notice"},(0,l.kt)(n.UMi,{mdxType:"CgDanger"})," ",o)),a)},d={toc:s,Notice:u},m="wrapper";function k(e){let{components:a,...t}=e;return(0,l.kt)(m,(0,o.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"almacenamiento-de-archivos"},"Almacenamiento de archivos"),(0,l.kt)("h3",{id:"post-subir-archivo-del-s3"},(0,l.kt)("inlineCode",{parentName:"h3"},"[POST]")," Subir archivo del S3"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"/api/uploads"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Authorization: Superadmin, Lawyer, Owner")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Content-Type: : application/json")),(0,l.kt)("p",null,"Permite obtener una url prefirmada para subir un archivo al almacenamiento del S3."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  type: 'image/png',\n  prefix: 'profile'\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response: 200 Ok")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  key: '0LVxTDAum5APMcmuo7fjX',\n  url: 'https://linea-legal-test.sfo3.digitaloceanspaces.com/uploads/materials/0LVxTDAum5APMcmuo7fjX?Content-Type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=PGYITQNR6KBVLZWCKQQI%2F20210722%2Fsfo3%2Fs3%2Faws4_request&X-Amz-Date=20210722T172923Z&X-Amz-Expires=300&X-Amz-Signature=3590a6c350e36b344fc4b5531d3547d4b5a28d242f5c8f1bd76ab6a36f666b3e&X-Amz-SignedHeaders=host%3Bx-amz-acl&x-amz-acl=private'\n}\n")),(0,l.kt)("h4",{id:"flujo-exitoso"},"Flujo exitoso"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Obtiene una url prefirmada para cargar el archivo.")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Se debe agregar el header 'x-amz-acl': 'private' o 'public-read' a la petici\xf3n de subida, debido a restricciones del proveedor actual de almacenamiento.")),(0,l.kt)("h3",{id:"get-obtener-archivo-del-s3"},(0,l.kt)("inlineCode",{parentName:"h3"},"[GET]")," Obtener archivo del S3"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"/api/uploads"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Authorization: Superadmin, Lawyer, Owner")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Content-Type: : application/json")),(0,l.kt)("p",null,"Permite obtener una url prefirmada para subir un archivo al almacenamiento del S3."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  type: 'application/pdf',\n  prefix: 'materials'\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response: 200 Ok")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  key: '0LVxTDAum5APMcmuo7fjX',\n  url: 'https://linea-legal-test.sfo3.digitaloceanspaces.com/uploads/materials/0LVxTDAum5APMcmuo7fjX?Content-Type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=PGYITQNR6KBVLZWCKQQI%2F20210722%2Fsfo3%2Fs3%2Faws4_request&X-Amz-Date=20210722T172923Z&X-Amz-Expires=300&X-Amz-Signature=3590a6c350e36b344fc4b5531d3547d4b5a28d242f5c8f1bd76ab6a36f666b3e&X-Amz-SignedHeaders=host%3Bx-amz-acl&x-amz-acl=private'\n}\n")),(0,l.kt)("h4",{id:"flujo-exitoso-1"},"Flujo exitoso"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Obtiene una url prefirmada para cargar el archivo.")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Se debe agregar el header 'x-amz-acl': 'private' o 'public-read' a la petici\xf3n de subida, debido a restricciones del proveedor actual de almacenamiento.")))}k.isMDXComponent=!0}}]);