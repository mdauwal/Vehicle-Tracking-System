import { createContext, useState } from "react";
import IncidenceData from '../data/incidenceData'

const IncidenceContext = createContext();
export const IncidenceProvider = ({ children }) => {

    const [incidenceData, setIncidenceData] = useState(IncidenceData);
    const [selectedIncidenceIndex, setSelectedIncidenceIndex] = useState(0);
    const [showDetails, setShowDetails] = useState(false); // State to toggle between card and details view

    const selectedIncidence = incidenceData.incidence[selectedIncidenceIndex] || {}; // Handle potential undefined index
    
    const { driver } = selectedIncidence;

    const findDriver = (driverId) => {
        return incidenceData.driver.find((driver) => driver.id === driverId);
    };

    const incidenceDriver = findDriver(driver);

    const handleCardClick = (index) => {
        setSelectedIncidenceIndex(index);
        setShowDetails(true);   // show the details component
    };

    const goBackToCards = () => {
        setShowDetails(false);  // return to the cards component
    };

    return <IncidenceContext.Provider value={{

        incidenceData,
        selectedIncidenceIndex,
        selectedIncidence,
        incidenceDriver,
        handleCardClick,
        showDetails,
        goBackToCards
        
    }}>{children}</IncidenceContext.Provider>
}

export default IncidenceContext;