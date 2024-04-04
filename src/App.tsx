import React from 'react';
import './App.css';
import CountryListView from "./features/country/CountryListView";
import Navbar from "./components/app/Navbar";
import CountryAppView from "./features/country/CountryAppView"; // Import your main stylesheet

const App: React.FC = () => {
  return (

        <CountryAppView />

  );
};

export default App;
