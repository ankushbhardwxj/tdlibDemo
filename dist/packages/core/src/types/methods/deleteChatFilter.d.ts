import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface DeleteChatFilterParams {
    chatFilterId?: number;
}
/**
 * Deletes existing chat filter
 * @param {Object} params
 * @param {number} [params.chatFilterId] - Chat filter identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DeleteChatFilterParams, OkUnion>>}
 */
export declare type deleteChatFilter = (params?: DeleteChatFilterParams, options?: ApiRequestOptions) => Promise<ApiResponse<DeleteChatFilterParams, OkUnion>>;
