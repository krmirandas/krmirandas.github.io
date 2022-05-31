---
id: abogado-alertas
title: Métodos de abogado - Alertas
---

## Alertas

### Agregar alerta

> `POST /api/lawyer/alert`

> Authorization: Customer

> Content-Type: application/json

> Authorization: Superadmin

> Content-Type: application/json

> Request

```javascript
{
  "name": "Cita en el juzgado",
  "scheduledTo": 1619509120495,
  "priority": "high"
}
```

> Response: 201 Created

```javascript
{}
```

Atributo | Validaciones
---------- | -------
name | ``string``, ``min:3``, ``max:150``, ``required``
scheduledTo  | ``timestamp``, ``Tiempo en milisegundos``, ``required``
prority  | ``string``, ``(high/medium/low)``, ``required``

Validaciones | Código de respuesta | Código de mensaje
---------- | ------------------ | -----------
Si `scheduleTo` es menor a la fecha actual | 422 | invalid_date

#### Flujo Exitoso

1. Se crea un objeto **Alert** con la información recibida.

## `[GET]` Obtener alertas programadas por mes y año

> `GET api/lawyer/alert/:month/:year`

> Authorization: Customer

> Content-Type: : application/json


Permite obtener .


> Response: 200 Ok

```javascript

{
    {
        1: [ 
            {
                _id: "5c86ec24eb1b692e049cb918", 
                scheduleTo: 1619855782000, 
                name: "Cita en el juzgado", 
                priority: 'low'
            }, 
            {
                _id: "5c86ec24eb1b692e049cb918", 
                scheduleTo: 1619855783000, 
                name: "Dcumentacion", 
                priority: 'low'
            }, 
            {
                _id: "5c86ec24eb1b692e049cb918", 
                scheduleTo: 1619855784000, 
                name: "Cita en el juzgado", 
                priority: 'low'
            }
        ],
        2: : 
        [ 
            {
                _id: "5c86ec24eb1b692e049cb918", 
                scheduleTo: 1619855784000, 
                name: "Cita en el juzgado", 
                priority: 'low'
                } 
            ],
        ...
        }
}
```

#### Flujo exitoso

1. Obtiene las alertas agrupadas por día

Ejemplo de código:

```js
let groups = _.groupBy(occurences, function (date) {
  return moment(date).startOf('day').format();
});
// {
//   '2021-05-01T00:00:00-05:00': [ 1619855782000, 1619855783000, 1619855784000 ],
//   '2021-05-02T00:00:00-05:00': [ 1619942184000 ],
//   '2021-06-02T00:00:00-05:00': [ 1622620584000 ]
// }

```

```js
db.collection.find({ $expr: { $and: [ { "$eq": [ { "$month": "$date" }, 3 ] }, { "$eq": [ { "$year": "$date" }, 2020 ] } ] } })
```
