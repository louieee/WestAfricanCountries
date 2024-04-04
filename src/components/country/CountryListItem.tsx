import {ICountryListItemProp} from "../../interfaces/countries";
import {FC} from "react";


const CountryListItem: FC<ICountryListItemProp> = ({country, handleOpen}) => {
    return (
        <div className="flex justify-between" onClick={() => handleOpen(country)}>
            <p className="mt-3 mr-4 text-md font-medium">{country.name.official}</p>
            <h1 className="text-6xl">{country.flag}</h1>

        </div>

    )
}
export default CountryListItem;