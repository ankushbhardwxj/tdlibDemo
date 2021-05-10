import { TdObject } from '@airgram/core';
import { TdObject as NativeTdObject, TdOptions } from 'tdweb';
export declare type TdWebProviderConfig = Omit<TdOptions, 'onUpdate'>;
export interface PromisifyWorkerMessage<PayloadT> {
    id: number;
    payload: PayloadT;
}
export declare type PromisifyWorker = Omit<Worker, 'postMessage'> & {
    postMessage(message: any, transfer: Transferable[]): Promise<any>;
    postMessage(message: any, options?: PostMessageOptions): Promise<any>;
    rejectAll(): void;
};
export declare type SerializeFn = (value: TdObject) => NativeTdObject;
export declare type DeserializeFn = ((value: NativeTdObject) => TdObject) & ((value: null) => null);
