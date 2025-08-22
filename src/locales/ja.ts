/**
 * Japanese locale for HTTP response status codes
 */
import httpStatus from '../index';
import { jaMessages } from './ja-messages';
import { localizeHttpStatus } from './utils';

/**
 * HTTP status object with Japanese messages
 *
 * @example
 * ```typescript
 * import httpStatus from 'node-http-status/locale/ja';
 * console.log(httpStatus.FORBIDDEN.message);
 * // "サーバーはリクエストを理解したが、承認を拒否した。"
 * ```
 */
const httpStatusJa = localizeHttpStatus(httpStatus, jaMessages);

export default httpStatusJa;
