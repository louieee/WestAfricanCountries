import React from 'react';


interface NavProp {
    search: string,
    setSearch: (val:string)=>void
}
const NavigationBar = ({search, setSearch}:NavProp) => {

  return (
    <nav className={`sticky top-0 z-50 bg-teal-700 flex justify-between items-center h-16 px-4`}>
      <div className="md-text-md lg:text-lg text-white font-bold">West African Countries</div>
      <div className="flex items-center">  {/* Add sm:flex-grow for responsiveness */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className={`bg-teal-800 text-white rounded-md px-4 py-2
           focus:outline-none focus:ring-2 focus:ring-teal-300 sm:w-full`}
        />
      </div>
    </nav>
  );
};

export default NavigationBar;
