import React from 'react';
import { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import IncidenceContext from '../context/IncidenceContext';
import { FaArrowLeft } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import IncidenceCards from '../components/IncidenceCards';
import IncidenceDetails from '../components/IncidenceDetails';
import OnRouteImage from '../../src/assets/images/image-16.png';
import CurrentLocationImage from '../../src/assets/images/current-location.png';
import PersonImage from '../../src/assets/images/person.png';
import PlateNumberImage from '../../src/assets/images/image-plate-number.png';

const ClickToView = () => {
  const {
    selectedIncidenceIndex,
    handleCardClick,
    showDetails,
    goBackToCards,
  } = useContext(IncidenceContext);
  // const [incidenceCardsView, setIncidenceCardsView] = useState(true)

  return (
    // <IncidenceProvider>
    <div className="grid grid-cols-1 md:grid-cols-5 md:p-5">
      {/* <h1 className="font-Dmsans">Track Activities</h1>
          <h1 className="font-Circularstd">Track Activities</h1>
          <h1 className="font-Avenir">Track Activities</h1> */}

      <div className={`col-span-1 p-5 ${showDetails ? 'hidden md:block' : ''}`}>
        {/* map the left container cards */}
        <div className="mb-10">
          {/* fix the title */}
          <Link
            to={'/destination-tracking/search-results'}
            className="flex items-center gap-2 mb-5"
          >
            <FaArrowLeft /> Back
          </Link>
          <h3 className="text-black font-Avenir font-bold">
            Trucks on Route (6)
          </h3>
          <p className="text-[#6B778C] font-Circularstd text-[.875rem]">
            See details of trucks currently under attack
          </p>
        </div>
        <div className="overflow-y-scroll">
          <IncidenceCards
            selectedIncidenceIndex={selectedIncidenceIndex}
            onCardClick={handleCardClick}
          />
        </div>
      </div>

      <div
        className={`col-span-4 p-5 ${!showDetails ? 'hidden md:block' : ''}`}
      >
        <span className="flex justify-between mb-5">
          <Link
            to={'/destination-tracking/search-results'}
            className="flex items-center gap-2"
          >
            <FaArrowLeft /> Back
          </Link>
          <button onClick={goBackToCards} className="flex items-center gap-2">
            <FaTimes />
          </button>
        </span>
        <IncidenceDetails />
      </div>
    </div>
    // </IncidenceProvider>
  );
};

export default ClickToView;
