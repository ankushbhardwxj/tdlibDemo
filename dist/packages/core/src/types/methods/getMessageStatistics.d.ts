import { ApiRequestOptions, ApiResponse } from '../airgram';
import { MessageStatisticsUnion } from '../outputs';
export interface GetMessageStatisticsParams {
    chatId?: number;
    messageId?: number;
    isDark?: boolean;
}
/**
 * Returns detailed statistics about a message. Can be used only if Message.can_get_statistics
 * == true
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.messageId] - Message identifier
 * @param {boolean} [params.isDark] - Pass true if a dark theme is used by the application
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessageStatisticsParams, MessageStatisticsUnion>>}
 */
export declare type getMessageStatistics = (params?: GetMessageStatisticsParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetMessageStatisticsParams, MessageStatisticsUnion>>;
