import { ApiRequestOptions, ApiResponse } from '../airgram';
import { SuggestedActionInputUnion } from '../inputs';
import { OkUnion } from '../outputs';
export interface HideSuggestedActionParams {
    action?: SuggestedActionInputUnion;
}
/**
 * Hides a suggested action
 * @param {Object} params
 * @param {SuggestedActionInputUnion} [params.action] - Suggested action to hide
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<HideSuggestedActionParams, OkUnion>>}
 */
export declare type hideSuggestedAction = (params?: HideSuggestedActionParams, options?: ApiRequestOptions) => Promise<ApiResponse<HideSuggestedActionParams, OkUnion>>;
