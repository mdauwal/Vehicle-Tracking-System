import React, { useState } from "react";

const PlateDropdown = () => {
  const [selectedPlate, setSelectedPlate] = useState(""); // Manage selected plate
  const [isOpen, setIsOpen] = useState(false); // Manage dropdown visibility

  const plates = ["6VKW823", "4ABC123", "9XYZ567"]; // Example plates

  // Handle selecting a plate
  const handleSelect = (plate) => {
    setSelectedPlate(plate);
    setIsOpen(false); // Close dropdown
  };

  // Handle removing the selected plate
  const handleRemove = () => {
    setSelectedPlate("");
  };

  return (
    <div className="mb-4 flex justify-between align-middle">
      <label className="block mb-2 text-gray-600">Plate</label>
      <div className="relative w-full left-8">
        <div className="flex items-center justify-between border border-gray-300 rounded-lg px-2 py-1 w-72">
          {/* Selected Plate */}
          {selectedPlate ? (
            <div className="flex items-center">
              <span className="px-2 py-0.5 border border-blue-500 rounded-md text-blue-500">
                {selectedPlate}
              </span>
              {/* Remove button (X) */}
              <button
                className="ml-2 text-gray-400 hover:text-gray-600"
                onClick={handleRemove}
              >
                &times;
              </button>
            </div>
          ) : (
            <span className="text-gray-500">Select Plate</span>
          )}

          {/* Dropdown toggle button */}
          <button
            className="ml-2 bg-gray-100 p-1 rounded-md text-gray-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            ▼
          </button>
        </div>

        {/* Dropdown options */}
        {isOpen && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg">
            {plates.map((plate, index) => (
              <div
                key={index}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(plate)}
              >
                {plate}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlateDropdown;
