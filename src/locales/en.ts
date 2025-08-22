/**
 * English locale for HTTP response status codes (default)
 */
import httpStatus from '../index';
import { enMessages } from './en-messages';
import { localizeHttpStatus } from './utils';

/**
 * HTTP status object with English messages (default)
 *
 * @example
 * ```typescript
 * import httpStatus from 'node-http-status/locale/en';
 * console.log(httpStatus.FORBIDDEN.message);
 * // "The server understood the request but refuses to authorize it"
 * ```
 */
const httpStatusEn = localizeHttpStatus(httpStatus, enMessages);

export default httpStatusEn;
