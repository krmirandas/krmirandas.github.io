---
id: abogado
title: Métodos de abogado
---

## Organización

### Crear organización

> `POST /api/lawyer/organizations`

> Authorization: Customer

> Content-Type: multipart/form-data

> Request

```javascript
{
  "name": "ENERAP",
  "logo": "path/to/logo.png",
  "timezone": "America/Mexico_City"
}
```

> Response: 201 Created

```javascript
{
  "organization": {
    "_id": "5c86ec24eb1b692e049cb918",
    "name": "ENERAP",
    "logo": "http://linea-legal/orgs/5c86ec24eb1b692e049cb918/logo.png",
    "timezone": "America/Mexico_City"
    ]
  }
}
```

Atributo | Validaciones
---------- | -------
name | ``string``, ``min:3``, ``max:150``, ``required``
logo  | ``file``, ``png/jpg``, ``max:6MB``, ``required``
timezone  | ``string``, ``timezone``, ``required``

Validaciones | Código de respuesta | Código de mensaje
---------- | ------------------ | -----------
Si ya existe una organización con ese nombre. | 409 | org_name_in_use
Si el timezone no es valido. | 422 | invalid_timezone
Si el formato de la imagen no es png o jpg. | 415 | invalid_file_type
Si el logo excede el peso máximo permitido. | 415 | invalid_file_size

#### Flujo Exitoso

1. Se crea un objeto **Organization** con la información recibida.
2. Se asocia el usuario a la organización.

### Elegir plan de pago

> `POST /api/lawyer/organizations/:id/membership`

> Authorization: Customer

> Content-Type: application/json

> Request

```javascript
{
  "planId": "adgad8sdfh8sdf",
  "schemaId": "9ag889adadsga"
}
```

> Response: 201 Created

Atributo | Validaciones
---------- | -------
planId | ``string``, ``required``
schemaId | ``string``, ``required``

Validaciones | Código de respuesta | Código de mensaje
---------- | ------------------ | -----------
Si el usuario no es owner. | 403 | forbidden
Si la organización no pertenece al owner. | 404 | organization_not_found
Si el plan no se encuentra. | 404 | plan_not_found
Si el esquema no se encuentra en el plan. | 404 | schema_not_found
Si la organización ya cuenta con un plan activo. | 409 | already_subscribed

#### Flujo Exitoso

1. Se obtiene la **Organization**.
2. Se obtiene el plan y el esquema de pago.
3. Se asocia el plan a la organización y se genera la suscripción para el cliente.

Ejemplo de código:

```js
await stripe.customers.update(
  req.user.customerId,
  {
    invoice_settings: {
      default_payment_method: req.body.paymentMethodId,
    },
  }
);
const plan = await Plan.findOne({req.body.planId});
const price = plan.schemas.filter(s => s._id === req.body.schemaId)[0];
// Create the subscription
const subscription = await stripe.subscriptions.create({
  customer: req.body.customerId,
  items: [{ price: price.stripePriceId }],
  expand: ['latest_invoice.payment_intent']
});
```

:::info
Se deben escuchar los eventos relacionados a los pagos para asegurar que se brinda el servicio a los usuarios
que han pagado. Del mismo modo, evitar brindar el servicio a los usuarios que no han realizado su pago.

