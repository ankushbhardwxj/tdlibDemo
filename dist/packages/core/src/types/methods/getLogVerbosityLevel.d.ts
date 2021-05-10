import { ApiRequestOptions, ApiResponse } from '../airgram';
import { LogVerbosityLevelUnion } from '../outputs';
/**
 * Returns current verbosity level of the internal logging of TDLib. Can be called synchronously
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, LogVerbosityLevelUnion>>}
 */
export declare type getLogVerbosityLevel = (params?: never, options?: ApiRequestOptions) => Promise<ApiResponse<never, LogVerbosityLevelUnion>>;
export declare type getLogVerbosityLevelSync = (params?: never) => LogVerbosityLevelUnion;
