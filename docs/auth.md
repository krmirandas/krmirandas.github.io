---
id: auth
title: Autenticación
---

## Autenticación

Las políticas que serán usadas en el servidor son las siguientes:

* JWT: Para verificar si el usuario contiene autenticación o no.
* Firebase: Verificación de autenticidad y vigencia del token, así como si el usuario ha verificado su cuenta de correo o no.
* Claims: Verifica las reclamaciones del usuario.
* Rol: En caso de usuarios abogados, se debe verificar el rol para saber si son dueños de la organización a la que pertenecen o no.
* Suscripción: En caso de usuarios abogados, si la suscripción de la organización está activa o no.
* Plan: En caso de usuarios abogados, si la acción a llevar a cabo está incluida en el plan actual o no.
