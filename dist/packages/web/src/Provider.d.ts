import { ApiRequest, TdObject, Provider as BaseTdProvider } from '@airgram/core';
import { TdWebProviderConfig } from './types';
export declare class Provider extends BaseTdProvider {
    private client;
    private readonly config;
    private deserialize;
    private serialize;
    constructor(config?: TdWebProviderConfig);
    destroy(): Promise<void>;
    execute(): TdObject;
    initialize(handleUpdate: (update: TdObject) => Promise<any>): void;
    send({ method, params }: ApiRequest): Promise<TdObject>;
}
