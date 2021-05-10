import { ApiRequestOptions, ApiResponse } from '../airgram';
import { LogStreamUnion } from '../outputs';
/**
 * Returns information about currently used log stream for internal logging of TDLib.
 * Can be called synchronously
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, LogStreamUnion>>}
 */
export declare type getLogStream = (params?: never, options?: ApiRequestOptions) => Promise<ApiResponse<never, LogStreamUnion>>;
export declare type getLogStreamSync = (params?: never) => LogStreamUnion;
