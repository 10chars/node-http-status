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
export interface HttpStatus {
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
  partialContent: createResponse(
    206,
    'PARTIAL_CONTENT',
    'The server is delivering only part of the resource due to a range header sent by the client',
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
  temporaryRedirect: createResponse(
    307,
    'TEMPORARY_REDIRECT',
    'The request should be repeated with another URI but future requests should still use the original URI',
  ),
  permanentRedirect: createResponse(
    308,
    'PERMANENT_REDIRECT',
    'The request and all future requests should be repeated using another URI',
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
  notAcceptable: createResponse(
    406,
    'NOT_ACCEPTABLE',
    'The requested resource is capable of generating only content not acceptable according to the Accept headers',
  ),
  requestTimeout: createResponse(
    408,
    'REQUEST_TIMEOUT',
    'The server timed out waiting for the request',
  ),
  conflict: createResponse(
    409,
    'CONFLICT',
    'The request conflicts with the current state of the resource',
  ),
  unsupportedMediaType: createResponse(
    415,
    'UNSUPPORTED_MEDIA_TYPE',
    'The request entity has a media type which the server or resource does not support',
  ),
  rangeNotSatisfiable: createResponse(
    416,
    'RANGE_NOT_SATISFIABLE',
    'The client has asked for a portion of the file but the server cannot supply that portion',
  ),
  expectationFailed: createResponse(
    417,
    'EXPECTATION_FAILED',
    'The server cannot meet the requirements of the Expect request-header field',
  ),
  imATeapot: createResponse(
    418,
    'IM_A_TEAPOT',
    "Any attempt to brew coffee with a teapot should result in the error code 418 I'm a teapot",
  ),
  gone: createResponse(
    410,
    'GONE',
    'The requested resource is no longer available',
  ),
  lengthRequired: createResponse(
    411,
    'LENGTH_REQUIRED',
    'The request did not specify the length of its content which is required by the requested resource',
  ),
  preconditionFailed: createResponse(
    412,
    'PRECONDITION_FAILED',
    'The server does not meet one of the preconditions that the requester put on the request',
  ),
  payloadTooLarge: createResponse(
    413,
    'PAYLOAD_TOO_LARGE',
    'The request is larger than the server is willing or able to process',
  ),
  uriTooLong: createResponse(
    414,
    'URI_TOO_LONG',
    'The URI provided was too long for the server to process',
  ),
  unprocessableEntity: createResponse(
    422,
    'UNPROCESSABLE_ENTITY',
    'The request was well-formed but contains semantic errors',
  ),
  upgradeRequired: createResponse(
    426,
    'UPGRADE_REQUIRED',
    'The client should switch to a different protocol such as TLS/1.0 given in the Upgrade header field',
  ),
  preconditionRequired: createResponse(
    428,
    'PRECONDITION_REQUIRED',
    'The origin server requires the request to be conditional',
  ),
  tooManyRequests: createResponse(
    429,
    'TOO_MANY_REQUESTS',
    'The user has sent too many requests in a given amount of time',
  ),
  requestHeaderFieldsTooLarge: createResponse(
    431,
    'REQUEST_HEADER_FIELDS_TOO_LARGE',
    'The server is unwilling to process the request because either an individual header field or all the header fields collectively are too large',
  ),
  unavailableForLegalReasons: createResponse(
    451,
    'UNAVAILABLE_FOR_LEGAL_REASONS',
    'A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource',
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
  httpVersionNotSupported: createResponse(
    505,
    'HTTP_VERSION_NOT_SUPPORTED',
    'The server does not support the HTTP protocol version used in the request',
  ),
  networkAuthenticationRequired: createResponse(
    511,
    'NETWORK_AUTHENTICATION_REQUIRED',
    'The client needs to authenticate to gain network access',
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
export interface HttpStatusObject {
  // camelCase properties
  ok: HttpStatus;
  created: HttpStatus;
  accepted: HttpStatus;
  noContent: HttpStatus;
  partialContent: HttpStatus;
  moved: HttpStatus;
  found: HttpStatus;
  notModified: HttpStatus;
  temporaryRedirect: HttpStatus;
  permanentRedirect: HttpStatus;
  badRequest: HttpStatus;
  unauthorized: HttpStatus;
  forbidden: HttpStatus;
  notFound: HttpStatus;
  methodNotAllowed: HttpStatus;
  notAcceptable: HttpStatus;
  requestTimeout: HttpStatus;
  conflict: HttpStatus;
  gone: HttpStatus;
  lengthRequired: HttpStatus;
  preconditionFailed: HttpStatus;
  payloadTooLarge: HttpStatus;
  uriTooLong: HttpStatus;
  unsupportedMediaType: HttpStatus;
  rangeNotSatisfiable: HttpStatus;
  expectationFailed: HttpStatus;
  imATeapot: HttpStatus;
  unprocessableEntity: HttpStatus;
  upgradeRequired: HttpStatus;
  preconditionRequired: HttpStatus;
  tooManyRequests: HttpStatus;
  requestHeaderFieldsTooLarge: HttpStatus;
  unavailableForLegalReasons: HttpStatus;
  internalServerError: HttpStatus;
  notImplemented: HttpStatus;
  badGateway: HttpStatus;
  serviceUnavailable: HttpStatus;
  gatewayTimeout: HttpStatus;
  httpVersionNotSupported: HttpStatus;
  networkAuthenticationRequired: HttpStatus;

  // UPPERCASE aliases
  OK: HttpStatus;
  CREATED: HttpStatus;
  ACCEPTED: HttpStatus;
  NO_CONTENT: HttpStatus;
  PARTIAL_CONTENT: HttpStatus;
  MOVED_PERMANENTLY: HttpStatus;
  FOUND: HttpStatus;
  NOT_MODIFIED: HttpStatus;
  TEMPORARY_REDIRECT: HttpStatus;
  PERMANENT_REDIRECT: HttpStatus;
  BAD_REQUEST: HttpStatus;
  UNAUTHORIZED: HttpStatus;
  FORBIDDEN: HttpStatus;
  NOT_FOUND: HttpStatus;
  METHOD_NOT_ALLOWED: HttpStatus;
  NOT_ACCEPTABLE: HttpStatus;
  REQUEST_TIMEOUT: HttpStatus;
  CONFLICT: HttpStatus;
  GONE: HttpStatus;
  LENGTH_REQUIRED: HttpStatus;
  PRECONDITION_FAILED: HttpStatus;
  PAYLOAD_TOO_LARGE: HttpStatus;
  URI_TOO_LONG: HttpStatus;
  UNSUPPORTED_MEDIA_TYPE: HttpStatus;
  RANGE_NOT_SATISFIABLE: HttpStatus;
  EXPECTATION_FAILED: HttpStatus;
  IM_A_TEAPOT: HttpStatus;
  UNPROCESSABLE_ENTITY: HttpStatus;
  UPGRADE_REQUIRED: HttpStatus;
  PRECONDITION_REQUIRED: HttpStatus;
  TOO_MANY_REQUESTS: HttpStatus;
  REQUEST_HEADER_FIELDS_TOO_LARGE: HttpStatus;
  UNAVAILABLE_FOR_LEGAL_REASONS: HttpStatus;
  INTERNAL_SERVER_ERROR: HttpStatus;
  NOT_IMPLEMENTED: HttpStatus;
  BAD_GATEWAY: HttpStatus;
  SERVICE_UNAVAILABLE: HttpStatus;
  GATEWAY_TIMEOUT: HttpStatus;
  HTTP_VERSION_NOT_SUPPORTED: HttpStatus;
  NETWORK_AUTHENTICATION_REQUIRED: HttpStatus;

  // Numeric index signatures
  [200]: HttpStatus;
  [201]: HttpStatus;
  [202]: HttpStatus;
  [204]: HttpStatus;
  [206]: HttpStatus;
  [301]: HttpStatus;
  [302]: HttpStatus;
  [304]: HttpStatus;
  [307]: HttpStatus;
  [308]: HttpStatus;
  [400]: HttpStatus;
  [401]: HttpStatus;
  [403]: HttpStatus;
  [404]: HttpStatus;
  [405]: HttpStatus;
  [406]: HttpStatus;
  [408]: HttpStatus;
  [409]: HttpStatus;
  [410]: HttpStatus;
  [411]: HttpStatus;
  [412]: HttpStatus;
  [413]: HttpStatus;
  [414]: HttpStatus;
  [415]: HttpStatus;
  [416]: HttpStatus;
  [417]: HttpStatus;
  [418]: HttpStatus;
  [422]: HttpStatus;
  [426]: HttpStatus;
  [428]: HttpStatus;
  [429]: HttpStatus;
  [431]: HttpStatus;
  [451]: HttpStatus;
  [500]: HttpStatus;
  [501]: HttpStatus;
  [502]: HttpStatus;
  [503]: HttpStatus;
  [504]: HttpStatus;
  [505]: HttpStatus;
  [511]: HttpStatus;
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
  PARTIAL_CONTENT: responses.partialContent,
  MOVED_PERMANENTLY: responses.moved,
  FOUND: responses.found,
  NOT_MODIFIED: responses.notModified,
  TEMPORARY_REDIRECT: responses.temporaryRedirect,
  PERMANENT_REDIRECT: responses.permanentRedirect,
  BAD_REQUEST: responses.badRequest,
  UNAUTHORIZED: responses.unauthorized,
  FORBIDDEN: responses.forbidden,
  NOT_FOUND: responses.notFound,
  METHOD_NOT_ALLOWED: responses.methodNotAllowed,
  NOT_ACCEPTABLE: responses.notAcceptable,
  REQUEST_TIMEOUT: responses.requestTimeout,
  CONFLICT: responses.conflict,
  GONE: responses.gone,
  LENGTH_REQUIRED: responses.lengthRequired,
  PRECONDITION_FAILED: responses.preconditionFailed,
  PAYLOAD_TOO_LARGE: responses.payloadTooLarge,
  URI_TOO_LONG: responses.uriTooLong,
  UNSUPPORTED_MEDIA_TYPE: responses.unsupportedMediaType,
  RANGE_NOT_SATISFIABLE: responses.rangeNotSatisfiable,
  EXPECTATION_FAILED: responses.expectationFailed,
  IM_A_TEAPOT: responses.imATeapot,
  UNPROCESSABLE_ENTITY: responses.unprocessableEntity,
  UPGRADE_REQUIRED: responses.upgradeRequired,
  PRECONDITION_REQUIRED: responses.preconditionRequired,
  TOO_MANY_REQUESTS: responses.tooManyRequests,
  REQUEST_HEADER_FIELDS_TOO_LARGE: responses.requestHeaderFieldsTooLarge,
  UNAVAILABLE_FOR_LEGAL_REASONS: responses.unavailableForLegalReasons,
  INTERNAL_SERVER_ERROR: responses.internalServerError,
  NOT_IMPLEMENTED: responses.notImplemented,
  BAD_GATEWAY: responses.badGateway,
  SERVICE_UNAVAILABLE: responses.serviceUnavailable,
  GATEWAY_TIMEOUT: responses.gatewayTimeout,
  HTTP_VERSION_NOT_SUPPORTED: responses.httpVersionNotSupported,
  NETWORK_AUTHENTICATION_REQUIRED: responses.networkAuthenticationRequired,

  // Numeric aliases
  200: responses.ok,
  201: responses.created,
  202: responses.accepted,
  204: responses.noContent,
  206: responses.partialContent,
  301: responses.moved,
  302: responses.found,
  304: responses.notModified,
  307: responses.temporaryRedirect,
  308: responses.permanentRedirect,
  400: responses.badRequest,
  401: responses.unauthorized,
  403: responses.forbidden,
  404: responses.notFound,
  405: responses.methodNotAllowed,
  406: responses.notAcceptable,
  408: responses.requestTimeout,
  409: responses.conflict,
  410: responses.gone,
  411: responses.lengthRequired,
  412: responses.preconditionFailed,
  413: responses.payloadTooLarge,
  414: responses.uriTooLong,
  415: responses.unsupportedMediaType,
  416: responses.rangeNotSatisfiable,
  417: responses.expectationFailed,
  418: responses.imATeapot,
  422: responses.unprocessableEntity,
  426: responses.upgradeRequired,
  428: responses.preconditionRequired,
  429: responses.tooManyRequests,
  431: responses.requestHeaderFieldsTooLarge,
  451: responses.unavailableForLegalReasons,
  500: responses.internalServerError,
  501: responses.notImplemented,
  502: responses.badGateway,
  503: responses.serviceUnavailable,
  504: responses.gatewayTimeout,
  505: responses.httpVersionNotSupported,
  511: responses.networkAuthenticationRequired,
};

/**
 * Custom formatter function type for transforming HTTP status objects
 *
 * @template T The custom return type shape
 * @param status The numeric HTTP status code
 * @param code The standard HTTP status code name
 * @param message Human-readable description of the status
 * @returns Custom formatted object of type T
 */
export type HttpStatusFormatter<T = unknown> = (
  status: number,
  code: string,
  message: string,
) => T;

/**
 * Custom HTTP status object type with user-defined shape
 *
 * @template T The custom return type shape
 */
export type CustomHttpStatusObject<T> = {
  // camelCase properties
  ok: T;
  created: T;
  accepted: T;
  noContent: T;
  partialContent: T;
  moved: T;
  found: T;
  notModified: T;
  temporaryRedirect: T;
  permanentRedirect: T;
  badRequest: T;
  unauthorized: T;
  forbidden: T;
  notFound: T;
  methodNotAllowed: T;
  notAcceptable: T;
  requestTimeout: T;
  conflict: T;
  gone: T;
  lengthRequired: T;
  preconditionFailed: T;
  payloadTooLarge: T;
  uriTooLong: T;
  unsupportedMediaType: T;
  rangeNotSatisfiable: T;
  expectationFailed: T;
  imATeapot: T;
  unprocessableEntity: T;
  upgradeRequired: T;
  preconditionRequired: T;
  tooManyRequests: T;
  requestHeaderFieldsTooLarge: T;
  unavailableForLegalReasons: T;
  internalServerError: T;
  notImplemented: T;
  badGateway: T;
  serviceUnavailable: T;
  gatewayTimeout: T;
  httpVersionNotSupported: T;
  networkAuthenticationRequired: T;

  // UPPERCASE aliases
  OK: T;
  CREATED: T;
  ACCEPTED: T;
  NO_CONTENT: T;
  PARTIAL_CONTENT: T;
  MOVED_PERMANENTLY: T;
  FOUND: T;
  NOT_MODIFIED: T;
  TEMPORARY_REDIRECT: T;
  PERMANENT_REDIRECT: T;
  BAD_REQUEST: T;
  UNAUTHORIZED: T;
  FORBIDDEN: T;
  NOT_FOUND: T;
  METHOD_NOT_ALLOWED: T;
  NOT_ACCEPTABLE: T;
  REQUEST_TIMEOUT: T;
  CONFLICT: T;
  GONE: T;
  LENGTH_REQUIRED: T;
  PRECONDITION_FAILED: T;
  PAYLOAD_TOO_LARGE: T;
  URI_TOO_LONG: T;
  UNSUPPORTED_MEDIA_TYPE: T;
  RANGE_NOT_SATISFIABLE: T;
  EXPECTATION_FAILED: T;
  IM_A_TEAPOT: T;
  UNPROCESSABLE_ENTITY: T;
  UPGRADE_REQUIRED: T;
  PRECONDITION_REQUIRED: T;
  TOO_MANY_REQUESTS: T;
  REQUEST_HEADER_FIELDS_TOO_LARGE: T;
  UNAVAILABLE_FOR_LEGAL_REASONS: T;
  INTERNAL_SERVER_ERROR: T;
  NOT_IMPLEMENTED: T;
  BAD_GATEWAY: T;
  SERVICE_UNAVAILABLE: T;
  GATEWAY_TIMEOUT: T;
  HTTP_VERSION_NOT_SUPPORTED: T;
  NETWORK_AUTHENTICATION_REQUIRED: T;

  // Numeric index signatures
  [200]: T;
  [201]: T;
  [202]: T;
  [204]: T;
  [206]: T;
  [301]: T;
  [302]: T;
  [304]: T;
  [307]: T;
  [308]: T;
  [400]: T;
  [401]: T;
  [403]: T;
  [404]: T;
  [405]: T;
  [406]: T;
  [408]: T;
  [409]: T;
  [410]: T;
  [411]: T;
  [412]: T;
  [413]: T;
  [414]: T;
  [415]: T;
  [416]: T;
  [417]: T;
  [418]: T;
  [422]: T;
  [426]: T;
  [428]: T;
  [429]: T;
  [431]: T;
  [451]: T;
  [500]: T;
  [501]: T;
  [502]: T;
  [503]: T;
  [504]: T;
  [505]: T;
  [511]: T;
};

/**
 * Creates a custom HTTP status object with user-defined response shape.
 *
 * This allows you to transform the default `{ status, code, message }` format
 * into any custom shape you need for your application.
 *
 * @template T The custom return type shape
 * @param formatter Function that transforms status, code, and message into your desired format
 * @returns Custom HTTP status object with all the same access patterns as the default
 *
 * @example
 * ```typescript
 * // Create custom format for your API
 * const customHttp = createCustomHttpStatus((status, code, message) => ({
 *   response: {
 *     error: code,
 *     message: message
 *   },
 *   statusCode: status
 * }));
 *
 * console.log(customHttp.internalServerError);
 * // { response: { error: 'INTERNAL_SERVER_ERROR', message: '...' }, statusCode: 500 }
 *
 * // All access patterns work
 * customHttp.ok === customHttp.OK === customHttp[200] // true (same object reference)
 * ```
 *
 * @example
 * ```typescript
 * // Create format compatible with different frameworks
 * const expressFormat = createCustomHttpStatus((status, code, message) => ({
 *   status,
 *   error: {
 *     code: code,
 *     detail: message
 *   }
 * }));
 *
 * // Use in Express error handler
 * app.use((err, req, res, next) => {
 *   const errorResponse = expressFormat.internalServerError;
 *   res.status(errorResponse.status).json(errorResponse.error);
 * });
 * ```
 */
export const createCustomHttpStatus = <T>(
  formatter: HttpStatusFormatter<T>,
): CustomHttpStatusObject<T> => {
  // Transform all base responses using the custom formatter
  const customResponses = {
    // 2xx Success
    ok: formatter(200, 'OK', 'The request has succeeded'),
    created: formatter(
      201,
      'CREATED',
      'The request has been fulfilled and resulted in a new resource',
    ),
    accepted: formatter(
      202,
      'ACCEPTED',
      'The request has been accepted for processing',
    ),
    noContent: formatter(
      204,
      'NO_CONTENT',
      'The server successfully processed the request but returns no content',
    ),
    partialContent: formatter(
      206,
      'PARTIAL_CONTENT',
      'The server is delivering only part of the resource due to a range header sent by the client',
    ),

    // 3xx Redirection
    moved: formatter(
      301,
      'MOVED_PERMANENTLY',
      'The requested resource has been permanently moved',
    ),
    found: formatter(
      302,
      'FOUND',
      'The requested resource temporarily resides under a different URI',
    ),
    notModified: formatter(
      304,
      'NOT_MODIFIED',
      'The resource has not been modified since last requested',
    ),
    temporaryRedirect: formatter(
      307,
      'TEMPORARY_REDIRECT',
      'The request should be repeated with another URI but future requests should still use the original URI',
    ),
    permanentRedirect: formatter(
      308,
      'PERMANENT_REDIRECT',
      'The request and all future requests should be repeated using another URI',
    ),

    // 4xx Client Error
    badRequest: formatter(
      400,
      'BAD_REQUEST',
      'The server cannot process the request due to client error',
    ),
    unauthorized: formatter(
      401,
      'UNAUTHORIZED',
      'Authentication is required and has failed or not been provided',
    ),
    forbidden: formatter(
      403,
      'FORBIDDEN',
      'The server understood the request but refuses to authorize it',
    ),
    notFound: formatter(
      404,
      'NOT_FOUND',
      'The requested resource could not be found',
    ),
    methodNotAllowed: formatter(
      405,
      'METHOD_NOT_ALLOWED',
      'The request method is not allowed for this resource',
    ),
    notAcceptable: formatter(
      406,
      'NOT_ACCEPTABLE',
      'The requested resource is capable of generating only content not acceptable according to the Accept headers',
    ),
    requestTimeout: formatter(
      408,
      'REQUEST_TIMEOUT',
      'The server timed out waiting for the request',
    ),
    conflict: formatter(
      409,
      'CONFLICT',
      'The request conflicts with the current state of the resource',
    ),
    gone: formatter(
      410,
      'GONE',
      'The requested resource is no longer available',
    ),
    lengthRequired: formatter(
      411,
      'LENGTH_REQUIRED',
      'The request did not specify the length of its content which is required by the requested resource',
    ),
    preconditionFailed: formatter(
      412,
      'PRECONDITION_FAILED',
      'The server does not meet one of the preconditions that the requester put on the request',
    ),
    payloadTooLarge: formatter(
      413,
      'PAYLOAD_TOO_LARGE',
      'The request is larger than the server is willing or able to process',
    ),
    uriTooLong: formatter(
      414,
      'URI_TOO_LONG',
      'The URI provided was too long for the server to process',
    ),
    unsupportedMediaType: formatter(
      415,
      'UNSUPPORTED_MEDIA_TYPE',
      'The request entity has a media type which the server or resource does not support',
    ),
    rangeNotSatisfiable: formatter(
      416,
      'RANGE_NOT_SATISFIABLE',
      'The client has asked for a portion of the file but the server cannot supply that portion',
    ),
    expectationFailed: formatter(
      417,
      'EXPECTATION_FAILED',
      'The server cannot meet the requirements of the Expect request-header field',
    ),
    imATeapot: formatter(
      418,
      'IM_A_TEAPOT',
      "Any attempt to brew coffee with a teapot should result in the error code 418 I'm a teapot",
    ),
    unprocessableEntity: formatter(
      422,
      'UNPROCESSABLE_ENTITY',
      'The request was well-formed but contains semantic errors',
    ),
    upgradeRequired: formatter(
      426,
      'UPGRADE_REQUIRED',
      'The client should switch to a different protocol such as TLS/1.0 given in the Upgrade header field',
    ),
    preconditionRequired: formatter(
      428,
      'PRECONDITION_REQUIRED',
      'The origin server requires the request to be conditional',
    ),
    tooManyRequests: formatter(
      429,
      'TOO_MANY_REQUESTS',
      'The user has sent too many requests in a given amount of time',
    ),
    requestHeaderFieldsTooLarge: formatter(
      431,
      'REQUEST_HEADER_FIELDS_TOO_LARGE',
      'The server is unwilling to process the request because either an individual header field or all the header fields collectively are too large',
    ),
    unavailableForLegalReasons: formatter(
      451,
      'UNAVAILABLE_FOR_LEGAL_REASONS',
      'A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource',
    ),

    // 5xx Server Error
    internalServerError: formatter(
      500,
      'INTERNAL_SERVER_ERROR',
      'The server encountered an unexpected condition',
    ),
    notImplemented: formatter(
      501,
      'NOT_IMPLEMENTED',
      'The server does not support the functionality required',
    ),
    badGateway: formatter(
      502,
      'BAD_GATEWAY',
      'The server received an invalid response from the upstream server',
    ),
    serviceUnavailable: formatter(
      503,
      'SERVICE_UNAVAILABLE',
      'The server is currently unavailable',
    ),
    gatewayTimeout: formatter(
      504,
      'GATEWAY_TIMEOUT',
      'The server did not receive a timely response from upstream',
    ),
    httpVersionNotSupported: formatter(
      505,
      'HTTP_VERSION_NOT_SUPPORTED',
      'The server does not support the HTTP protocol version used in the request',
    ),
    networkAuthenticationRequired: formatter(
      511,
      'NETWORK_AUTHENTICATION_REQUIRED',
      'The client needs to authenticate to gain network access',
    ),
  };

  // Create the full custom status object with all aliases
  const customHttpStatus: CustomHttpStatusObject<T> = {
    ...customResponses,

    // UPPERCASE aliases
    OK: customResponses.ok,
    CREATED: customResponses.created,
    ACCEPTED: customResponses.accepted,
    NO_CONTENT: customResponses.noContent,
    PARTIAL_CONTENT: customResponses.partialContent,
    MOVED_PERMANENTLY: customResponses.moved,
    FOUND: customResponses.found,
    NOT_MODIFIED: customResponses.notModified,
    TEMPORARY_REDIRECT: customResponses.temporaryRedirect,
    PERMANENT_REDIRECT: customResponses.permanentRedirect,
    BAD_REQUEST: customResponses.badRequest,
    UNAUTHORIZED: customResponses.unauthorized,
    FORBIDDEN: customResponses.forbidden,
    NOT_FOUND: customResponses.notFound,
    METHOD_NOT_ALLOWED: customResponses.methodNotAllowed,
    NOT_ACCEPTABLE: customResponses.notAcceptable,
    REQUEST_TIMEOUT: customResponses.requestTimeout,
    CONFLICT: customResponses.conflict,
    GONE: customResponses.gone,
    LENGTH_REQUIRED: customResponses.lengthRequired,
    PRECONDITION_FAILED: customResponses.preconditionFailed,
    PAYLOAD_TOO_LARGE: customResponses.payloadTooLarge,
    URI_TOO_LONG: customResponses.uriTooLong,
    UNSUPPORTED_MEDIA_TYPE: customResponses.unsupportedMediaType,
    RANGE_NOT_SATISFIABLE: customResponses.rangeNotSatisfiable,
    EXPECTATION_FAILED: customResponses.expectationFailed,
    IM_A_TEAPOT: customResponses.imATeapot,
    UNPROCESSABLE_ENTITY: customResponses.unprocessableEntity,
    UPGRADE_REQUIRED: customResponses.upgradeRequired,
    PRECONDITION_REQUIRED: customResponses.preconditionRequired,
    TOO_MANY_REQUESTS: customResponses.tooManyRequests,
    REQUEST_HEADER_FIELDS_TOO_LARGE:
      customResponses.requestHeaderFieldsTooLarge,
    UNAVAILABLE_FOR_LEGAL_REASONS: customResponses.unavailableForLegalReasons,
    INTERNAL_SERVER_ERROR: customResponses.internalServerError,
    NOT_IMPLEMENTED: customResponses.notImplemented,
    BAD_GATEWAY: customResponses.badGateway,
    SERVICE_UNAVAILABLE: customResponses.serviceUnavailable,
    GATEWAY_TIMEOUT: customResponses.gatewayTimeout,
    HTTP_VERSION_NOT_SUPPORTED: customResponses.httpVersionNotSupported,
    NETWORK_AUTHENTICATION_REQUIRED:
      customResponses.networkAuthenticationRequired,

    // Numeric aliases
    200: customResponses.ok,
    201: customResponses.created,
    202: customResponses.accepted,
    204: customResponses.noContent,
    206: customResponses.partialContent,
    301: customResponses.moved,
    302: customResponses.found,
    304: customResponses.notModified,
    307: customResponses.temporaryRedirect,
    308: customResponses.permanentRedirect,
    400: customResponses.badRequest,
    401: customResponses.unauthorized,
    403: customResponses.forbidden,
    404: customResponses.notFound,
    405: customResponses.methodNotAllowed,
    406: customResponses.notAcceptable,
    408: customResponses.requestTimeout,
    409: customResponses.conflict,
    410: customResponses.gone,
    411: customResponses.lengthRequired,
    412: customResponses.preconditionFailed,
    413: customResponses.payloadTooLarge,
    414: customResponses.uriTooLong,
    415: customResponses.unsupportedMediaType,
    416: customResponses.rangeNotSatisfiable,
    417: customResponses.expectationFailed,
    418: customResponses.imATeapot,
    422: customResponses.unprocessableEntity,
    426: customResponses.upgradeRequired,
    428: customResponses.preconditionRequired,
    429: customResponses.tooManyRequests,
    431: customResponses.requestHeaderFieldsTooLarge,
    451: customResponses.unavailableForLegalReasons,
    500: customResponses.internalServerError,
    501: customResponses.notImplemented,
    502: customResponses.badGateway,
    503: customResponses.serviceUnavailable,
    504: customResponses.gatewayTimeout,
    505: customResponses.httpVersionNotSupported,
    511: customResponses.networkAuthenticationRequired,
  };

  return customHttpStatus;
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
