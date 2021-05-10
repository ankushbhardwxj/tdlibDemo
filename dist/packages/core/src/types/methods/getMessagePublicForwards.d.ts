import { ApiRequestOptions, ApiResponse } from '../airgram';
import { FoundMessagesUnion } from '../outputs';
export interface GetMessagePublicForwardsParams {
    chatId?: number;
    messageId?: number;
    offset?: string;
    limit?: number;
}
/**
 * Returns forwarded copies of a channel message to different public channels. For optimal
 * performance the number of returned messages is chosen by the library
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier of the message
 * @param {number} [params.messageId] - Message identifier
 * @param {string} [params.offset] - Offset of the first entry to return as received
 * from the previous request; use empty string to get first chunk of results
 * @param {number} [params.limit] - The maximum number of messages to be returned;
 * must be positive and can't be greater than 100. Fewer messages may be returned than
 * specified by the limit, even if the end of the list has not been reached
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessagePublicForwardsParams, FoundMessagesUnion>>}
 */
export declare type getMessagePublicForwards = (params?: GetMessagePublicForwardsParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetMessagePublicForwardsParams, FoundMessagesUnion>>;