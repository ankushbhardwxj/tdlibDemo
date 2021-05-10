import { ApiRequest, TdObject, TdProvider as BaseTdProvider } from '../types';
export declare abstract class Provider implements BaseTdProvider {
    abstract destroy(): Promise<void>;
    abstract execute(request: ApiRequest): TdObject;
    abstract send(request: ApiRequest): Promise<TdObject>;
}
