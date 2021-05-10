import { ApiRequestOptions, ApiResponse } from '../airgram';
import { LocationInput, ReplyMarkupInputUnion } from '../inputs';
import { MessageUnion } from '../outputs';
export interface EditMessageLiveLocationParams {
    chatId?: number;
    messageId?: number;
    replyMarkup?: ReplyMarkupInputUnion;
    location?: LocationInput;
    heading?: number;
    proximityAlertRadius?: number;
}
/**
 * Edits the message content of a live location. Messages can be edited for a limited
 * period of time specified in the live location. Returns the edited message after the
 * edit is completed on the server side
 * @param {Object} params
 * @param {number} [params.chatId] - The chat the message belongs to
 * @param {number} [params.messageId] - Identifier of the message
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup;
 * for bots only
 * @param {LocationInput} [params.location] - New location content of the message;
 * may be null. Pass null to stop sharing the live location
 * @param {number} [params.heading] - The new direction in which the location moves,
 * in degrees; 1-360. Pass 0 if unknown
 * @param {number} [params.proximityAlertRadius] - The new maximum distance for proximity
 * alerts, in meters (0-100000). Pass 0 if the notification is disabled
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditMessageLiveLocationParams, MessageUnion>>}
 */
export declare type editMessageLiveLocation = (params?: EditMessageLiveLocationParams, options?: ApiRequestOptions) => Promise<ApiResponse<EditMessageLiveLocationParams, MessageUnion>>;
