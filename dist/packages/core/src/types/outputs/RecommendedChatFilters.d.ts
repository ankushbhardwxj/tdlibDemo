import { RecommendedChatFilter } from './index';
export declare type RecommendedChatFiltersUnion = RecommendedChatFilters;
/** Contains a list of recommended chat filters */
export interface RecommendedChatFilters {
    _: 'recommendedChatFilters';
    /** List of recommended chat filters */
    chatFilters: RecommendedChatFilter[];
}
