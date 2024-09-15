import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MapComponent from "./MapComponent";
import "./SearchResults.css";

function SearchResult() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Track sidebar state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative search-result-container">
      {/* Toggle Button for small screens */}
      <button
        className="sidebar-toggle-btn lg:hidden" // Hidden on large screens
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>

      {/* Sidebar - Visible based on the toggle state */}
      {isSidebarOpen && (
        <div className="sidebar-container">
          <Sidebar />
        </div>
      )}

      {/* Map always visible */}
      <MapComponent />

      {/* Overlay effect when sidebar is open on mobile */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </div>
  );
}

export default SearchResult;
