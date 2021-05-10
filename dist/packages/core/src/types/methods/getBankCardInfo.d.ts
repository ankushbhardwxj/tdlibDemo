import { ApiRequestOptions, ApiResponse } from '../airgram';
import { BankCardInfoUnion } from '../outputs';
export interface GetBankCardInfoParams {
    bankCardNumber?: string;
}
/**
 * Returns information about a bank card
 * @param {Object} params
 * @param {string} [params.bankCardNumber] - The bank card number
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetBankCardInfoParams, BankCardInfoUnion>>}
 */
export declare type getBankCardInfo = (params?: GetBankCardInfoParams, options?: ApiRequestOptions) => Promise<ApiResponse<GetBankCardInfoParams, BankCardInfoUnion>>;
