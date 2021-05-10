import { ApiRequestOptions, ApiResponse } from '../airgram';
import { ChatFilterUnion } from '../outputs';
export interface GetChatFilterParams {
    chatFilterId?: number;
}
/**
 * Returns information about a chat filter by its identifier
 * @param {Object} params
 * @param {number} [params.chatFilterId] - Chat filter identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatFilterParams, ChatFilterUnion>>}
 */
export declare type getChatFilter = (params?: GetChatFilterParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetChatFilterParams, ChatFilterUnion>>;
