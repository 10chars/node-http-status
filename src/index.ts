/**
 * @fileoverview A simple and intuitive HTTP response status code library for Node.js.
 * Provides easy access to common HTTP status codes with multiple alias options.
 *
 * @author 10chars
 * @version 1.0.0
 */

/**
 * Represents an HTTP response status with status code, name, and description.
 *
 * @interface HttpStatus
 * @example
 * ```typescript
 * const response: HttpStatus = {
 *   status: 200,
 *   code: 'OK',
 *   message: 'The request has succeeded'
 * };
 * ```
 */
interface HttpStatus {
  /** The numeric HTTP status code (e.g., 200, 404, 500) */
  status: number;
  /** The standard HTTP status code name (e.g., 'OK', 'NOT_FOUND', 'INTERNAL_SERVER_ERROR') */
  code: string;
  /** A human-readable description of the HTTP status */
  message: string;
}

/**
 * Helper function to create HTTP response objects with consistent structure.
 *
 * @param status - The numeric HTTP status code
 * @param code - The standard HTTP status code name
 * @param message - Human-readable description of the status
 * @returns An HttpStatus object with the provided values
 *
 * @example
 * ```typescript
 * const okResponse = createResponse(200, 'OK', 'Request successful');
 * // Returns: { status: 200, code: 'OK', message: 'Request successful' }
 * ```
 *
 * @internal
 */
const createResponse = (
  status: number,
  code: string,
  message: string,
): HttpStatus => ({
  status,
  code,
  message,
});

/**
 * Base HTTP response objects for common status codes.
 * Contains camelCase properties for the most commonly used HTTP status codes.
 *
 * @internal
 */
const responses = {
  // 2xx Success
  ok: createResponse(200, 'OK', 'The request has succeeded'),
  created: createResponse(
    201,
    'CREATED',
    'The request has been fulfilled and resulted in a new resource',
  ),
  accepted: createResponse(
    202,
    'ACCEPTED',
    'The request has been accepted for processing',
  ),
  noContent: createResponse(
    204,
    'NO_CONTENT',
    'The server successfully processed the request but returns no content',
  ),

  // 3xx Redirection
  moved: createResponse(
    301,
    'MOVED_PERMANENTLY',
    'The requested resource has been permanently moved',
  ),
  found: createResponse(
    302,
    'FOUND',
    'The requested resource temporarily resides under a different URI',
  ),
  notModified: createResponse(
    304,
    'NOT_MODIFIED',
    'The resource has not been modified since last requested',
  ),

  // 4xx Client Error
  badRequest: createResponse(
    400,
    'BAD_REQUEST',
    'The server cannot process the request due to client error',
  ),
  unauthorized: createResponse(
    401,
    'UNAUTHORIZED',
    'Authentication is required and has failed or not been provided',
  ),
  forbidden: createResponse(
    403,
    'FORBIDDEN',
    'The server understood the request but refuses to authorize it',
  ),
  notFound: createResponse(
    404,
    'NOT_FOUND',
    'The requested resource could not be found',
  ),
  methodNotAllowed: createResponse(
    405,
    'METHOD_NOT_ALLOWED',
    'The request method is not allowed for this resource',
  ),
  conflict: createResponse(
    409,
    'CONFLICT',
    'The request conflicts with the current state of the resource',
  ),
  gone: createResponse(
    410,
    'GONE',
    'The requested resource is no longer available',
  ),
  unprocessableEntity: createResponse(
    422,
    'UNPROCESSABLE_ENTITY',
    'The request was well-formed but contains semantic errors',
  ),
  tooManyRequests: createResponse(
    429,
    'TOO_MANY_REQUESTS',
    'The user has sent too many requests in a given amount of time',
  ),

  // 5xx Server Error
  internalServerError: createResponse(
    500,
    'INTERNAL_SERVER_ERROR',
    'The server encountered an unexpected condition',
  ),
  notImplemented: createResponse(
    501,
    'NOT_IMPLEMENTED',
    'The server does not support the functionality required',
  ),
  badGateway: createResponse(
    502,
    'BAD_GATEWAY',
    'The server received an invalid response from the upstream server',
  ),
  serviceUnavailable: createResponse(
    503,
    'SERVICE_UNAVAILABLE',
    'The server is currently unavailable',
  ),
  gatewayTimeout: createResponse(
    504,
    'GATEWAY_TIMEOUT',
    'The server did not receive a timely response from upstream',
  ),
};

/**
 * Complete type definition for the httpStatus object including all aliases.
 * Supports three ways to access HTTP status responses:
 * - camelCase properties (e.g., `ok`, `notFound`)
 * - UPPERCASE properties (e.g., `OK`, `NOT_FOUND`)
 * - Numeric indices (e.g., `[200]`, `[404]`)
 *
 * @interface HttpStatusObject
 *
 * @example
 * ```typescript
 * // All three access methods return the same response object:
 * const response1 = httpStatus.ok;           // camelCase
 * const response2 = httpStatus.OK;           // UPPERCASE
 * const response3 = httpStatus[200];         // numeric
 *
 * console.log(response1 === response2 === response3); // true
 * ```
 */
interface HttpStatusObject {
  // camelCase properties
  ok: HttpStatus;
  created: HttpStatus;
  accepted: HttpStatus;
  noContent: HttpStatus;
  moved: HttpStatus;
  found: HttpStatus;
  notModified: HttpStatus;
  badRequest: HttpStatus;
  unauthorized: HttpStatus;
  forbidden: HttpStatus;
  notFound: HttpStatus;
  methodNotAllowed: HttpStatus;
  conflict: HttpStatus;
  gone: HttpStatus;
  unprocessableEntity: HttpStatus;
  tooManyRequests: HttpStatus;
  internalServerError: HttpStatus;
  notImplemented: HttpStatus;
  badGateway: HttpStatus;
  serviceUnavailable: HttpStatus;
  gatewayTimeout: HttpStatus;

