import {useState, FC} from "react";
import CountryDetailView from "../../features/country/CountryDetailView";
import {ICountryDetail} from "../../interfaces/countries";
import CountryListItem from "./CountryListItem";

interface ICountryListModal {
    countries: ICountryDetail[],
    handleOpen: ()=> void,
    handleClose: ()=>void,
    isOpen: boolean
}

const CountryList: FC<ICountryListModal> = ({countries, handleClose, handleOpen, isOpen}) => {
    const [selectedCountry, setSelectedCountry] = useState<ICountryDetail>();
    const handleOpenFunc = (country: ICountryDetail)=>{
        setSelectedCountry(country)
        handleOpen()
    }

    const handleCloseFunc = ()=>{
        setSelectedCountry(undefined)
        handleClose()
    }

    return (
        <div className="bg-white p-4 ">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {countries?.map((country) => (
                    <li key={country.name.official} className="p-2 border rounded-md hover:bg-gray-100">
                        <CountryListItem country={country} handleOpen={handleOpenFunc}/>
                        <CountryDetailView key={country.name.official} country={country} onClose={handleCloseFunc}
                                           isOpen={isOpen && selectedCountry === country}
                        />
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default CountryList;
