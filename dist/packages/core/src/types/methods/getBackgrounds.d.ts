import { ApiRequestOptions, ApiResponse } from '../airgram';
import { BackgroundsUnion } from '../outputs';
export interface GetBackgroundsParams {
    forDarkTheme?: boolean;
}
/**
 * Returns backgrounds installed by the user
 * @param {Object} params
 * @param {boolean} [params.forDarkTheme] - True, if the backgrounds must be ordered
 * for dark theme
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetBackgroundsParams, BackgroundsUnion>>}
 */
export declare type getBackgrounds = (params?: GetBackgroundsParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetBackgroundsParams, BackgroundsUnion>>;
