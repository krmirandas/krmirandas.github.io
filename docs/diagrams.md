---
id: diagrams
title: Diagramas de Usuario
---

## Registro de Usuario

```plantuml
User->Frontend : registro
Frontend->Backend : POST /organization
Backend->Frontend : 201 Created
Frontend->Backend : GET /plans
Backend->Frontend : 200 Ok
Frontend->User : Vista de elección de plan
User->Frontend : Elección de plan
Frontend->Backend : POST /membership
Backend->Frontend : 201 Created {intent_secret}
User->Frontend : Método de pago
Frontend->Stripe : Paymentintent purchase
Stripe->Frontend : Pago exitoso
Stripe->Backend : 201 POST /webhook
Backend->Backend : Activación de la organización
Frontend->Backend : GET /org/status
Backend->Frontend : 200 Ok
Frontend->User : Vista invitación de usuarios
User->Frontend : Lista de correos
Frontend->Backend : POST /org/users
Backend->Frontend : 201 Created
Frontend->User : Onboarding exitoso
```

## Agregar Admin

```plantuml
User->Frontend : {email, name}
Frontend->Backend : POST /admins
Backend->Firebase : firebase.createUser
Firebase->Backend : 201 Created
Backend->Firebase : firebase.setCustomUserClaims
Firebase->Backend : 200 Ok
Backend->Firebase : firebase.sendPasswordResetEmail
Firebase->Backend : 200 Ok
Backend->Frontend : 201 Created
```

## Aceptar invitación de Admin

```plantuml
User->Frontend : {password, confirmPassword}
Frontend->Firebase : firebase.setPassword
Firebase->Frontend : 200 Ok
Frontend->User : Redirect to login
User->Frontend : {email, password}
Frontend->Firebase : POST /login
Firebase->Frontend : Bearer Token
```
