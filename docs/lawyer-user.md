---
id: abogado-usuarios
title: Métodos de abogado - Personal
---

## Personal

### Crear un nuevo usuario

> `POST /api/lawyer/user`

> Authorization: Customer

> Content-Type: application/json

> Request

```javascript
{
  "name": "Francisco Javier",
  "lastName": "Marquez",
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
name | ``string``, ``min:3``, ``max:150``, ``required``
lastName | ``string``, ``min:3``, ``max:150``, ``required``
email  | ``string``, ``email``, ``required``

Validaciones | Código de respuesta | Código de mensaje
---------- | ------------------ | -----------
Si el correo ya está registrado como usuario (cualquier modalidad) | 409 | email_in_use

#### Flujo Exitoso

4. Se crea un objeto **User** con la información recibida.
5. Se crea el usuario en firebase con reclamaciones de lawyer.
6. Se envía un correo de bienvenida al usuario recién registrado con el cual podrá establecer su contraseña.
