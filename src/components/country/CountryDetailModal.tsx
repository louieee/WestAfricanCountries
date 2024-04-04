import React, {FC} from "react";
import {ICountryDetailModalProps} from "../../interfaces/countries";
import Modal from "../reusables/Modal";


const CountryDetailModal: FC<ICountryDetailModalProps> = ({country,
                                                        isOpen, onClose}) => {

  if (!country) return null; // Handle no country data

  const currency = country.currencies[Object.keys(country.currencies)[0]];
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="fixed inset-0 bg-teal-100 bg-opacity-75 flex justify-center items-center z-50">
        <div className={"flex flex-col bg-gradient-to-l from-light to-primary p-8 rounded-md shadow-md w-[600px]"}>
          <h2 className="text-2xl font-medium text-center mb-3">{country.name.official}</h2>
          <div className={"flex justify-between"}>
            <div className={"mr-4"}>
              <ul className="list-disc space-y-2 mt-4">
                <li className={"font-bold"}>Capital: <span className={"font-normal"}>{country.capital}</span></li>
                <li className={"font-bold"}>Currency: <span className={"font-normal"}>{currency?.name}</span></li>
                <li className={"font-bold"}>Top-Level Domain: <span className={"font-normal"}>{country.tld}</span>
                </li>
                <li className={"font-bold"}>Calling Code(s): <span className={"font-normal"}>{country.idd.root}</span>
                </li>
              </ul>
            </div>
            <div className={"flex flex-col space-y-2"}>
              <p className={"text-7xl shadow-sm"}>{country.flag}</p>
              <img className={"h-20 w-20 shadow-sm"} src={country.coatOfArms.svg || country.coatOfArms.png} alt={country.name.common}/>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CountryDetailModal