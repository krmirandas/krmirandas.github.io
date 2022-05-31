---
id: intro
title: Desarrollo de Línea Legal
sidebar_label: General
slug: /
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Stack tecnológico

### Node

<img alt="node js" src={useBaseUrl('img/node_logo.svg')} />

Es un entorno de ejecución de Javascript asíncrono en la capa del servidor. Está basado en el motor V8
de Google.

La versión que se usará de Node es la 12.15.0.

Se deberá utilizar al máximo las funcionalidades que ofrece actualmente Node como son:

* Async/Await
* Encadenamiento de Promesas
* Destructuración
* Funciones flecha
* Interpolación de cadenas (Template String)
* Let y Const sobre Var
* Iteradores
* Módulos

Para una lista completa de las funcionalidades que ofrece ES6, revisar [este enlace](https://github.com/lukehoban/es6features).

### Sails JS

<img alt="sails js" src={useBaseUrl('img/sails_logo.png')} />

Sails JS es un framework de desarrollo basado en Express JS, el cual está basado en el modelo MVC y permite realizar aplicaciones web completas (SSR).
Para nuestro caso de uso, solo utilizaremos modelos y controladores dado que se desarrollará un API de tipo REST. La documentación completa se encuentra [aquí](https://sailsjs.com/documentation/reference).

La versión que se usará de Sails JS es la 1.2.5.

### React JS

<!-- <img alt="react js" src={useBaseUrl('img/react_logo.png')} /> -->

React JS es una biblioteca de javascript de SPA's, que permite crear aplicaciones interactivas de lado del cliente. La forma de trabajo se basa en la creación
de componentes encapsulados, que en conjunto forman una aplicación completa. La documentación de React se encuentra [aquí](https://es.reactjs.org/docs/getting-started.html).

La versión que se usará de React JS es la 17.0.1.

### MongoDB

<!-- <img alt="mongo db" src={useBaseUrl('img/mongo_logo.png')} />

<img alt="mongoose js" src={useBaseUrl('img/mongoose_logo.png')} /> -->

MongoDB es una base de datos NOSQL que trabaja sobre Documentos, debido a las funcionalidades y requerimientos del sistema, el esquema de trabajo más flexible de
Mongo se adapta mejor a nuestras necesidades. Para realizar la interfaz entre Mongo y Javascript, usaremos el [ODM Mongoose](https://mongoosejs.com/docs/guide.html).

La versión que se usará de Mongo es la 4.2.2.
La versión que se usará de Mongoose es la 5.7.1.

## Diagrama del sistema

<img alt="Diagrama del sistema" src={useBaseUrl('img/architecture.png')} />

## Repositorios

| Descripción | URL |
| :------------- | :------------- |
| Contenedor del proyecto | https://gitlab.com/linea-legal |
| Backend | https://gitlab.com/linea-legal/linea-legal-core |
| Frontend | https://gitlab.com/linea-legal/linea-legal-admin |
| Commons | https://gitlab.com/linea-legal/linea-legal-commons |
| Specs | https://gitlab.com/linea-legal/linea-legal-specs |

## Manejo de Git

Cada proyecto, salvo specs, contará con 3 ramas protegidas **development**, **staging** y **production**.
Estas ramas corresponden al estado de avance de cada conjunto de funcionalidades respecto al ambiente.

El proceso para agregar funcionalidad o corregir algún detalle será el siguiente:

1. Se notificará al equipo la tarea que se tomará.
2. Se obtiene la última versión del ambiente en el cual se trabajará.
3. Se crea una rama a partir de la última versión.
4. Se suben los cambios a git, indicando en el mensaje de commit la tarea que se realizo.
5. Se propone un **merge request** y se comparte para su revisión.
6. En caso de que se agreguen más features a la rama objetivo, habrá que hacer **rebase** para mantener una historia ordenada.

:::note

El flujo de trabajo está basado en el estandar de Git Flow, para mayor referencia de este marco de trabajo, [hacer clic aquí](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow).
