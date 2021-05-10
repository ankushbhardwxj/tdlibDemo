import { ApiRequestOptions, ApiResponse } from '../airgram';
import { MessageSendOptionsInput } from '../inputs';
import { MessagesUnion } from '../outputs';
export interface ForwardMessagesParams {
    chatId?: number;
    fromChatId?: number;
    messageIds?: number[];
    options?: MessageSendOptionsInput;
    sendCopy?: boolean;
    removeCaption?: boolean;
}
/**
 * Forwards previously sent messages. Returns the forwarded messages in the same order
 * as the message identifiers passed in message_ids. If a message can't be forwarded,
 * null will be returned instead of the message
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to which to forward messages
 * @param {number} [params.fromChatId] - Identifier of the chat from which to forward
 * messages
 * @param {number[]} [params.messageIds] - Identifiers of the messages to forward.
 * Message identifiers must be in a strictly increasing order
 * @param {MessageSendOptionsInput} [params.options] - Options to be used to send
 * the messages
 * @param {boolean} [params.sendCopy] - True, if content of the messages needs to
 * be copied without links to the original messages. Always true if the messages are
 * forwarded to a secret chat
 * @param {boolean} [params.removeCaption] - True, if media caption of message copies
 * needs to be removed. Ignored if send_copy is false
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ForwardMessagesParams, MessagesUnion>>}
 */
export declare type forwardMessages = (params?: ForwardMessagesParams, options?: ApiRequestOptions) => Promise<ApiResponse<ForwardMessagesParams, MessagesUnion>>;
