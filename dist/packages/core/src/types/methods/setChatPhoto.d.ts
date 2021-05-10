import { ApiRequestOptions, ApiResponse } from '../airgram';
import { InputChatPhotoInputUnion } from '../inputs';
import { OkUnion } from '../outputs';
export interface SetChatPhotoParams {
    chatId?: number;
    photo?: InputChatPhotoInputUnion;
}
/**
 * Changes the photo of a chat. Supported only for basic groups, supergroups and channels.
 * Requires can_change_info rights
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {InputChatPhotoInputUnion} [params.photo] - New chat photo. Pass null to
 * delete the chat photo
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatPhotoParams, OkUnion>>}
 */
export declare type setChatPhoto = (params?: SetChatPhotoParams, options?: ApiRequestOptions) => Promise<ApiResponse<SetChatPhotoParams, OkUnion>>;
