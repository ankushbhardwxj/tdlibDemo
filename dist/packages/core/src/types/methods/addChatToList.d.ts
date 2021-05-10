import { ApiRequestOptions, ApiResponse } from '../airgram';
import { ChatListInputUnion } from '../inputs';
import { OkUnion } from '../outputs';
export interface AddChatToListParams {
    chatId?: number;
    chatList?: ChatListInputUnion;
}
/**
 * Adds a chat to a chat list. A chat can't be simultaneously in Main and Archive chat
 * lists, so it is automatically removed from another one if needed
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ChatListInputUnion} [params.chatList] - The chat list. Use getChatListsToAddChat
 * to get suitable chat lists
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AddChatToListParams, OkUnion>>}
 */
export declare type addChatToList = (params?: AddChatToListParams, options?: ApiRequestOptions) => Promise<ApiResponse<AddChatToListParams, OkUnion>>;
