import {FC, useState} from "react";
import {ICountryDetail} from "../../interfaces/countries";
import CountryListItem from "./CountryListItem";
import CountryDetailModal from "./CountryDetailModal";
import LoadingScreen from "../app/LoadingScreen";

interface ICountryListProp {
    countries: ICountryDetail[]
}

const CountryList: FC<ICountryListProp> = ({countries}) => {
  const [isOpen, setIsOpen] = useState(false); // State for modal visibility
    const [selectedCountry, setSelectedCountry] = useState<ICountryDetail>();


  const handleOpenModal = (country: ICountryDetail) => {
        setSelectedCountry(country);
        setIsOpen(true);
  }
  const handleCloseModal = () => {
        setSelectedCountry(undefined);
        setIsOpen(false);
  }

  return (
      countries?
          <main className="flex justify-center items-center p-10">
              <div className="p-4 ">
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {countries?.map((country) => (
                          <li key={country.name.official}
                              className="p-2 border rounded-md hover:bg-gradient-to-r from-orange-200 to-white">
                              <CountryListItem country={country} handleOpen={handleOpenModal}/>
                              <CountryDetailModal key={country.name.official} country={country}
                                                  onClose={handleCloseModal}
                                                  isOpen={isOpen && selectedCountry === country}
                              />
                          </li>
                      ))}
                  </ul>
              </div>

          </main>
          :
          <LoadingScreen isOpen={true}/>
  );
};

export default CountryList;
