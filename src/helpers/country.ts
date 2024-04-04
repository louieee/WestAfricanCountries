import {ICountryDetail} from "../interfaces/countries";

export function getCurrencyNameAndSymbol(country: ICountryDetail): { name: string; symbol: string } {
  const firstCurrency = country.currencies[Object.keys(country.currencies)[0]]; // Get first currency

  const { name, symbol } = firstCurrency; // Destructure name and symbol
  return { name, symbol };
}