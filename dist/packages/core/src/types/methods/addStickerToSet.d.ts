import { ApiRequestOptions, ApiResponse } from '../airgram';
import { InputStickerInputUnion } from '../inputs';
import { StickerSetUnion } from '../outputs';
export interface AddStickerToSetParams {
    userId?: number;
    name?: string;
    sticker?: InputStickerInputUnion;
}
/**
 * Adds a new sticker to a set; for bots only. Returns the sticker set
 * @param {Object} params
 * @param {number} [params.userId] - Sticker set owner
 * @param {string} [params.name] - Sticker set name
 * @param {InputStickerInputUnion} [params.sticker] - Sticker to add to the set
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AddStickerToSetParams, StickerSetUnion>>}
 */
export declare type addStickerToSet = (params?: AddStickerToSetParams, options?: ApiRequestOptions) => Promise<ApiResponse<AddStickerToSetParams, StickerSetUnion>>;
