import { ApiRequestOptions, ApiResponse } from '../airgram';
import { BotCommandInput } from '../inputs';
import { OkUnion } from '../outputs';
export interface SetCommandsParams {
    commands?: BotCommandInput[];
}
/**
 * Sets the list of commands supported by the bot; for bots only
 * @param {Object} params
 * @param {BotCommandInput[]} [params.commands] - List of the bot's commands
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetCommandsParams, OkUnion>>}
 */
export declare type setCommands = (params?: SetCommandsParams, options?: ApiRequestOptions) => Promise<ApiResponse<SetCommandsParams, OkUnion>>;
