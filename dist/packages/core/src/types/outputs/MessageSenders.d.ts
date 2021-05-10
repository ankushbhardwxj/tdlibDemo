import { MessageSenderUnion } from './index';
export declare type MessageSendersUnion = MessageSenders;
/** Represents a list of message senders */
export interface MessageSenders {
    _: 'messageSenders';
    /** Approximate total count of messages senders found */
    totalCount: number;
    /** List of message senders */
    senders: MessageSenderUnion[];
}
