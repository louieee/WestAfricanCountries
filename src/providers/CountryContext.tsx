import React, { createContext, useState } from 'react';
import {ICountryDetail} from "../interfaces/countries";

const CountryContext = createContext<any>([]);

interface ContextProp{
    children: any
}
const CountryContextProvider: React.FC<ContextProp> = ({ children }) => {
  const [filteredCountries, setFilteredCountries] = useState<ICountryDetail[]>([]);

  return (
    <CountryContext.Provider value={{ filteredCountries,  setFilteredCountries }}>
      {children}
    </CountryContext.Provider>
  );
};

export { CountryContext, CountryContextProvider };
