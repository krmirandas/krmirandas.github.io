---
id: stripe
title: Metodos de Stripe
sidebar_label: Metodos de Pago
---

## Metodos de Pago

### Agregar método de pago

> POST /payment_methods

> Authorization: Owner

> Content-Type: application/json

Permite agregar un método de pago, generando un secreto para ser usado de lado del cliente.

> Response: 201 - Created

```javascript
{
  clientSecret: 'seti_1J4yPdAMpEUCMwJI2JL0FfuV_secret_JiPELBhdHAPdDWMDHh409aD9Rg1zo4F'
}
```

#### Flujo Exitoso

1. Genera un token para agregar un método de pago al cliente desde el frontend con Stripe.
    
### Ver métodos de pago

> GET /payment_methods

> Authorization: Owner

> Content-Type: application/json

Permite ver los métodos de pago del cliente.

> Response: 200 - Ok

```javascript
{
  cards: [
    {
      id: 'pm_1J4yPeAMpEUCMwJIv4o3SiCH',
      brand: 'visa',
      last_4: '4242',
      exp_year: '2022'
    }
  ]
}
```

#### Flujo Exitoso

1. Obtiene los métodos de pago del cliente. En caso de no existir, devuelve un arreglo vacío.
    
#### Eliminar método de pago

> DELETE /payment_methods/:id

> Authorization: Owner

> Content-Type: application/json

Elimina un método de pago a partir de su identificador.

> Response: 204 - No Content

Validaciones | Código de respuesta | Código de mensaje
---------- | ------------------ | -----------
Si el usuario no está registrado en Stripe. | 422 |  no_stripe_customer_key
Si el método de pago no se encuentra. | 422 |  payment_method_not_found

#### Flujo Exitoso

1. Encuentra el método de pago a partir del id.
2. Elimina el método de pago.
    
## Metodos Stripe 

### Obtener llave pública de Stripe

> GET /stripe/public_key

> Authorization: Owner

> Content-Type: application/json

Permite obtener la llave pública de Stripe.

> Response: 200 - Ok

```javascript
{
  publicKey: 'pk_test_51IWARYAMpEUCMwJIOc3g9k5sewqyfyPOxiEKcVloMNH5NCxTEhnkWbUybLdhjCVZH4YGNnfGMaeE7Opjyz4QvwUv00S6lVOchk'
}
```

Validaciones | Código de respuesta | Código de mensaje
---------- | ------------------ | -----------
Si la configuración de Stripe no es correcta. | 500 | stripe_settings_error