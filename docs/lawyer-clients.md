---
id: abogado-clientes
title: Métodos de abogado - Clientes
---

## Clientes

### Crear un nuevo cliente

> `POST /api/lawyer/client`

> Authorization: Customer

> Content-Type: application/json

> Request

```javascript
{
  "fullName": "Francisco Javier Marquez",
  "email": "alyavasa@example.com",
  "gender": "male",
  "type": "natural",
  "phone": {
          "phone": "5535244272",
          "type": "mobile"
          },
  "phones": [
      {
          "phone": "5535244272",
          "type": "mobile"
      }
  ],
  "address": "Avenida Tamaulipas 1266 Corpus Christy",
  "notes": "Hombre con problemas mentales"
}
```

> Response: 201 Created

```javascript
{
  "client": {
    "_id": "5c86ec24eb1b692e049cb918",
    "email": "alyavasa@example.com",
    "gender": "male",
    "type": "natural",
    "phone": {
          "phone": "5535244272",
          "type": "mobile"
          },
    "phones": [
        {
            "phone": "5535244272",
            "type": "mobile"
        }
    ],
    "address": "Avenida Tamaulipas 1266 Corpus Christy",
    "notes": "Hombre con problemas mentales"
  }
}
```

Atributo | Validaciones
---------- | -------
fullName | ``string``, ``min:3``, ``max:150``, ``required``
email  | ``string``, ``email``, ``required``
gender  | ``string``, ``(male,female)``, ``required``
type  | ``string``, ``(natural,legal)``, ``required``
phones  | ``array``, ``string``, ``required``
address  | ``string``, ``min:3``, ``max:150``, ``optional``
notes  | ``string``, ``min:3``, ``max:150``, ``optional``

Validaciones | Código de respuesta | Código de mensaje
---------- | ------------------ | -----------
Si el correo ya está registrado como usuario (cualquier modalidad) | 409 | email_in_use
Si el género es distinto a las opciones | 409 | gender_not_valid
Si el tipo de cliente es distinto a las opciones | 409 | type_not_valid
Si existen numeros telefonicos repetidos | 400 | duplicate_phone

#### Flujo Exitoso

1. Se crea un objeto **Client** con la información recibida.

### Obtener clientes

  Permite obtener los clientes que han sido dado de alta en la plataforma. 

> `GET /api/lawyer/client`

> Authorization: Customer

> Content-Type: application/json



Este método acepta las siguientes consultas:

Campo | Tipo de dato | Significado
----- | ------- | ---------
limit  | ``integer`` | Número de resultados a traer a partir del offset, 5 por defecto.
offset  | ``integer`` | Número de resultados a partir del cual se devolverán al usuario que realiza la petición, 0 por defecto.
search  | ``string`` | Cadena de texto para realizar busquedda nombre o por correo

> Response: 200 Ok

```json
{
  "clients": [
    {
      "id": "5c86ec24eb1b692e049cb918",
      "fullName": "Francisco Zamora",
      "email": "krmirandas@gmail.com",
      "phone": "5535244272",
      "cases": 3
    }
  ]
}
```

### Obtener cliente por identificador

  Permite consultar la información de un cliente por identificador

> `GET /api/lawyer/client/:id`

> Authorization: Customer

> Content-Type: application/json

> Response: 200 Ok

```json
{
  "id": "5c86ec24eb1b692e049cb918",
  "fullName": "Francisco Zamora",
  "email": "krmirandas@gmail.com",
  "phone": {
          "phone": "5535244272",
          "type": "mobile"
          },
  "type": "natural",
  "address": "Avenida tamaulias #1266, Corpus Christy",
  "phones": [
    {
          "phone": "5535244272",
          "type": "mobile"
          }
    ],
  "notes": "Su esposa lo dejo por alcoholico y tiene una demanada",
  "cases": 3  
}
```