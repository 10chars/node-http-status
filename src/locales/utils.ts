/**
 * Utility functions for creating localized HTTP responses
 */
import type { HttpStatus, HttpStatusObject } from '../index';

/**
 * Messages map type for localization
 */
export type MessagesMap = Record<number, string>;

/**
 * Creates a localized HTTP status by overriding the message property
 * @param original - The original HTTP status object
 * @param message - The localized message
 * @returns A new HTTP status object with the localized message
 */
export const localizeStatus = (
  original: HttpStatus,
  message: string,
): HttpStatus => ({
  ...original,
  message,
});

/**
 * Creates a localized HTTP status object by overriding messages for each status code
 * @param originalStatuses - The original HTTP status object
 * @param messages - Map of status codes to localized messages
 * @returns A new HTTP status object with localized messages
 */
export const localizeHttpStatus = (
  originalStatuses: HttpStatusObject,
  messages: MessagesMap,
): HttpStatusObject => {
  // Create localized statuses by overriding messages
  const localizedStatuses = {
    // 2xx Success
    ok: localizeStatus(originalStatuses.ok, messages[200]),
    created: localizeStatus(originalStatuses.created, messages[201]),
    accepted: localizeStatus(originalStatuses.accepted, messages[202]),
    noContent: localizeStatus(originalStatuses.noContent, messages[204]),
    partialContent: localizeStatus(
      originalStatuses.partialContent,
      messages[206],
    ),

    // 3xx Redirection
    moved: localizeStatus(originalStatuses.moved, messages[301]),
    found: localizeStatus(originalStatuses.found, messages[302]),
    notModified: localizeStatus(originalStatuses.notModified, messages[304]),
    temporaryRedirect: localizeStatus(
      originalStatuses.temporaryRedirect,
      messages[307],
    ),
    permanentRedirect: localizeStatus(
      originalStatuses.permanentRedirect,
      messages[308],
    ),

    // 4xx Client Error
    badRequest: localizeStatus(originalStatuses.badRequest, messages[400]),
    unauthorized: localizeStatus(originalStatuses.unauthorized, messages[401]),
    forbidden: localizeStatus(originalStatuses.forbidden, messages[403]),
    notFound: localizeStatus(originalStatuses.notFound, messages[404]),
    methodNotAllowed: localizeStatus(
      originalStatuses.methodNotAllowed,
      messages[405],
    ),
    notAcceptable: localizeStatus(
      originalStatuses.notAcceptable,
      messages[406],
    ),
    requestTimeout: localizeStatus(
      originalStatuses.requestTimeout,
      messages[408],
    ),
    conflict: localizeStatus(originalStatuses.conflict, messages[409]),
    gone: localizeStatus(originalStatuses.gone, messages[410]),
    lengthRequired: localizeStatus(
      originalStatuses.lengthRequired,
      messages[411],
    ),
    preconditionFailed: localizeStatus(
      originalStatuses.preconditionFailed,
      messages[412],
    ),
    payloadTooLarge: localizeStatus(
      originalStatuses.payloadTooLarge,
      messages[413],
    ),
    uriTooLong: localizeStatus(originalStatuses.uriTooLong, messages[414]),
    unsupportedMediaType: localizeStatus(
      originalStatuses.unsupportedMediaType,
      messages[415],
    ),
    rangeNotSatisfiable: localizeStatus(
      originalStatuses.rangeNotSatisfiable,
      messages[416],
    ),
    expectationFailed: localizeStatus(
      originalStatuses.expectationFailed,
      messages[417],
    ),
    imATeapot: localizeStatus(originalStatuses.imATeapot, messages[418]),
    unprocessableEntity: localizeStatus(
      originalStatuses.unprocessableEntity,
      messages[422],
    ),
    upgradeRequired: localizeStatus(
      originalStatuses.upgradeRequired,
      messages[426],
    ),
    preconditionRequired: localizeStatus(
      originalStatuses.preconditionRequired,
      messages[428],
    ),
    tooManyRequests: localizeStatus(
      originalStatuses.tooManyRequests,
      messages[429],
    ),
    requestHeaderFieldsTooLarge: localizeStatus(
      originalStatuses.requestHeaderFieldsTooLarge,
      messages[431],
    ),
    unavailableForLegalReasons: localizeStatus(
      originalStatuses.unavailableForLegalReasons,
      messages[451],
    ),

    // 5xx Server Error
    internalServerError: localizeStatus(
      originalStatuses.internalServerError,
      messages[500],
    ),
    notImplemented: localizeStatus(
      originalStatuses.notImplemented,
      messages[501],
    ),
    badGateway: localizeStatus(originalStatuses.badGateway, messages[502]),
    serviceUnavailable: localizeStatus(
      originalStatuses.serviceUnavailable,
      messages[503],
    ),
    gatewayTimeout: localizeStatus(
      originalStatuses.gatewayTimeout,
      messages[504],
    ),
    httpVersionNotSupported: localizeStatus(
      originalStatuses.httpVersionNotSupported,
      messages[505],
    ),
    networkAuthenticationRequired: localizeStatus(
      originalStatuses.networkAuthenticationRequired,
      messages[511],
    ),
  };

  // Create the full localized status object with all aliases
  const localizedHttpStatus: HttpStatusObject = {
    ...localizedStatuses,

    // UPPERCASE aliases
    OK: localizedStatuses.ok,
    CREATED: localizedStatuses.created,
    ACCEPTED: localizedStatuses.accepted,
    NO_CONTENT: localizedStatuses.noContent,
    PARTIAL_CONTENT: localizedStatuses.partialContent,
    MOVED_PERMANENTLY: localizedStatuses.moved,
    FOUND: localizedStatuses.found,
    NOT_MODIFIED: localizedStatuses.notModified,
    TEMPORARY_REDIRECT: localizedStatuses.temporaryRedirect,
    PERMANENT_REDIRECT: localizedStatuses.permanentRedirect,
    BAD_REQUEST: localizedStatuses.badRequest,
    UNAUTHORIZED: localizedStatuses.unauthorized,
    FORBIDDEN: localizedStatuses.forbidden,
    NOT_FOUND: localizedStatuses.notFound,
    METHOD_NOT_ALLOWED: localizedStatuses.methodNotAllowed,
    NOT_ACCEPTABLE: localizedStatuses.notAcceptable,
    REQUEST_TIMEOUT: localizedStatuses.requestTimeout,
    CONFLICT: localizedStatuses.conflict,
    GONE: localizedStatuses.gone,
    LENGTH_REQUIRED: localizedStatuses.lengthRequired,
    PRECONDITION_FAILED: localizedStatuses.preconditionFailed,
    PAYLOAD_TOO_LARGE: localizedStatuses.payloadTooLarge,
    URI_TOO_LONG: localizedStatuses.uriTooLong,
    UNSUPPORTED_MEDIA_TYPE: localizedStatuses.unsupportedMediaType,
    RANGE_NOT_SATISFIABLE: localizedStatuses.rangeNotSatisfiable,
    EXPECTATION_FAILED: localizedStatuses.expectationFailed,
    IM_A_TEAPOT: localizedStatuses.imATeapot,
    UNPROCESSABLE_ENTITY: localizedStatuses.unprocessableEntity,
    UPGRADE_REQUIRED: localizedStatuses.upgradeRequired,
    PRECONDITION_REQUIRED: localizedStatuses.preconditionRequired,
    TOO_MANY_REQUESTS: localizedStatuses.tooManyRequests,
    REQUEST_HEADER_FIELDS_TOO_LARGE:
      localizedStatuses.requestHeaderFieldsTooLarge,
    UNAVAILABLE_FOR_LEGAL_REASONS: localizedStatuses.unavailableForLegalReasons,
    INTERNAL_SERVER_ERROR: localizedStatuses.internalServerError,
    NOT_IMPLEMENTED: localizedStatuses.notImplemented,
    BAD_GATEWAY: localizedStatuses.badGateway,
    SERVICE_UNAVAILABLE: localizedStatuses.serviceUnavailable,
    GATEWAY_TIMEOUT: localizedStatuses.gatewayTimeout,
    HTTP_VERSION_NOT_SUPPORTED: localizedStatuses.httpVersionNotSupported,
    NETWORK_AUTHENTICATION_REQUIRED:
      localizedStatuses.networkAuthenticationRequired,

    // Numeric aliases
    200: localizedStatuses.ok,
    201: localizedStatuses.created,
    202: localizedStatuses.accepted,
    204: localizedStatuses.noContent,
    206: localizedStatuses.partialContent,
    301: localizedStatuses.moved,
    302: localizedStatuses.found,
    304: localizedStatuses.notModified,
    307: localizedStatuses.temporaryRedirect,
    308: localizedStatuses.permanentRedirect,
    400: localizedStatuses.badRequest,
    401: localizedStatuses.unauthorized,
    403: localizedStatuses.forbidden,
    404: localizedStatuses.notFound,
    405: localizedStatuses.methodNotAllowed,
    406: localizedStatuses.notAcceptable,
    408: localizedStatuses.requestTimeout,
    409: localizedStatuses.conflict,
    410: localizedStatuses.gone,
    411: localizedStatuses.lengthRequired,
    412: localizedStatuses.preconditionFailed,
    413: localizedStatuses.payloadTooLarge,
    414: localizedStatuses.uriTooLong,
    415: localizedStatuses.unsupportedMediaType,
    416: localizedStatuses.rangeNotSatisfiable,
    417: localizedStatuses.expectationFailed,
    418: localizedStatuses.imATeapot,
    422: localizedStatuses.unprocessableEntity,
    426: localizedStatuses.upgradeRequired,
    428: localizedStatuses.preconditionRequired,
    429: localizedStatuses.tooManyRequests,
    431: localizedStatuses.requestHeaderFieldsTooLarge,
    451: localizedStatuses.unavailableForLegalReasons,
    500: localizedStatuses.internalServerError,
    501: localizedStatuses.notImplemented,
    502: localizedStatuses.badGateway,
    503: localizedStatuses.serviceUnavailable,
    504: localizedStatuses.gatewayTimeout,
    505: localizedStatuses.httpVersionNotSupported,
    511: localizedStatuses.networkAuthenticationRequired,
  };

  return localizedHttpStatus;
};
