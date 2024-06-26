import React from 'react';


interface NavProp {
    search: string,
    setSearch: (val:string)=>void
}
const NavigationBar = ({search, setSearch}:NavProp) => {
    /*
    * This component handles the nav bar
    * */

  return (
    <nav className={`sticky top-0 z-50 bg-teal-700 flex justify-between items-center h-16 px-4`}>
      <div className="xs:text-xs sm:text-sm md:text-md lg:text-lg text-white font-bold">West African Countries</div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className={`bg-teal-800 text-white rounded-md px-4 py-2
          xs:text-xs sm:text-sm md:text-md lg:text-lg
           focus:outline-none focus:ring-2 focus:ring-teal-300 sm:w-full`}
        />
      </div>
    </nav>
  );
};

export default NavigationBar;
