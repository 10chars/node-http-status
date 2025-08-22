/**
 * Spanish messages for HTTP status codes
 */
export const esMessages = {
  // 2xx Success
  200: 'La solicitud ha sido exitosa',
  201: 'La solicitud se ha cumplido y ha resultado en la creación de un nuevo recurso',
  202: 'La solicitud ha sido aceptada para su procesamiento',
  204: 'El servidor procesó la solicitud exitosamente pero no devuelve contenido',

  // 3xx Redirection
  301: 'El recurso solicitado ha sido movido permanentemente',
  302: 'El recurso solicitado reside temporalmente bajo un URI diferente',
  304: 'El recurso no ha sido modificado desde la última solicitud',

  // 4xx Client Error
  400: 'El servidor no puede procesar la solicitud debido a un error del cliente',
  401: 'Se requiere autenticación y ha fallado o no se ha proporcionado',
  403: 'El servidor entendió la solicitud pero se niega a autorizarla',
  404: 'No se pudo encontrar el recurso solicitado',
  405: 'El método de solicitud no está permitido para este recurso',
  409: 'La solicitud entra en conflicto con el estado actual del recurso',
  410: 'El recurso solicitado ya no está disponible',
  422: 'La solicitud estaba bien formada pero contiene errores semánticos',
  429: 'El usuario ha enviado demasiadas solicitudes en un período de tiempo determinado',

  // 5xx Server Error
  500: 'El servidor encontró una condición inesperada',
  501: 'El servidor no soporta la funcionalidad requerida',
  502: 'El servidor recibió una respuesta inválida del servidor upstream',
  503: 'El servidor no está disponible actualmente',
  504: 'El servidor no recibió una respuesta oportuna del upstream',
};