Para información completa del manejo de suscripciones, visita el [tutorial de Stripe](https://stripe.com/docs/billing/subscriptions/overview).
:::

### Crear usuarios

> POST /api/lawyer/users

> Authorization: Customer

> Content-Type: : application/json

> Request

```json
  {
    "users": [
      "kevin@miranda.com",
      "ricardo@miranda.com"
    ]
  }
```

Permite dar de alta usuarios dentro de la organización del usuario.

> Response: 201 Created

Atributo | Validaciones
---------- | -------
users | ``typeOf:array``, ``min:1`` ``required``
users[0] | ``typeOf:string``, ``email`` ``required``

Validaciones | Código de respuesta | Código de mensaje
---------- | ------------------ | -----------
Si la organización no tiene una suscripción activa. | 412 | plan_required
Si la organización excede el número de usuarios. | 422 | user_limit_exceeded
Si alguno de los usuarios ya se encuentra registrado. | 409 | user_already_registered

#### Flujo Exitoso

1. Se crea el usuario en firebase.
2. Se asocia el uid de firebase a un nuevo usuario de la organización.
3. Se envía el correo de bienvenida al nuevo usuario.

:::info
Al agregar un usuario, se tendrán 72 horas para aceptar su invitación, de lo contrario será eliminado.
:::

### Consultar usuarios

> GET /api/lawyer/users

> Authorization: Customer

> Content-Type: : application/json

> Request

```json
  {
    "users": [
      {
        "_id": "97070a0s970707b",
        "email": "kevin@miranda",
        "inviteStatus": "accepted"
      },
      {
        "_id": "97070a0s970707b",
        "email": "ricardo@miranda",
        "inviteStatus": "pending"
      }
    ]
  }
```

Permite consultar a los usuarios dados de alta en la organización. El atributo inviteStatus se puede obtener de la propiedad
emailVerified de firebase.

> Response: 200 Ok

#### Flujo Exitoso

1. Se crea el usuario en firebase.
2. Se asocia el uid de firebase a un nuevo usuario de la organización.
3. Se envía el correo de bienvenida al nuevo usuario.

### Eliminar usuarios

> DELETE /api/lawyer/users/:id

> Authorization: Customer

> Content-Type: : application/json

> Request

Permite eliminar a un usuario de una organización, restringiendo su acceso de forma inmediata. Este proceso es irreversible.

> Response: 204 No Content

Validaciones | Código de respuesta | Código de mensaje
---------- | ------------------ | -----------
Si el usuario no se encuentra en la organización. | 404 | user_not_found

#### Flujo Exitoso

1. Obtiene el usuario de la base de datos.
2. Elimina el usuario de firebase.
3. Elimina el usuario de la base de datos.

## Métodos de pago

### Obtener métodos de pago

> GET /api/lawyer/payment_methods

> Authorization: Customer

> Content-Type: : application/json

> Request

Permite obtener las tarjetas asociadas al cliente.

> Response: 200 Ok

```javascript
  {
    "cards": [
      {
        "id": "pm_1G8vgR2eZvKYlo2C9o1o4bhS",
        "brand": "visa",
        "last_4": "4242",
        "exp_year": 2023
      },
      {...},
      {...}
    ]
  }
```

#### Flujo Exitoso

1. Se obtiene el id de Stripe del cliente autenticado.
2. Se invoca el método `listSources` del SDK de Stripe.
3. Se filtra la información devuelta.

<aside class="info">Si el usuario no cuenta con métodos de pago asociados, se responde con un arreglo vacío.</aside>


### Agregar método de pago

> POST /api/lawyer/payment_methods

> Authorization: Customer

> Content-Type: : application/json

> Request

Permite agregar un método de pago a un cliente. Se creará una instancia de *SetupIntents* de [Stripe](https://stripe.com/docs/api/setup_intents/create).

> Response: 201 Created

```js
{
  "id":"seti_1IMOE7IuKQ0PCijjuklUmXwh",
  "object":"setup_intent",
  "application":null,
  "cancellation_reason":null,
  "client_secret":"seti_1IMOE7IuKQ0PCijjuklUmXwh_secret_IyKt5WWj0jZ8RAM9i3LaBLsJmulcTk4",
  "created":1613699775,
  "customer":null,
  "description":null,
  "last_setup_error":null,
  "latest_attempt":null,
  "livemode":false,
  "mandate":null,
  "metadata":{},
  "next_action":null,
  "on_behalf_of":null,
  "payment_method":null,
  "payment_method_options":{
    "card":{
      "request_three_d_secure":"automatic"
    }
  },
  "payment_method_types":["card"],
  "single_use_mandate":null,
  "status":"requires_payment_method",
  "usage":"off_session"
}
```

#### Flujo Exitoso

1. Se valida si el usuario cuenta con un identificador de Stripe, si no lo tiene, se le crea uno.
2. Se invoca el método de Stripe ``createSetupIntent`` con el identificador del cliente.
3. Se devuelve el detalle del intent.

<Notice type="info" title="Espera al hook">
  Se debe escuchar al evento *payment_method.attached* para asegurarse que se agrego un método de pago al usuario.
</Notice>

### Elegir método de pago default

> PUT /api/lawyer/payment_methods/default

> Authorization: Customer

> Content-Type: : application/json

> Request

```json
  {
    "card": "pm_1G8vgR2eZvKYlo2C9o1o4bhS"
  }
```

Permite elegir un método de pago como el default.

> Response: 204 No Content

Atributo | Validaciones
---------- | -------
card | ``typeOf:string``, ``required``

Validaciones | Código de respuesta | Código de mensaje
---------- | ------------------ | -----------
Si la tarjeta no se encuentra. | 404 | card_not_found

#### Flujo Exitoso

1. Se obtiene la tarjeta de los métodos de pago del usuario.
3. Se invoca el método de cliente ``defaultSource`` y se envía el id de la tarjeta.


### Eliminar método de pago

> DELETE /api/lawyer/payment_methods/:id

> Authorization: Customer

> Content-Type: : application/json

> Request

Permite eliminar un método de pago del cliente.

> Response: 200 Ok

Validaciones | Código de respuesta | Código de mensaje
---------- | ------------------ | -----------
Si el usuario no está dado de alta en Stripe. | 412 | must_be_in_stripe
Si no se encuentra el método de pago | 404 | card_not_found

#### Flujo Exitoso

1. Invoca el método de ``deleteSource`` de Stripe con el id de usuario y el id del método de pago.

## Planes

### Obtener planes de suscripción

> GET /api/plans

> Authorization: Customer

> Content-Type: : application/json

> Request

Permite obtener los planes de suscripción disponibles en la plataforma.

> Response: 200 Ok

```javascript
  {
    "plans": [
      {
        _id: "2346234j62346",
        name: "Plan basico",
        description: "Hasta 20 usuarios, 30GB de almacenamiento, Casos ilimitados, integración con Calendar, envío de recordatorios"
        maxUsersPerOrg: 20,
        trialPeriodInDays: 7,
        paymentSchemas: [
          {
            _id: "sdfsdf8sdfbsdfn8",
            priceInCents: 30000,
            recurrence: "monthly"
          }
        ]
      },
      {...},
      {...}
    ]
  }
```

::: note

Los planes se deben asociar a objetos Product en Stripe, mientras que los esquemas son obetos de tipo Price.

#### Flujo Exitoso

1. Se obtienen los planes de suscripción actuales.
