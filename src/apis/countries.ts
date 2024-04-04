import type {ICountryDetail} from "../interfaces/countries";
import axiosInstance from "../services/axios";


export const getCountries = async ():Promise<ICountryDetail[]>=>{
    const response = await axiosInstance.get("/subregion/western%20af" +
        "rica?fields=name,flag,tld,coatOfArms,capital,currencies,currency,idd");
    return response.data;
};