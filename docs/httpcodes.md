---
id: httpcodes
title: Códigos
---

## Códigos HTTP

A continuación se presentan los códigos http presentes en el API.


Código HTTP | Razón
---------- | -------
200 | Ok -- La petición se realizó con éxito.
201 | Created -- El recurso se creó con éxito.
204 | No Content -- La petición se realizó con éxito, pero el servidor no tiene nada que devolver.
400 | Bad Request -- El cuerpo de la petición no es correcto.
401 | Unauthorized -- La petición requiere autorización.
403 | Forbidden -- La petición requiere más privilegios en el sistema para utilizarse.
404 | Not Found -- El recurso no fue encontrado o se encuentra eliminado.
410 | Gone -- El recurso a utilizar ya no está disponible.
412 | Precondition failed -- Alguna precondición necesaria no se cumplió para poder procesar la solicitud.
415 | Unsupported Media Type -- Existe algún problema con las caracterisiticas del archivo recibido.
422 | Invalid -- Alguno de los campos de la petición contienen errores de validaciones.
424 | Failed dependency -- La operación dependía de un proceso externo y este fallo.
500 | Internal Server Error -- Ocurrió un error no esperado o una inconsistencia en el servidor.
503 | Service Unavailable -- El servicio no está disponible. Intenta más tarde.
