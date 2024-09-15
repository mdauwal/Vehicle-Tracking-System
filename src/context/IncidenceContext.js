import { createContext, useState } from "react";
import IncidenceData from '../data/incidenceData'

const IncidenceContext = createContext();
export const IncidenceProvider = ({ children }) => {

    const [incidenceData, setIncidenceData] = useState(IncidenceData);
    const [selectedIncidenceIndex, setSelectedIncidenceIndex] = useState(0);

    const selectedIncidence = incidenceData.incidence[selectedIncidenceIndex] || {}; // Handle potential undefined index
    
    const { driver } = selectedIncidence;

    const findDriver = (driverId) => {
        return incidenceData.driver.find((driver) => driver.id === driverId);
    };

    const incidenceDriver = findDriver(driver);

    const handleCardClick = (index) => {
        setSelectedIncidenceIndex(index);
    };

    return <IncidenceContext.Provider value={{

        incidenceData,
        selectedIncidenceIndex,
        selectedIncidence,
        incidenceDriver,
        handleCardClick,

    }}>{children}</IncidenceContext.Provider>
}

export default IncidenceContext;