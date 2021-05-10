import { ApiRequestOptions, ApiResponse } from '../airgram';
import { MessageUnion } from '../outputs';
export interface GetChatPinnedMessageParams {
    chatId?: number;
}
/**
 * Returns information about a newest pinned message in the chat
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat the message belongs to
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatPinnedMessageParams, MessageUnion>>}
 */
export declare type getChatPinnedMessage = (params?: GetChatPinnedMessageParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetChatPinnedMessageParams, MessageUnion>>;