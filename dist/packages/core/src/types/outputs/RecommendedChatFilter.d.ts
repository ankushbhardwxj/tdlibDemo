import { ChatFilter } from './index';
export declare type RecommendedChatFilterUnion = RecommendedChatFilter;
/** Describes a recommended chat filter */
export interface RecommendedChatFilter {
    _: 'recommendedChatFilter';
    /** The chat filter */
    filter: ChatFilter;
    /** Chat filter description */
    description: string;
}
