import {useWestAfricanCountries} from "../hooks/country";
import Navbar from "../components/app/Navbar";
import {FC, useEffect, useState} from "react";
import {ICountryDetail} from "../interfaces/countries";
import LoadingScreen from "../components/app/LoadingScreen";
import CountryList from "../components/country/CountryList";


const CountryPage: FC = () => {
    const [search, setSearch] = useState("");
  const { isLoading, error, data } = useWestAfricanCountries();
    const [countries, setCountries] = useState<ICountryDetail[]|undefined>();

  const filteredCountries =(search:string)=>{
      // filter country by checking if country official name contains letters in the search
      return data?.filter((country)=>country.name.official.toLowerCase().includes(search.toLowerCase()))
  };

  useEffect(()=>{ // if search or data changes update countries
      if (search !== ""){
      setCountries(()=>filteredCountries(search))
  }else{
     setCountries(()=>data)
  }

  }, [search, data])

  if (isLoading){
      return <LoadingScreen isOpen={isLoading}/>;
  }
  if (error) { // @ts-ignore
    return <div>Error: {error.message}</div>;
  }

  return (
      countries?
          <main className={"bg-light h-screen"}>
              <Navbar search={search} setSearch={setSearch} />
              <CountryList countries={countries ?? []} />
          </main>
          :
      <LoadingScreen/>
  );
};

export default CountryPage;