  // UPPERCASE aliases
  OK: HttpStatus;
  CREATED: HttpStatus;
  ACCEPTED: HttpStatus;
  NO_CONTENT: HttpStatus;
  MOVED_PERMANENTLY: HttpStatus;
  FOUND: HttpStatus;
  NOT_MODIFIED: HttpStatus;
  BAD_REQUEST: HttpStatus;
  UNAUTHORIZED: HttpStatus;
  FORBIDDEN: HttpStatus;
  NOT_FOUND: HttpStatus;
  METHOD_NOT_ALLOWED: HttpStatus;
  CONFLICT: HttpStatus;
  GONE: HttpStatus;
  UNPROCESSABLE_ENTITY: HttpStatus;
  TOO_MANY_REQUESTS: HttpStatus;
  INTERNAL_SERVER_ERROR: HttpStatus;
  NOT_IMPLEMENTED: HttpStatus;
  BAD_GATEWAY: HttpStatus;
  SERVICE_UNAVAILABLE: HttpStatus;
  GATEWAY_TIMEOUT: HttpStatus;

  // Numeric index signatures
  [200]: HttpStatus;
  [201]: HttpStatus;
  [202]: HttpStatus;
  [204]: HttpStatus;
  [301]: HttpStatus;
  [302]: HttpStatus;
  [304]: HttpStatus;
  [400]: HttpStatus;
  [401]: HttpStatus;
  [403]: HttpStatus;
  [404]: HttpStatus;
  [405]: HttpStatus;
  [409]: HttpStatus;
  [410]: HttpStatus;
  [422]: HttpStatus;
  [429]: HttpStatus;
  [500]: HttpStatus;
  [501]: HttpStatus;
  [502]: HttpStatus;
  [503]: HttpStatus;
  [504]: HttpStatus;
}

/**
 * Main HTTP status object providing easy access to common HTTP status codes.
 *
 * Supports multiple access patterns:
 * - **camelCase**: `httpStatus.ok`, `httpStatus.notFound`
 * - **UPPERCASE**: `httpStatus.OK`, `httpStatus.NOT_FOUND`
 * - **Numeric**: `httpStatus[200]`, `httpStatus[404]`
 *
 * All three methods return the same HttpStatus object with `status`, `code`, and `message` properties.
 *
 * @constant httpStatus
 *
 * @example
 * ```typescript
 * import httpReply from 'node-http-status';
 *
 * // Get a 200 OK response
 * const success = httpStatus.ok;
 * console.log(success); // { status: 200, code: 'OK', message: 'The request has succeeded' }
 *
 * // All access methods are equivalent
 * console.log(httpStatus.ok === httpStatus.OK === httpStatus[200]); // true
 *
 * // Use in Express.js
 * app.get('/api/data', (req, res) => {
 *   res.status(httpStatus.ok.status).json({
 *     ...httpStatus.ok,
 *     data: { message: 'Hello World' }
 *   });
 * });
 *
 * // Handle errors
 * if (userNotFound) {
 *   return res.status(httpStatus.notFound.status).json(httpStatus.notFound);
 * }
 * ```
 *
 * @see {@link HttpStatus} for the structure of individual response objects
 * @see {@link HttpStatusObject} for the complete type definition
 */
const httpStatus: HttpStatusObject = {
  ...responses,

  // UPPERCASE aliases
  OK: responses.ok,
  CREATED: responses.created,
  ACCEPTED: responses.accepted,
  NO_CONTENT: responses.noContent,
  MOVED_PERMANENTLY: responses.moved,
  FOUND: responses.found,
  NOT_MODIFIED: responses.notModified,
  BAD_REQUEST: responses.badRequest,
  UNAUTHORIZED: responses.unauthorized,
  FORBIDDEN: responses.forbidden,
  NOT_FOUND: responses.notFound,
  METHOD_NOT_ALLOWED: responses.methodNotAllowed,
  CONFLICT: responses.conflict,
  GONE: responses.gone,
  UNPROCESSABLE_ENTITY: responses.unprocessableEntity,
  TOO_MANY_REQUESTS: responses.tooManyRequests,
  INTERNAL_SERVER_ERROR: responses.internalServerError,
  NOT_IMPLEMENTED: responses.notImplemented,
  BAD_GATEWAY: responses.badGateway,
  SERVICE_UNAVAILABLE: responses.serviceUnavailable,
  GATEWAY_TIMEOUT: responses.gatewayTimeout,

  // Numeric aliases
  200: responses.ok,
  201: responses.created,
  202: responses.accepted,
  204: responses.noContent,
  301: responses.moved,
  302: responses.found,
  304: responses.notModified,
  400: responses.badRequest,
  401: responses.unauthorized,
  403: responses.forbidden,
  404: responses.notFound,
  405: responses.methodNotAllowed,
  409: responses.conflict,
  410: responses.gone,
  422: responses.unprocessableEntity,
  429: responses.tooManyRequests,
  500: responses.internalServerError,
  501: responses.notImplemented,
  502: responses.badGateway,
  503: responses.serviceUnavailable,
  504: responses.gatewayTimeout,
};

/**
 * Default export of the httpStatus object.
 *
 * @example
 * ```typescript
 * import httpStatus from 'node-http-status';
 * console.log(httpStatus.ok.status); // 200
 * ```
 */
export default httpStatus;
