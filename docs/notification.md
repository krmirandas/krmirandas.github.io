---
id: notifications
title: Notificaciones
---

## Socket

## Proceso de autenticación a través de sockets

:::warning
Debido al uso del protocolo websocket, no es posible utilizar headers, por esta razón, el token se envía como una query.
:::

1. El dispositivo cliente envía la solicitud de conexión con el `JWT` del usuario autenticado.
2. El servidor recibe la solicitud, y verifica la validez del token del usuario.

### Consideraciones

- Si el usuario es de tipo `centralTable` se conecta la sala `centralTable`.
- Si el usuario es perteneciente al local (`restaurantOwner`, `manager`, `staff`) se conectará a la sala siguiendo la estructura mencionada `tenant_<id>`.

# Broadcast

> Ejemplo de conexión:

```javascript
const socket = io(`<linea_legal_server_url>`, {
  forceNew: true,
  reconnection: true,
  reconnectionAttempts: 2,
  rejectUnauthorized: false,
  transports: ["websocket"],
  agent: false,
  upgrade: false,
});
```

> Autenticación:

```js
socket.emit(
  "get",
  {
    url: "/sockets",
    params: {
      token: "<jwt_token>",
      restaurant: "<organization_id>",
    },
  },
  (response) => {
    console.log("GOT RESPONSE: ", response);
    //response includes body and statusCode
    //handle success or error
  }
);
```

Existen ciertos eventos dentro del sistema, los cuales ocurren bajo ciertos escenarios en específico. Cada plataforma tiene ciertos eventos que debe escuchar y emitir. Cada plataforma deberá acceder a una sala en específico donde escuchará ciertos eventos de interés.

Las diferentes difusiones o broadcasts a considerar se enviarán al restaurante.
En cada uno se especifica el room en el cual se consumirá el evento así como los datos a enviar.

Dado que la responsabilidad de unir usuarios a un room corresponde al servidor, se deben hacer las validaciones pertinentes para unir a los usuarios a los `rooms` que corresponda.

Para establecer un websocket es necesario conectarse de la siguiente forma.

Por medio de lo anterior, se establece una conexión con el servidor mediante el protocolo websocket. Una vez conectado el socket, se procede a autenticar al usuario y solicitar la entrada al room de un restaurante en especifico.

Para manejar de una forma más robusta los eventos de un socket, se puede consultar la documentación oficial de [socket.io](https://socket.io/docs) o el siguiente [tutorial](https://www.tutorialspoint.com/socket.io/socket.io_error_handling.htm).

Para realizar una difusión a una aplicación cliente (iOS o Android) se utilizarán push notifications, puedes consultar el apartado de <a href="#notificaciones-push">Notificaciones Push</a>.

**Sala de Usuarios**

- La sala toma el nombre de la siguiente forma `user_<id>`, en este room se emitirán eventos que sucedan dentro del contexto del usuario al que pertenezcan. Por ejemplo recibir la creación de un evento, etc.

Si el id solicitado se encuentra en el scope del usuario, se obtendrá un `statusCode` de `200 Ok` y el socket se suscribirá al `room`, por ejemplo un usuario con el id 33 tiene como room `user__33`.

<!-- ............................................................................ -->

## Diccionario de eventos de notificaciones

Aquí se encontrarán los distintos tipos de eventos que pasan a través del socket y por notificaciones push según el escenario donde sea necesario usarse.

### Nuevo evento

> Cuerpo de la notificación

```json
{
  "data": {
    "event": "order_to_inprogress",
    "orderUUID": "f9524475-de1b-4c07-85be-aa649f526269"
  }
}
```

Nombre del evento: `order_to_inprogress`

1. Este evento se emite hacía el servidor, indicando que la orden programada paso a en progreso.
2. Se emite la notificación a **Usuario** para emitir una alerta.