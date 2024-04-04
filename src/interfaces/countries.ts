import {IModalProps} from "./utils";
import CountryDetailView from "../features/country/CountryDetailView";

export interface CountryList {
  name: {
    common: string; // Common name of the country
    official: string; // Official name of the country
    nativeName?: { // Optional: Native name in various languages (if available)
      eng: {
        official: string;
        common: string;
      };
    };
  };
   flag: string; // Unicode flag character representation (🇸🇱)
}

export interface ICurrency {
  name: string; // Name of the currency (West African CFA franc)
  symbol: string; // Currency symbol (Fr)
}
export interface ICountryDetail {
  coatOfArms: {
    png: string;
    svg: string;
  };
  name: {
    common: string; // Common name of the country
    official: string; // Official name of the country
    nativeName?: { // Optional: Native name in various languages (if available)
      eng: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[]; // Array of top-level domains (.sl in this case)
  idd: {
    root: string; // Phone number dialing code root (+2)
    suffixes: string[]; // Array of phone number dialing code suffixes ([232])
  };
  capital: string[]; // Array of capital city names (may have multiple)
  currencies: { [key: string]: ICurrency };
  flag: string; // Unicode flag character representation (🇸🇱)
}

export interface ICountryDetailProps{
  country: ICountryDetail; // Required string prop
  currency?: ICurrency; // Optional onClick function prop
  className?: string; // Optional className prop
}

export interface ICountryDetailModalProps extends ICountryDetailProps, IModalProps{
}

export interface ICountryListItemProp {
    country: ICountryDetail
    handleOpen : (country: ICountryDetail)=>void
}
