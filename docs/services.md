---
id: services
title: Servicios
sidebar_label: Servicios
---

## Firebase

Firebase será usado como un método de autenticación de terceros, permitiéndonos autenticar usuarios con rol y clientes por igual.

La mayor parte de la interacción entre firebase y Linea Legal estará en el frontend usando los SDK oficiales, sin embargo, hay tres pasos que se deben hacer en el lado del servidor:

* Validar Firebase JWT en cada solicitud de API.

* Compruebe si el token está asociado a un usuario existente a través del identificador uid.

* Compruebe si el usuario tiene las reclamaciones correctas.


### API keys

#### Para frontend

1. Ingrese a la consola de proyecto en firebase.
2. Haga clic en el engranaje de la esquina superior izquierda y seleccione *configuración del proyecto*.
3. En la ficha general, desplázate hasta la sección de aplicaciones y elige la aplicación web, si no la hay, crea una antes del siguiente paso.
4. Copie los ajustes y agréguelos a su proyecto.

#### Para servidor

1. Ingrese a su consola de proyecto en firebase.
2. Haga clic en el engranaje de la esquina superior izquierda y seleccione *configuración del proyecto*.
3. En la pestaña Cuentas de servicio, elija firebase admin SDK.
4. Seleccione Nodejs y haga clic en *Generar nueva clave privada*.
5. Descargue el archivo de claves, que se utilizará más adelante en la instalación del SDK.

### Configuración SDK

Los siguientes pasos son usados para configurar el Firebase SDK:

```shell
#Step 1
npm install firebase-admin --save
```
```javascript
// Step 2
const admin = require('firebase-admin');
```

```shell
# Step 3
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"
```

```javascript
//Step 4
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});
```

### Token verification (server side)

```javascript
// Step 5
// Getting the uid from the token verification
admin.auth().verifyIdToken(idToken)
.then(function(decodedToken) {
  let uid = decodedToken.uid;
  // ...
}).catch(function(error) {
  // Handle error
});
```

```javascript
// Step 6
{
  "iss": "https://securetoken.google.com/fakes-radar",
  "name": "Orlando Rey",
  "picture": "https://pbs.twimg.com/profile_images/1014735584005447680/wlZO68RR_normal.jpg",
  "aud": "fakes-radar",
  "auth_time": 1530825817,
  "user_id": "435kj234j9j9gdb3",
  "sub": "orlandorey@example.com",
  "iat": 1530914131,
  "exp": 1530917731,
  "uid": "346kwrgserg345we45453"
}
```

1. Instalar el proyecto npm como dependencia.
2. Requerir el paquete npm dentro del código.
3. Pase el archivo json que contiene las credenciales como variable de entorno.
4. Pase la configuración.
5. Verificar los tokens JWT.
6. Obtener la información de usuario asociada con el token firebase.

