import {ICountryListItemProp} from "../../interfaces/countries";
import {FC} from "react";


const CountryListItem: FC<ICountryListItemProp> = ({country, handleOpen}) => {
    /*
    * This component handles a single country list item
    * */
    return (
        <div className="flex justify-between" onClick={() => handleOpen(country)}>
            <p className="mt-3 mr-4 text-md font-medium w-[300px]">{country.name.official}</p>
            <p className="text-6xl">{country.flag}</p>
        </div>

    )
}
export default CountryListItem;