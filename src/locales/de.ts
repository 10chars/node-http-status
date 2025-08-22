/**
 * German locale for HTTP response status codes
 */
import httpStatus from '../index';
import { deMessages } from './de-messages';
import { localizeHttpStatus } from './utils';

/**
 * HTTP status object with German messages
 *
 * @example
 * ```typescript
 * import httpStatus from 'node-http-status/locale/de';
 * console.log(httpStatus.FORBIDDEN.message);
 * // "Der Server verstand die Anfrage, verweigert aber die Autorisierung"
 * ```
 */
const httpStatusDe = localizeHttpStatus(httpStatus, deMessages);

export default httpStatusDe;
