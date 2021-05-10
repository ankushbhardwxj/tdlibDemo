import { ApiRequestOptions, ApiResponse } from '../airgram';
import { TextParseModeInputUnion } from '../inputs';
import { FormattedTextUnion } from '../outputs';
export interface ParseTextEntitiesParams {
    text?: string;
    parseMode?: TextParseModeInputUnion;
}
/**
 * Parses Bold, Italic, Underline, Strikethrough, Code, Pre, PreCode, TextUrl and MentionName
 * entities contained in the text. Can be called synchronously
 * @param {Object} params
 * @param {string} [params.text] - The text to parse
 * @param {TextParseModeInputUnion} [params.parseMode] - Text parse mode
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ParseTextEntitiesParams, FormattedTextUnion>>}
 */
export declare type parseTextEntities = (params?: ParseTextEntitiesParams, options?: ApiRequestOptions) => Promise<ApiResponse<ParseTextEntitiesParams, FormattedTextUnion>>;
export declare type parseTextEntitiesSync = (params?: ParseTextEntitiesParams) => FormattedTextUnion;
