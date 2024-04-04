import {ICountryDetail} from "../interfaces/countries";
import {useQuery} from "react-query";
import {getCountries} from "../apis/countries";


export const useWestAfricanCountries = (): {
  isLoading: boolean;
  error: unknown;
  data: ICountryDetail[] | undefined;
} => {
  return useQuery('westAfricanCountries', getCountries);
};
