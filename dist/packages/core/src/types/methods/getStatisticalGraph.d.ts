import { ApiRequestOptions, ApiResponse } from '../airgram';
import { StatisticalGraphUnion } from '../outputs';
export interface GetStatisticalGraphParams {
    chatId?: number;
    token?: string;
    x?: number;
}
/**
 * Loads an asynchronous or a zoomed in statistical graph
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.token] - The token for graph loading
 * @param {number} [params.x] - X-value for zoomed in graph or 0 otherwise
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetStatisticalGraphParams, StatisticalGraphUnion>>}
 */
export declare type getStatisticalGraph = (params?: GetStatisticalGraphParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetStatisticalGraphParams, StatisticalGraphUnion>>;
