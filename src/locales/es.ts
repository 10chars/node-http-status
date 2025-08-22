/**
 * Spanish locale for HTTP response status codes
 */
import httpStatus from '../index';
import { esMessages } from './es-messages';
import { localizeHttpStatus } from './utils';

/**
 * HTTP status object with Spanish messages
 *
 * @example
 * ```typescript
 * import httpStatus from 'node-http-status/locale/es';
 * console.log(httpStatus.FORBIDDEN.message);
 * // "El servidor entendió la solicitud pero se niega a autorizarla"
 * ```
 */
const httpStatusEs = localizeHttpStatus(httpStatus, esMessages);

export default httpStatusEs;
