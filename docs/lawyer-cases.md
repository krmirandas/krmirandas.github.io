---
id: abogado-casos
title: Métodos de abogado - Casos
---

## Casos

### Obtener los casos

> `GET /api/lawyer/cases`

> Authorization: Customer

> Content-Type: application/json

Permite obtener los casos ordenados por última actualización

Este método acepta las siguientes consultas:

Campo | Tipo de dato | Significado
----- | ------- | ---------
limit  | ``integer`` | Número de resultados a traer a partir del offset, 5 por defecto.
offset  | ``integer`` | Número de resultados a partir del cual se devolverán al usuario que realiza la petición, 0 por defecto.
search  | ``string`` | Cadena sobre la cual se obtendrán los casos cuyo nombre coincida con numero del expediente.

> Response: 200 Ok

```json
{
    "id": "5c86ec24eb1b692e049cb918",
    "fileNumber": "5757",
    "party": "Pelea por casa",
    "cliente": "Kevin Carbajal",
    "caseType": "Civil",
    "team": [
        {
            "_id": "5c86ec24eb1b692e049cb918",
            "initials": "JM"
        }
    ]
}
```

#### Flujo Exitoso

1. Obtiene los casos más actual de el cliente, aplicando los filtros y la paginación necesaria.


### Crear casos

> POST /api/lawyer/cases

> Authorization: Customer

> Content-Type: : application/json

> Request

```json
  {
      "client": {
          "_id": "5c86ec24eb1b692e049cb918",
          "type": "(plaintiff|defendant|third-party|other)",
      },
      "case": {
          "parties": "Grupo Jaque",
          "files": [
            {
                  "number": "55235",
                  "reference": "fdf5"
            }
            ],
          "caseType": "undefined",
          "courthouse": "vc-3",
          "caseAction": "undefined",
          "jurisdiction": "vc",
          "description": "Se va a llevar a cabo una reunion con los familiares"
      },
      "opposite": {
        "fullName": "Kevin Miranda",
        "email": "memo@example.com",
        "adress": "Avenida Tamaulipas 1266 Corpus Christy",
        "notes": "Hombre con problemas mentales",
        "phone": "5535244272"
      },
      "leader": "5c86ec24eb1b692e049cb918",
      "team": ["5c86ec24eb1b692e049cb918", "5c86ec24eb1b692e049cb918"]
  }
```