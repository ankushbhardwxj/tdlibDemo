import { ApiRequestOptions, ApiResponse } from '../airgram';
import { DraftMessageInput } from '../inputs';
import { OkUnion } from '../outputs';
export interface SetChatDraftMessageParams {
    chatId?: number;
    messageThreadId?: number;
    draftMessage?: DraftMessageInput;
}
/**
 * Changes the draft message in a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.messageThreadId] - If not 0, a message thread identifier
 * in which the draft was changed
 * @param {DraftMessageInput} [params.draftMessage] - New draft message; may be null
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatDraftMessageParams, OkUnion>>}
 */
export declare type setChatDraftMessage = (params?: SetChatDraftMessageParams, options?: ApiRequestOptions) => Promise<ApiResponse<SetChatDraftMessageParams, OkUnion>>;
