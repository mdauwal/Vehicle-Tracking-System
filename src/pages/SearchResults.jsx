import React from "react";
import Sidebar from "./Sidebar";
import MapComponent from "./MapComponent";
import "./SearchResults.css";  

function SearchResult() {
  return (
    <div className="search-result-container">
      <Sidebar />
      <MapComponent />
    </div>
  );
}

export default SearchResult;