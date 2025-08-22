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

    // 3xx Redirection
    moved: localizeStatus(originalStatuses.moved, messages[301]),
    found: localizeStatus(originalStatuses.found, messages[302]),
    notModified: localizeStatus(originalStatuses.notModified, messages[304]),

    // 4xx Client Error
    badRequest: localizeStatus(originalStatuses.badRequest, messages[400]),
    unauthorized: localizeStatus(
      originalStatuses.unauthorized,
      messages[401],
    ),
    forbidden: localizeStatus(originalStatuses.forbidden, messages[403]),
    notFound: localizeStatus(originalStatuses.notFound, messages[404]),
    methodNotAllowed: localizeStatus(
      originalStatuses.methodNotAllowed,
      messages[405],
    ),
    conflict: localizeStatus(originalStatuses.conflict, messages[409]),
    gone: localizeStatus(originalStatuses.gone, messages[410]),
    unprocessableEntity: localizeStatus(
      originalStatuses.unprocessableEntity,
      messages[422],
    ),
    tooManyRequests: localizeStatus(
      originalStatuses.tooManyRequests,
      messages[429],
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
  };

  // Create the full localized status object with all aliases
  const localizedHttpStatus: HttpStatusObject = {
    ...localizedStatuses,

    // UPPERCASE aliases
    OK: localizedStatuses.ok,
    CREATED: localizedStatuses.created,
    ACCEPTED: localizedStatuses.accepted,
    NO_CONTENT: localizedStatuses.noContent,
    MOVED_PERMANENTLY: localizedStatuses.moved,
    FOUND: localizedStatuses.found,
    NOT_MODIFIED: localizedStatuses.notModified,
    BAD_REQUEST: localizedStatuses.badRequest,
    UNAUTHORIZED: localizedStatuses.unauthorized,
    FORBIDDEN: localizedStatuses.forbidden,
    NOT_FOUND: localizedStatuses.notFound,
    METHOD_NOT_ALLOWED: localizedStatuses.methodNotAllowed,
    CONFLICT: localizedStatuses.conflict,
    GONE: localizedStatuses.gone,
    UNPROCESSABLE_ENTITY: localizedStatuses.unprocessableEntity,
    TOO_MANY_REQUESTS: localizedStatuses.tooManyRequests,
    INTERNAL_SERVER_ERROR: localizedStatuses.internalServerError,
    NOT_IMPLEMENTED: localizedStatuses.notImplemented,
    BAD_GATEWAY: localizedStatuses.badGateway,
    SERVICE_UNAVAILABLE: localizedStatuses.serviceUnavailable,
    GATEWAY_TIMEOUT: localizedStatuses.gatewayTimeout,

    // Numeric aliases
    200: localizedStatuses.ok,
    201: localizedStatuses.created,
    202: localizedStatuses.accepted,
    204: localizedStatuses.noContent,
    301: localizedStatuses.moved,
    302: localizedStatuses.found,
    304: localizedStatuses.notModified,
    400: localizedStatuses.badRequest,
    401: localizedStatuses.unauthorized,
    403: localizedStatuses.forbidden,
    404: localizedStatuses.notFound,
    405: localizedStatuses.methodNotAllowed,
    409: localizedStatuses.conflict,
    410: localizedStatuses.gone,
    422: localizedStatuses.unprocessableEntity,
    429: localizedStatuses.tooManyRequests,
    500: localizedStatuses.internalServerError,
    501: localizedStatuses.notImplemented,
    502: localizedStatuses.badGateway,
    503: localizedStatuses.serviceUnavailable,
    504: localizedStatuses.gatewayTimeout,
  };

  return localizedHttpStatus;
};
