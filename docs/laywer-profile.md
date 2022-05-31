---
id: abogado-perfil
title: Métodos de abogado - Perfil
---

## Mi perfil

### Editar perfil

> `PUT /api/user/me`

> Authorization: Customer

> Content-Type: aplication/json

> Request

```javascript
{
    "name": "Jorge",
    "lastName": "Negrete",
    "email": "jorgenegrete@gmail.com",
}
```

> Response: 204 NoContent

Atributo | Validaciones
---------- | -------
name | ``string``, ``min:3``, ``max:150``, ``required``
lastName  | ``string``, ``min:3``, ``max:150``, ``required``
email  | ``string``, ``email``, ``required``
image  | ``object``,``optional``,

Validaciones | Código de respuesta | Código de mensaje
---------- | ------------------ | -----------
Si el correo ya está registrado como usuario (cualquier modalidad) | 409 | email_in_use

#### Flujo Exitoso

1. Se actualiza la información del usuario en base.
2. Se actualiza la información del usuario en firebase.
3. Si se actualizo el correo, se envía un correo al usuario con el cual podrá establecer su contraseña.

### Editar foto de perfil

> `PUT /api/user/me/image`

> Authorization: Customer

> Content-Type: aplication/json

> Request

```javascript
    
{
    "name": 'respuestas_pdf_marzo',
    "type": 'img'
}

```

> Response: 204 NoContent

Atributo | Validaciones
---------- | -------
name | ``string``, ``min:3``, ``required``
type  | ``string``, ``min:3``, ``required``

Validaciones | Código de respuesta | Código de mensaje
---------- | ------------------ | -----------
Si el correo ya está registrado como usuario (cualquier modalidad) | 409 | email_in_use

#### Flujo Exitoso

1. Se actualiza la información del usuario en base.