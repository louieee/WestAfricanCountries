import {useState} from "react";
import CountryList from "../../components/country/CountryList";
import {ICountryDetail} from "../../interfaces/countries";

interface ICountryListProp {
    countries: ICountryDetail[]
}

const CountryListView: React.FC<ICountryListProp> = ({countries}) => {
  const [isOpen, setIsOpen] = useState(false); // State for modal visibility

  const handleOpenModal = () => {
    console.log("open: ", isOpen)
    setIsOpen(true);
  }
  const handleCloseModal = () => setIsOpen(false);

  return (
      countries?
          <main className="flex justify-center items-center p-10">
            <CountryList countries={countries} handleOpen={handleOpenModal}
                   handleClose={handleCloseModal}
                   isOpen={isOpen}/>
          </main>
          :
      <div/>
  );
};

export default CountryListView;
