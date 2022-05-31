---
id: models
title: Modelos
---

## PlatformAdmin

```yaml
_id: ObjectId
uid: string
email: string
fullName: string
```

### Descripción

La entidad *PlatformAdmin* representa a los administradores de la plataforma.

### Consideraciones

1. El nombre debe cumplir con la expresión regular *alphanumeric_extended*, con una extensión entre 3 y 250 caracteres.
2. El uid es el identificador del usuario en firebase.
3. El correo debe cumplir con la expresión regular *email_regex*.

## User

```yaml
_id: ObjectId
name: string
lastName: string
email: string
uid: string
image: string
phone: string
birthday: timestamp
organization: ObjectId
```

### Descripción

La entidad *User* representa a los abogados.

### Consideraciones

1. El nombre debe cumplir con la expresión regular *alphanumeric_extended*, con una extensión entre 3 y 250 caracteres.
2. El apellido debe cumplir con la expresión regular *alphanumeric_extended*, con una extensión entre 2 y 250 caracteres.
3. El uid es el identificador del usuario en firebase.
4. El correo debe cumplir con la expresión regular *email_regex*.
5. La imagen del usuario es su foto de perfil.
6. El teléfono del usuario debe cumplir la validación *international_phone_format*.
7. Los usuarios deben tener una fecha de nacimiento.
8. Los usuarios pueden no pertenecer a una organización, pero deben pertenecer a una para poder realizar acciones.

## Organization

```yaml
_id: ObjectId
name: string
createdAt: timestamp
logo: string
timezone: string
paymentStatus: enum
subscriptionSchema:
  - isFreeTrial: boolean
    trialExpiresAt: timestamp
    priceInCents: number
    recurrence: string
    nextPaymentDue: timestamp
    maxUsersPerOrg: number
    id: ObjectId
    name: string
    subscriptionId: string
lastPaymentAt: timestamp
status: enum

```

### Descripción

La entidad *Organization* representa de forma abstracta a las marcas, buffetes o usuarios que utilizan el sistema de Linea Legal.

### Consideraciones

1. El nombre debe cumplir con la expresión regular *alphanumeric_extended*, con una extensión entre 3 y 250 caracteres.
2. Toda organización tiene una fecha de creación.
3. La organización puede tener un logotipo.
4. Toda organización requiere una zona horaria válida, esto con el fin de mostrar las fechas en un formato legible para los usuarios.
5. Toda organización cuenta con un estado actual de pago del servicio, este estado puede ser: ACTIVE o PENDING.
6. Toda organización cuenta con un esquema de suscripción, el cual debe tener la información relevante del pago respecto al estado del plan al momento de su contratación.
7. El esquema de pago tiene el valor *isFreeTrial* que indica si se está en periodo de prueba o no.
8. Se tiene una fecha de expiración del periodo de prueba.
9. Se tiene el precio a pagar de acuerdo al monto establecido al momento de la contratación, el cual debe ser mayor o igual a 1000 ($10.00 MXN).
10. Se tiene la recurrencia de pago de acuerdo al plan elegido al momento de la contratación, puede ser MONTHLY o YEARLY.
11. Se tiene la fecha en la que se intentará el siguiente pago.
12. Se tiene el máximo número de usuarios por organización, debe ser mayor o igual a 1.

## Payment History

```yaml
_id: ObjectId
paidAt: timestamp
expiresAt: timestamp
retries: number
last4: string
organization: ObjectId
```
### Descripción

La entidad *Payment History* nos permite llevar registros de los pagos realizados por los usuarios.

### Consideraciones

1. Todo movimiento debe tener una fecha de pago.
2. Todo movimiento debe tener una fecha de expiración calculada acorde al plan.
3. Todo movimiento debe tener el número de intentos fallidos previo al éxito de procesamiento.
4. Todo movimiento debe contar con los últimos 4 dígitos de la tarjeta mediante la cual realizaron el pago.
5. Todo movimiento pertenece a una organización.


## Case

```yaml
client: ObjectId
files:
  - fileNumber: string
    reference: string
adverseParty:
  - name: string
    address: string
    phone: string
    notes: string
responsable: ObjectId
partyType: enum
partySpecified: string
type: string
action: string
jurisdiction: string
court: string
decription: string
documents:
  - url: string
    alias: string
    type: enum
boardParent: ObjectId
```

### Descripción

La entidad *Case* es la entidad central del sistema pues modela los casos. Tiene la información de la parte adversaria, un abogado responsable del caso,
tipo de caso, parte, acción, juzgado, jurisdicción, cliente, número de expediente, referencia, descripción del caso y un equipo asignado.

### Consideraciones