:::info
Puedes consultar la información completa de Firebase [here](https://firebase.google.com/docs/auth/admin/verify-id-tokens?hl=es).
:::


### Autenticación

El proceso de autenticación se llevará a cabo mediante la verificación de los tokens JWT recibidos en cada llamada a la API con la firebase admin SDK. Las aplicaciones frontend se encargarán de fusionar los diferentes proveedores de auth en una sola cuenta (por ejemplo teléfono y gmail).

Cuando se verifica un token, podemos obtener una amplia gama de información del usuario como nombre de pila, fotos de perfil, etc. Todo depende del proveedor de autenticación y cuánta información ha subido el cliente a cada uno.

## Tipos de usuario

Firebase permite segmentar a los usuarios mediante la adición de algunas reclamaciones personalizadas, estas reclamaciones deben ser pequeñas piezas de información para mantener el rendimiento.
Simplemente utilice el método *setCustomUserClaims* como en el siguiente ejemplo:

```javascript
//customClaims example
admin.auth().setCustomUserClaims(uid, {admin: true}).then(() => {
  // The new custom claims will propagate to the user's ID token the
  // next time a new one is issued.
});
```

To verify the custom claims on the server the following must be done:

```javascript
// Verify the ID token first.
admin.auth().verifyIdToken(idToken).then((claims) => {
  if (claims.admin === true) {
    // Allow access to requested admin resource.
  }
});
```

On the frontend app you must do the following process:

```javascript
firebase.auth().currentUser.getIdTokenResult() // can also use await
  .then((idTokenResult) => {
     // Confirm the user is an Admin.
     if (!!idTokenResult.claims.admin) {
       // Show admin UI.
       showAdminUI();
     } else {
       // Show regular user UI.
       showRegularUI();
     }
  })
  .catch((error) => {
    console.log(error);
  });
```

## Stripe

La Stripe API está basada en REST. Stripe API tiene URL orientadas a recursos predecibles, acepta cuerpos de solicitud codificados en forma, devuelve respuestas codificadas en JSON y utiliza códigos de respuesta HTTP estándar y autenticación.

Stripe ofrece un SDK oficial que se puede integrar en el proyecto usando NPM.

### API keys

1. Abra el dashboard Stripe.
2. En la barra izquierda, haga clic en Desarrolladores y elija las claves de API.
3. Copiar las claves públicas y secretas y añadirlas al servidor a través de variables de entorno.

*Asegúrese de que está copiando las claves de prueba, ya que las claves en vivo solo están destinadas al entorno de producción*

Para la integración se utilizará el SDK oficial de Stripe, el cual se puede agregar
al proyecto utilizando el siguiente comando:


```shell
$ npm install stripe --save
```

Para empezar a utilizar el paquete basta con agregar el siguiente código:

```javascript
const stripe = require('stripe')('sk_test_...');
```

### Crear intención de Pago

Para solicitar un pago por parte de un cliente, se crea un intento de pago en el servidor,
esto devuelve un secreto que debe ser enviado a la aplicación cliente para verificar el
pago.

```javascript
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

(async () => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'usd',
  });
})();
```

### Crear intención de configuración

Permite crear una intención con el fin de registrar un método de pago sin realizar un cargo.

```javascript
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

(async () => {
  const setupIntent = await stripe.setupIntents.create({
    customer: 'cus_9asd89797l23jld928hsdkc'
  });
})();
```

El valor del secret del setupIntent se debe envíar al cliente para que complete el flujo, con el fin de
registrar el método de pago. Para verificar que el método se asocio de forma correcta, se debe escuchar el
evento **payment_method.attached**.

### Crear un cargo recurrente

Para crear un cargo recurrente, es necesario dar de alta un producto en Stripe, asociarle
precios dependiendo de la recurrencia de pago y por ultimo asociar un cliente a un producto
a través de una suscripción.

```js
//crea el producto
const product = await stripe.products.create({
  name: 'Weekly Car Wash Service',
  type: 'service',
});

//asocia los distintos precios de acuerdo a la forma de suscripción
const price = await stripe.prices.create({
  nickname: 'Standard Monthly',
  product: '{{CAR_WASH_PRODUCT_ID}}',
  unit_amount: 2000,
  currency: 'usd',
  recurring: {
    interval: 'month',
    usage_type: 'LICENSED',
  },
});

//crea la suscripcion del usuario al esquema de pago deseado
const subscription = await stripe.subscriptions.create({
  customer: '{{CUSTOMER_ID}}',
  items: [
    {
      price: '{{STANDARD_MONTHLY_USD_PRICE_ID}}',
      quantity: 2,
    },
  ],
});
```

### Tokenización y pagos en línea

Stripe permite obtener la información de la tarjeta de una forma segura sin tener la
necesidad de envíar la información del cliente al servidor. También proveé sus propias
formas para utilizarlas en la vista del cliente.

Pra utilizarlo hay que realizar el siguiente proceso:

Agregar el script de Stripe a la cabecera de la página:

```html
<head>
  <title>Checkout</title>
  <script src="https://js.stripe.com/v3/"></script>
</head>
```

Crear una instancia de *Elements*:

```javascript
// Set your publishable key: remember to change this to your live publishable key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
var elements = stripe.elements();
```

Agregar contenedores para los componentes de Elements:

```html
<form id="payment-form">
  <div id="card-element">
    <!-- Elements will create input elements here -->
  </div>

  <!-- We'll put the error messages in this element -->
  <div id="card-errors" role="alert"></div>

  <button id="submit">Pay</button>
</form>
```

Una vez que cargo la vista, crear una instancia de *Element* y montarla en el conenedor:

```javascript
// Set up Stripe.js and Elements to use in checkout form
var style = {
  base: {
    color: "#32325d",
  }
};

var card = elements.create("card", { style: style });
card.mount("#card-element");
```

Se recomienda escuchar los eventos del componente para ayudar al usuario a validar
sus datos:

```javascript
card.addEventListener('change', ({error}) => {
  const displayError = document.getElementById('card-errors');
  if (error) {
    displayError.textContent = error.message;
  } else {
    displayError.textContent = '';
  }
});
```

Ejecutar el pago desde el lado del cliente con el secreto devuelto en el paso anterior:

```javascript
var form = document.getElementById('payment-form');

form.addEventListener('submit', function(ev) {
  ev.preventDefault();
  stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: card,
      billing_details: {
        name: 'Jenny Rosen'
      }
    }
  }).then(function(result) {
    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  });
});
```

### Tarjetas de prueba

Stripe ofrece números de tarjeta para probar ciertos comportamientos en el ambiente de Testing.

Tarjeta | Comportamiento
------ | --------
4242424242424242 | Pago exitoso.
4000000000009995 | Saldo insuficiente.
4000002500003155 | Requiere autenticación, por lo que despliega un modal para que el usuario se autentique.
