---
id: abogado-dashboard
title: Métodos de abogado - Inicio
---

## Expedientes

### Obtener las expedientes más recientes

> `GET /api/lawyer/cases/latest`

> Authorization: Customer

> Content-Type: application/json

Permite obtiene los casos más actuales de el cliente, ordenados por fecha de actualización. 

Este método acepta las siguientes consultas:

Campo | Tipo de dato | Significado
----- | ------- | ---------
limit  | ``integer`` | Número de resultados a traer a partir del offset, 5 por defecto.
offset  | ``integer`` | Número de resultados a partir del cual se devolverán al usuario que realiza la petición, 0 por defecto.

> Response: 200 Ok

```json
{
    "_id": "5c86ec24eb1b692e049cb918",
    "fileNumber": "5757",
    "name": "Despido con causa",
    "client": "Francisco Gil",
    "updatedAt": "1617768987809",
    "date": "1617768987809",
    "responsibles": [
        {
            "_id": "5c86ec24eb1b692e049cb918",
            "initials": "JM"
        }
    ]
}
```

#### Flujo Exitoso

1. Obtiene los casos más actuales de el cliente, aplicando los filtros y la paginación necesaria.

Ejemplo de código:

```js
const nameString = "Jose Miguel" 
const fullName = nameString.split(' ');
const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
return initials.toUpperCase(); 
// JM
```

### Obtener los pendientes de hoy

> `GET /api/lawyer/outstanding/today`

> Authorization: Customer

> Content-Type: application/json

Permite obtiene los pendientes del día en curso de el cliente, ordenados por la fecha más cercana. 

Este método acepta las siguientes consultas:

Campo | Tipo de dato | Significado
----- | ------- | ---------
limit  | ``integer`` | Número de resultados a traer a partir del offset, 5 por defecto.
offset  | ``integer`` | Número de resultados a partir del cual se devolverán al usuario que realiza la petición, 0 por defecto.

> Response: 200 Ok

```json
{
    "id": "5c86ec24eb1b692e049cb918",
    "fileNumber": "5757",
    "caseName": "Pelea por casa",
    "alertName": "Cita con juzgado 03",
    "createdBy": "Albert Camus"
}
```

#### Flujo Exitoso

1. Obtiene los pendientes más actual de el cliente, aplicando los filtros y la paginación necesaria.

### Obtener los pendientes de la semana

> `GET /api/lawyer/outstanding/week`

> Authorization: Customer

> Content-Type: application/json

Permite obtiene los pendientes de la semana en curso de el cliente (omitiendo los de el día actual), ordenados por la fecha más cercana. 

Este método acepta las siguientes consultas:

Campo | Tipo de dato | Significado
----- | ------- | ---------
limit  | ``integer`` | Número de resultados a traer a partir del offset, 5 por defecto.
offset  | ``integer`` | Número de resultados a partir del cual se devolverán al usuario que realiza la petición, 0 por defecto.

> Response: 200 Ok

```json
{
    "id": "5c86ec24eb1b692e049cb918",
    "fileNumber": "5751",
    "alertCase": "Pelea en la calle",
    "alertName": "Cita con juzgado 04",
    "createdBy": "Jorge Ortiz"
}
```

#### Flujo Exitoso

1. Obtiene los pendientes más actual de el cliente, aplicando los filtros y la paginación necesaria.

### Obtener los pendientes por venir

> `GET /api/lawyer/outstanding/last`

> Authorization: Customer

> Content-Type: application/json

Permite obtiene los pendientes en curso de el cliente (ignorando la semana actual), ordenados por fecha de actualización. 

Este método acepta las siguientes consultas:

Campo | Tipo de dato | Significado
----- | ------- | ---------
limit  | ``integer`` | Número de resultados a traer a partir del offset, 5 por defecto.
offset  | ``integer`` | Número de resultados a partir del cual se devolverán al usuario que realiza la petición, 0 por defecto.

> Response: 200 Ok

```json
{
    "id": "5c86ec24eb1b692e049cb918",
    "fileNumber": "5757",
    "alertCase": "Orina en vía publica",
    "alertName": "Cita con juzgado 06",
    "createdBy": "Memo Aponte"
}
```

#### Flujo Exitoso

1. Obtiene los pendientes más actual de el cliente, aplicando los filtros y la paginación necesaria.
