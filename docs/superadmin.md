---
id: superadmin
title: Métodos de superadmin
---

import '../src/css/notices.css';
import { CgDanger } from 'react-icons/cg';
export const Notice = ({children, type, title}) => (
  <div class={`notice ${type}`}>
  <p>
  <span class="span-notice">
  <CgDanger/> {title}
  </span>
  </p>
  {children}
  </div>
);

## `[GET]` Obtener usuarios de línea legal

> `/api/superadmin/users`

> Authorization: Superadmin

> Content-Type: : application/json


Permite obtener los usuarios registrados en línea legal, ordenados por fecha de registro. Es posible filtrarlos por estado, nombre o correo.

Este método acepta las siguientes consultas:

Campo | Tipo de dato | Significado
----- | ------- | ---------
limit  | ``integer`` | Número de resultados a traer a partir del offset, 25 por defecto.
offset  | ``integer`` | Número de resultados a partir del cual se devolverán al usuario que realiza la petición, 0 por defecto.
status  | ``string`` | Estado de los usuarios, puede ser active o inactive.
name  | ``string`` | Cadena sobre la cual se obtendrán los usuarios cuyo nombre coincida.
email  | ``string`` | Cadena sobre la cual se obtendrán los usuarios cuyo correo coincida.

> Response: 200 Ok

```javascript

{
  "pagination": {
    "offset": 0,
    "limit": 100,
    "count": 4
  },
  "users": [
    {
      "id": "8587575a567",
      "name": "Kevin Ricardo",
      "email": "kevin@miranda.com",
      "plan": "Basico",
      "lastPaymentAt": "2112-11-14T17:51:24.436Z",
      "status": "active"
    },
    ...
  ]
}
```

### Flujo exitoso

1. Obtiene a los usuarios de línea legal, aplicando los filtros y la paginación necesaria.

## `[POST]` Crear administrador

> `/api/superadmin`

> Authorization: Superadmin

> Content-Type: application/json

> Request

```javascript
{
  "fullName": "Francisco Javier Marquez",
  "email": "alyavasa@example.com"
}
```

> Response: 201 Created

```javascript
{
  "superadmin": {
    "_id": "5c86ec24eb1b692e049cb918",
    "fullName": "Francisco Javier Marquez",
    "email": "alyavasa@example.com"
  }
}
```

Atributo | Validaciones
---------- | -------
fullName | ``string``, ``min:3``, ``max:150``, ``required``
email  | ``string``, ``email``, ``required``

Validaciones | Código de respuesta | Código de mensaje
---------- | ------------------ | -----------
Si el correo ya está registrado como usuario (cualquier modalidad) | 409 | email_in_use

### Flujo Exitoso

1. Se crea un objeto **PlatformAdmin** con la información recibida.
2. Se crea el usuario en firebase con reclamaciones de superadmin.
3. Se envía un correo de bienvenida al usuario recién registrado con el cual podrá establecer su contraseña.

## `[GET]` Ver personal

> `/api/superadmin`

> Authorization: Superadmin

> Content-Type: application/json

> Request

Permite ver a todo el personal administrativo de línea legal.

Este método acepta las siguientes consultas:

Campo | Tipo de dato | Significado
----- | ------- | ---------
name  | ``string`` | Cadena sobre la cual se buscaran coincidencias con los nombres de los usuarios administradores

> Response: 200 Ok

```javascript
{
  "superadmins": [
    {
      "_id": "5c86ec24eb1b692e049cb918",
      "fullName": "Francisco Javier Marquez",
      "email": "alyavasa@example.com"
    },
    ...
  ]
}
```

### Flujo Exitoso

1. Se obtiene todo el personal administrativo de linea legal.

## `[DELETE]` Eliminar usuario administrativo

> `/api/superadmin/:id`

> Authorization: Superadmin

> Content-Type: application/json

> Request

Esta ruta permite eliminar un usuario administrativo.

> Response: 204 No Content

Validaciones | Código de respuesta | Código de mensaje
---------- | ------------------ | -----------
Si el usuario no se encuentra | 404 | not_found_superadmin

### Flujo Exitoso

1. Busca el usuario por id.
2. Elimina el usuario de firebase y posteriormente de la base de datos.

## `[PUT]` Editar usuario administrativo

> `/api/superadmin/:id`

> Authorization: Superadmin

> Content-Type: application/json

> Request

```javascript
{
  "fullName": "Francisco",
  "email": "alyavasa@example.com"
}
```

Esta ruta permite actualizar el nombre y correo del usuario administrativo.

> Response: 200 Ok

```javascript
{
  "superadmin": {
    "_id": "5c86ec24eb1b692e049cb918",
    "fullName": "Francisco Javier Marquez",
    "email": "alyavasa@example.com"
  }
}
```

Atributo | Validaciones
---------- | -------
fullName | ``string``, ``min:3``, ``max:150``
email  | ``string``, ``email``

Validaciones | Código de respuesta | Código de mensaje
---------- | ------------------ | -----------
Si el admin no se encuentra | 404 | admin_not_found
Si se actualiza el correo y ya está en uso | 409 | email_in_use

### Flujo Exitoso

1. Se busca el personal por id.
2. Se actualiza la información del usuario.
2. Si se actualizo el correo, se realiza el cambio en firebase y se envía el correo de confirmación.
