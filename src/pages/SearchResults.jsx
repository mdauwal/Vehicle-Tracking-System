import React from 'react';
import Sidebar from './Sidebar';
import MapComponent from './MapComponent';
import './SearchResults.css';

function SearchResult() {
  return (
    <div className="search-result-container flex flex-col lg:flex-row h-screen">
      <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 lg:h-full bg-gray-100 lg:flex-shrink-0 overflow-y-auto">
        <Sidebar />
      </div>

      <div className="flex-1 h-2/3 lg:h-full">
        <MapComponent />
      </div>
    </div>
  );
}

export default SearchResult;
