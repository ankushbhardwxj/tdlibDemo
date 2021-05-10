import { ApiRequestOptions, ApiResponse } from '../airgram';
import { ChatListInputUnion, SearchMessagesFilterInputUnion } from '../inputs';
import { MessagesUnion } from '../outputs';
export interface SearchMessagesParams {
    chatList?: ChatListInputUnion;
    query?: string;
    offsetDate?: number;
    offsetChatId?: number;
    offsetMessageId?: number;
    limit?: number;
    filter?: SearchMessagesFilterInputUnion;
    minDate?: number;
    maxDate?: number;
}
/**
 * Searches for messages in all chats except secret chats. Returns the results in reverse
 * chronological order (i.e., in order of decreasing (date, chat_id, message_id)). For
 * optimal performance the number of returned messages is chosen by the library
 * @param {Object} params
 * @param {ChatListInputUnion} [params.chatList] - Chat list in which to search messages;
 * pass null to search in all chats regardless of their chat list
 * @param {string} [params.query] - Query to search for
 * @param {number} [params.offsetDate] - The date of the message starting from which
 * the results should be fetched. Use 0 or any date in the future to get results from
 * the last message
 * @param {number} [params.offsetChatId] - The chat identifier of the last found
 * message, or 0 for the first request
 * @param {number} [params.offsetMessageId] - The message identifier of the last
 * found message, or 0 for the first request
 * @param {number} [params.limit] - The maximum number of messages to be returned;
 * up to 100. Fewer messages may be returned than specified by the limit, even if the
 * end of the message history has not been reached
 * @param {SearchMessagesFilterInputUnion} [params.filter] - Filter for message content
 * in the search results; searchMessagesFilterCall, searchMessagesFilterMissedCall,
 * searchMessagesFilterMention, searchMessagesFilterUnreadMention, searchMessagesFilterFailedToSend
 * and searchMessagesFilterPinned are unsupported in this function
 * @param {number} [params.minDate] - If not 0, the minimum date of the messages
 * to return
 * @param {number} [params.maxDate] - If not 0, the maximum date of the messages
 * to return
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchMessagesParams, MessagesUnion>>}
 */
export declare type searchMessages = (params?: SearchMessagesParams, options?: ApiRequestOptions) => Promise<ApiResponse<SearchMessagesParams, MessagesUnion>>;