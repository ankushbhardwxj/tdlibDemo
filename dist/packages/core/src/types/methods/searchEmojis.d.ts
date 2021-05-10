import { ApiRequestOptions, ApiResponse } from '../airgram';
import { EmojisUnion } from '../outputs';
export interface SearchEmojisParams {
    text?: string;
    exactMatch?: boolean;
    inputLanguageCodes?: string[];
}
/**
 * Searches for emojis by keywords. Supported only if the file database is enabled
 * @param {Object} params
 * @param {string} [params.text] - Text to search for
 * @param {boolean} [params.exactMatch] - True, if only emojis, which exactly match
 * text needs to be returned
 * @param {string[]} [params.inputLanguageCodes] - List of possible IETF language
 * tags of the user's input language; may be empty if unknown
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchEmojisParams, EmojisUnion>>}
 */
export declare type searchEmojis = (params?: SearchEmojisParams, options?: ApiRequestOptions) => Promise<ApiResponse<SearchEmojisParams, EmojisUnion>>;