1. Todo caso debe estar asociado a un cliente.
2. Todo caso debe de llevar un parte.
3. Un caso puede tener uno o más número de expedientes asociados.
4. Un caso debe tener partes.
5. Los juzgados así como las jurísdicciones deben cumplir con la expresión regular *alphanumeric_extended*, con una extensión entre 3 y 250 caracteres.
6. La descripción del caso debe cumplir con la expresión regular *alphanumeric_extended*, con una extensión entre 3 y 250 caracteres.
7. Todo caso requiere de los datos de contacto de la parte contraria.
8. El nombre de la parte contraria debe cumplir con la expresión regular *alphanumeric_extended*, con una extensión entre 3 y 100 caracteres.
9. La dirección de la parte contraria debe cumplir con la expresión regular *alphanumeric_extended*, con una extensión entre 10 y 250 caracteres.
10. La parte contraria debe tener un teléfono de contacto, que debe cumplir con la validación *international_phone_format*.
11. La parte contraria puede tener notas asociadas, que deben cumplir con la validación *alphanumeric_extended*, con una extensión entre 3 y 1000 caracteres.
12. Todo caso debe tener un abogado responsable.
13. Los casos pueden tener un equipo asignado, compuesto de usuarios de la misma organización.

## Board

```yaml
_id: ObjectId
positionRelativeToParent: enum:[next, up, down]
status: enum:[active, paused, finished]
name: string
description: string
slug: string
parent: ObjectId references Board
documents:
  - ObjectId
currentStatus: enum
pauseMessage: string
documents:
  - url: string
    alias: string
    type: enum
```

### Descripción

La entidad *Board* modela las actuaciones dentro de un caso, contienen un nombre, descripción, slug, la referencia al padre así como la posición
con respecto al mismo, contiene un arreglo de documentos, un status y un mensaje por pausa.

### Consideraciones

1. El nombre debe cumplir con la expresión regular *alphanumeric_extended*, con una extensión entre 3 y 100 caracteres.
2. La descripción debe cumplir con la expresión regular *alphanumeric_extended*, con una extensión entre 3 y 500 caracteres.
3. El slug debe cumplir con la expresión regular *alphanumeric*, con una extensión entre 3 y 20 caracteres.
4. La posición relativa con el padre puede ser: NEXT, UP o DOWN.
5. El parent es la referencia a la actuación anterior, puede ser nula en caso de ser la raíz.
6. Los documentos son un arreglo d referencias al modelo *File*.
7. Los status que puede tomar una actuación son: ACTIVE, PAUSED y FINISHED.
8. El mensaje de pausa debe cumplir con la expresión regular *alphanumeric_extended*, con una extensión entre 3 y 200 caracteres.

## Plan

```yaml
_id: ObjectId
name: string
description: string
maxUsersPerOrg: number
trialPeriodInDays: number
paymentSchemas:
  - priceInCents: number
    recurrence: enum
    productId: string
```

### Descripción

La entidad *Plan* contiene las restricciones sobre el uso que le puede dar un grupo de usuarios en una organización, así como el precio
y la recurrencia de pago.

### Consideraciones

1. El nombre debe cumplir con la expresión regular *alphanumeric_extended*, con una extensión entre 3 y 100 caracteres.
2. La descripción debe cumplir con la expresión regular *alphanumeric_extended*, con una extensión entre 3 y 500 caracteres.
3. El número máximo de usuarios debe ser mayor a 1.
4. El número de días de prueba gratis debe ser mayor o igual a 0.
5. Debe haber al menos un esquema de pago.
6. Los esquemas de pago deben tener un precio mayor o igual a 1000 ($10.00 MXN).
7. La recurrencia de pago puede ser: MONTHLY o YEARLY.

## Client

```yaml
_id: ObjectId
fullname: string
email: string
gender: enum
type: enum
phones:
  - value: string
    type: string
notes: string
```

### Descripción

La entidad *Client* modela a los clientes de la organización, contiene datos básicos como nombre completo, correo electrónico, genero,
tipo de cliente, teléfonos y notas sobre el cliente.

### Consideraciones

1. El nombre debe cumplir con la expresión regular *alphanumeric_extended*.
2. El correo debe cumplir con la expresión regular *email_regex*.
3. El genero puede tener los valores: MALE, FEMALE y N/A.
4. El tipo de cliente puede ser:.
5. Cada teléfono debe tener un número válido y el tipo de teléfono.
6. El número de teléfono debe cumplir la validación *international_phone_format*.
6. El tipo de teléfono puede ser: PERSONAL, OFFICE y CORPORATE.
7. LAs notas deben cumplir la expresión regular *alphanumeric_extended*, con una extensión máxima de 2500 caracteres.

## Alerts

```yaml
_id: ObjectId
name: string
date: timestamp
hour: string
priority: enum
createdBy: ObjectId
invitees:
  - ObjectId
board: ObjectId
```

### Descripción

La entidad alerts modela las alertas que se visualizan en el calendario de los usuarios, estas alertas tienen un nombre, prioridad, fecha y hora,
usuarios interesados y un usuario creador.

### Consideraciones

1. Una alerta puede ser global (de calendario) o pertenecer a una actuación.
2. Las alertas siempre tienen creador (usuario).
3. Las alertas deben tener una fecha y hora, dada por la zona horaria de la organización (se almacenarán en UTC).
4. Si la alerta es global, se debe elegir a los interesados en recibirla en el arreglo de invitees.
5. Si la alerta es de una actuación, llegará a todos los usuarios asignados a la misma por defecto, aunque se pueden indicar los interesados.
6. Las prioridades disponibles son: LOW, MEDIUM y HIGH.
7. El nombre de una alerta debe hacer match con la expresión regular *alphanumeric*, con una extensión entre 5 y 150 caracteres.
