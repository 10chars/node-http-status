/**
 * English messages for HTTP status codes
 */
export const enMessages = {
  // 2xx Success
  200: 'The request has succeeded',
  201: 'The request has been fulfilled and resulted in a new resource',
  202: 'The request has been accepted for processing',
  204: 'The server successfully processed the request but returns no content',

  // 3xx Redirection
  301: 'The requested resource has been permanently moved',
  302: 'The requested resource temporarily resides under a different URI',
  304: 'The resource has not been modified since last requested',

  // 4xx Client Error
  400: 'The server cannot process the request due to client error',
  401: 'Authentication is required and has failed or not been provided',
  403: 'The server understood the request but refuses to authorize it',
  404: 'The requested resource could not be found',
  405: 'The request method is not allowed for this resource',
  409: 'The request conflicts with the current state of the resource',
  410: 'The requested resource is no longer available',
  422: 'The request was well-formed but contains semantic errors',
  429: 'The user has sent too many requests in a given amount of time',

  // 5xx Server Error
  500: 'The server encountered an unexpected condition',
  501: 'The server does not support the functionality required',
  502: 'The server received an invalid response from the upstream server',
  503: 'The server is currently unavailable',
  504: 'The server did not receive a timely response from upstream',
};
