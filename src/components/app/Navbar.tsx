import React from 'react';
import {NavBar} from "../../helpers/styling";


interface NavProp {
    search: string,
    setSearch: (val:string)=>void
}
const NavigationBar = ({search, setSearch}:NavProp) => {

  return (
    <nav className={`sticky top-0 z-50 ${NavBar.background_color} flex justify-between items-center h-16 px-4`}>
      <div className="text-white md-text-md lg:text-lg font-bold">West African Countries</div>
      <div className="flex items-center">  {/* Add sm:flex-grow for responsiveness */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className={`${NavBar.search_color} text-white rounded-md px-4 py-2
           focus:outline-none focus:ring-2 focus:${NavBar.search_ring_color} sm:w-full`}
        />
      </div>
    </nav>
  );
};

export default NavigationBar;
