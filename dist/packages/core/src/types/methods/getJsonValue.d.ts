import { ApiRequestOptions, ApiResponse } from '../airgram';
import { JsonValueUnion } from '../outputs';
export interface GetJsonValueParams {
    json?: string;
}
/**
 * Converts a JSON-serialized string to corresponding JsonValue object. Can be called
 * synchronously
 * @param {Object} params
 * @param {string} [params.json] - The JSON-serialized string
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetJsonValueParams, JsonValueUnion>>}
 */
export declare type getJsonValue = (params?: GetJsonValueParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetJsonValueParams, JsonValueUnion>>;
export declare type getJsonValueSync = (params?: GetJsonValueParams) => JsonValueUnion;
