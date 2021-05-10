import { AirgramCore, Config } from '@airgram/core';
import { Provider } from './Provider';
import { TdWebProviderConfig } from './types';
export interface AirgramConfig extends Config, TdWebProviderConfig {
}
export declare class Airgram extends AirgramCore<Provider> {
    constructor(config: AirgramConfig);
}
