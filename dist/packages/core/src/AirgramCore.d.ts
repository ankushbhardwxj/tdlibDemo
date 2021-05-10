import { ApiMethods, BaseTdObject, Config, Context, ErrorHandler, Instance, Middleware, MiddlewareOn, ProviderFactory, TdObject, TdProvider } from './types';
export declare class AirgramCore<ProviderT extends TdProvider> implements Instance<ProviderT> {
    readonly config: Config;
    handleError: ErrorHandler;
    readonly provider: ProviderT;
    readonly api: ApiMethods;
    readonly on: MiddlewareOn;
    private readonly composer;
    constructor(providerFactory: ProviderFactory<ProviderT>, config: Config);
    get name(): string;
    catch(handler: (error: Error) => void): void;
    destroy(): Promise<void>;
    emit<UpdateT extends BaseTdObject = TdObject>(update: UpdateT, state?: Record<string, unknown>): Promise<unknown>;
    use(...fns: Middleware<Context>[]): void;
    private apiMiddleware;
    private bootstrapMiddleware;
    private callApi;
    private createContext;
    private getExtraContext;
    private handleUpdate;
}
