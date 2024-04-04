import {useWestAfricanCountries} from "../../hooks/countries";
import CountryListView from "./CountryListView";
import Navbar from "../../components/app/Navbar";
import {useEffect, useState} from "react";
import {ICountryDetail} from "../../interfaces/countries";


const CountryAppView: React.FC = () => {
    const [search, setSearch] = useState("");
  const { isLoading, error, data } = useWestAfricanCountries();
    const [countries, setCountries] = useState<ICountryDetail[]|undefined>();

  const filteredCountries =(search:string)=>{
      return data?.filter((country)=>country.name.official.toLowerCase().includes(search.toLowerCase()))
  };

  useEffect(()=>{
      if (search !== ""){
      setCountries(()=>filteredCountries(search))
  }else{
     setCountries(()=>data)
  }

  }, [search, data])

  if (isLoading) return <div>Loading countries...</div>;
  if (error) { // @ts-ignore
    return <div>Error: {error.message}</div>;
  }

  return (
      countries?
          <main className={"bg-light h-screen"}>
              <Navbar search={search} setSearch={setSearch} />
              <CountryListView countries={countries ?? []} />
          </main>
          :
      <div/>
  );
};

export default CountryAppView;
