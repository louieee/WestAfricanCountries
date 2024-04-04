import React from 'react';
import {ICountryDetailModalProps} from "../../interfaces/countries";
import CountryDetail from "../../components/country/CountryDetail";
import {getCurrencyNameAndSymbol} from "../../helpers/country";

const CountryDetailView: React.FC<ICountryDetailModalProps> = (
    {country, isOpen, onClose}
) => {
  if (!country) return null; // Handle no country data
  const currency = getCurrencyNameAndSymbol(country)
  return (
      <CountryDetail country={country} currency={currency} isOpen={isOpen} onClose={onClose}/>
  )
};

export default CountryDetailView;

