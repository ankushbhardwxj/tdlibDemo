import { CountryInfo } from './index';
export declare type CountriesUnion = Countries;
/** Contains information about countries */
export interface Countries {
    _: 'countries';
    /** The list of countries */
    countries: CountryInfo[];
}
