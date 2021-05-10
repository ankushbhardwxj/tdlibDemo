import { ApiRequestOptions, ApiResponse } from '../airgram';
import { OkUnion } from '../outputs';
export interface BlockMessageSenderFromRepliesParams {
    messageId?: number;
    deleteMessage?: boolean;
    deleteAllMessages?: boolean;
    reportSpam?: boolean;
}
/**
 * Blocks an original sender of a message in the Replies chat
 * @param {Object} params
 * @param {number} [params.messageId] - The identifier of an incoming message in
 * the Replies chat
 * @param {boolean} [params.deleteMessage] - Pass true if the message must be deleted
 * @param {boolean} [params.deleteAllMessages] - Pass true if all messages from the
 * same sender must be deleted
 * @param {boolean} [params.reportSpam] - Pass true if the sender must be reported
 * to the Telegram moderators
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<BlockMessageSenderFromRepliesParams, OkUnion>>}
 */
export declare type blockMessageSenderFromReplies = (params?: BlockMessageSenderFromRepliesParams, options?: ApiRequestOptions) => Promise<ApiResponse<BlockMessageSenderFromRepliesParams, OkUnion>>;
