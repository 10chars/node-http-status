/**
 * Spanish messages for HTTP status codes
 */
export const esMessages = {
  // 2xx Success
  200: 'La solicitud ha sido exitosa',
  201: 'La solicitud se ha cumplido y ha resultado en la creación de un nuevo recurso',
  202: 'La solicitud ha sido aceptada para su procesamiento',
  204: 'El servidor procesó la solicitud exitosamente pero no devuelve contenido',
  206: 'El servidor está entregando solo una parte del recurso debido a un encabezado de rango enviado por el cliente',

  // 3xx Redirection
  301: 'El recurso solicitado ha sido movido permanentemente',
  302: 'El recurso solicitado reside temporalmente bajo un URI diferente',
  304: 'El recurso no ha sido modificado desde la última solicitud',
  307: 'La solicitud debe repetirse con otra URI pero las solicitudes futuras deben seguir usando la URI original',
  308: 'La solicitud y todas las solicitudes futuras deben repetirse usando otra URI',

  // 4xx Client Error
  400: 'El servidor no puede procesar la solicitud debido a un error del cliente',
  401: 'Se requiere autenticación y ha fallado o no se ha proporcionado',
  403: 'El servidor entendió la solicitud pero se niega a autorizarla',
  404: 'No se pudo encontrar el recurso solicitado',
  405: 'El método de solicitud no está permitido para este recurso',
  406: 'El recurso solicitado solo puede generar contenido no aceptable según los encabezados Accept',
  408: 'El servidor agotó el tiempo esperando la solicitud',
  409: 'La solicitud entra en conflicto con el estado actual del recurso',
  410: 'El recurso solicitado ya no está disponible',
  411: 'La solicitud no especificó la longitud de su contenido, lo cual es requerido por el recurso solicitado',
  412: 'El servidor no cumple una de las precondiciones que el solicitante puso en la solicitud',
  413: 'La solicitud es más grande de lo que el servidor está dispuesto o es capaz de procesar',
  414: 'La URI proporcionada fue demasiado larga para que el servidor la procese',
  415: 'La entidad de solicitud tiene un tipo de medio que el servidor o recurso no soporta',
  416: 'El cliente pidió una parte del archivo pero el servidor no puede suministrar esa parte',
  417: 'El servidor no puede cumplir los requisitos del campo de encabezado de solicitud Expect',
  418: 'Cualquier intento de preparar café con una tetera debe resultar en el código de error 418 Soy una tetera',
  422: 'La solicitud estaba bien formada pero contiene errores semánticos',
  426: 'El cliente debe cambiar a un protocolo diferente como TLS/1.0 dado en el campo de encabezado Upgrade',
  428: 'El servidor de origen requiere que la solicitud sea condicional',
  429: 'El usuario ha enviado demasiadas solicitudes en un período de tiempo determinado',
  431: 'El servidor no está dispuesto a procesar la solicitud porque un campo de encabezado individual o todos los campos de encabezado colectivamente son demasiado grandes',
  451: 'Un operador del servidor ha recibido una demanda legal para denegar el acceso a un recurso o a un conjunto de recursos que incluye el recurso solicitado',

  // 5xx Server Error
  500: 'El servidor encontró una condición inesperada',
  501: 'El servidor no soporta la funcionalidad requerida',
  502: 'El servidor recibió una respuesta inválida del servidor upstream',
  503: 'El servidor no está disponible actualmente',
  504: 'El servidor no recibió una respuesta oportuna del upstream',
  505: 'El servidor no soporta la versión del protocolo HTTP utilizada en la solicitud',
  511: 'El cliente necesita autenticarse para obtener acceso a la red',
};
