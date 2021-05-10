import { ApiRequestOptions, ApiResponse } from '../airgram';
import { MessageSendersUnion } from '../outputs';
export interface GetBlockedMessageSendersParams {
    offset?: number;
    limit?: number;
}
/**
 * Returns users and chats that were blocked by the current user
 * @param {Object} params
 * @param {number} [params.offset] - Number of users and chats to skip in the result;
 * must be non-negative
 * @param {number} [params.limit] - The maximum number of users and chats to return;
 * up to 100
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetBlockedMessageSendersParams, MessageSendersUnion>>}
 */
export declare type getBlockedMessageSenders = (params?: GetBlockedMessageSendersParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetBlockedMessageSendersParams, MessageSendersUnion>>;
