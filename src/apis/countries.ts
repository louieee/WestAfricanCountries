import axios from "axios";
import type {ICountryDetail} from "../interfaces/countries";

const countriesAPIs = axios.create({
    baseURL: "https://restcountries.com/v3.1"
});

export const getCountries = async ():Promise<ICountryDetail[]>=>{
    const response = await countriesAPIs.get("/subregion/western%20af" +
        "rica?fields=name,flag,tld,coatOfArms,capital,currencies,currency,idd");
    return response.data;
};