import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useContext } from 'react';
import IncidenceContext from '../context/IncidenceContext';
import OnRouteImage from '../../src/assets/images/image-16.png'

const IncidenceCards = () => {

    const { incidenceData, handleCardClick } = useContext(IncidenceContext);

    return (

        <div className='h-screen overflow-y-scroll'>
            {
                incidenceData.incidence.map((incidence, index) => (
                    <a href='#' key={index} onClick={() => handleCardClick(index)}>
                        <div className="card bg-base-100 w-full shadow-xl mb-5">
                            <div className='container h-40 bg-no-repeat bg-cover bg-center flex flex-col justify-between p-4 rounded-t-2xl' style={{ backgroundImage: `url(${OnRouteImage})` }}>
                                <div></div>
                                <div className="badge bg-[#BF2600] border border-[#BF2600] p-3 text-white rounded font-Avenir">Under Attack</div>
                            </div>
                            <div className="card-body">
                                <h2 className="font-Avenir card-title text-[#0747A6]">{incidence.route}</h2>
                                <p className='font-Avenir text-[#1A1A1A]'>{incidence.description}</p>
                                <p className='font-Avenir text-[#6B778C]'>	Reported: {incidence.date}, {incidence.time}</p>
                            </div>
                        </div>
                    </a>
                ))
            }
        </div>
    )
}

export default IncidenceCards