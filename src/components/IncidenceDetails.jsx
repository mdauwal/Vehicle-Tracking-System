import React from 'react'
import { useContext } from 'react';
import IncidenceContext from '../context/IncidenceContext';
import OnRouteImage from '../../src/assets/images/image-16.png'
import CurrentLocationImage from '../../src/assets/images/current-location.png'
import PersonImage from '../../src/assets/images/person.png'
import PlateNumberImage from '../../src/assets/images/image-plate-number.png'
import CurrentLocationMap from '../components/CurrentLocationMap'

const IncidenceDetails = () => {

    const { selectedIncidence, incidenceDriver } = useContext(IncidenceContext);
   
    return (
        <div className='h-screen overflow-y-scroll'>
            <div className='flex items-center justify-between mt-5'>
                <p className='text-[#091E42] font-Circularstd font-bold'>Current Location</p>
                <button className="btn btn-primary bg-[#1633A3] rounded">Contact Driver</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
                <div className='col-span-2'>
                    <CurrentLocationMap />
                    {/* <h3>map here</h3> */}
                    {/* <img src={CurrentLocationImage} alt="Current Location" className='w-full' /> */}
                </div>

                <div className='col-span-1'>
                    <div className="grid grid-rows-3 gap-3">
                        {/* <img src={OnRouteImage} alt="Current Location" className='w-full row-span-2 grow-1' /> */}
                        <div className='h-60 w-full bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${OnRouteImage})` }}>
                        </div>
                        <div className="row-span-1 grid grid-cols-2 gap-3">
                            <img src={PlateNumberImage} alt="Current Location" className='w-full' />
                            <div className='border p-5 rounded h-fit'>
                                <p className='font-Avenir text-[#6B778C] font-semibold text-[.875rem]'>Truck Plate Number</p>
                                <h1 className='font-bold text-black text-[1.25rem]'>{selectedIncidence.truck}</h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-5'>
                <div className="card bg-base-100 w-full shadow-xl p-5 col-span-1">
                    <h3 className='text-black font-Avenir font-bold mb-5 text-[1.5rem] text-center md:text-left'>Incidence Report</h3>

                    <span className='flex justify-between mb-3'>
                        <p className='text-[#6B778C] font-Avenir text-[.875rem]'>Place of Incident</p>
                        <p className='font-Avenir text-[1.25rem] text-[#091E42] font-bold'>{selectedIncidence.place}</p>
                    </span>

                    <span className='flex justify-between mb-3'>
                        <p className='text-[#6B778C] font-Avenir text-[.875rem]'>Date & Time</p>
                        <p className='font-Avenir text-[1.25rem] text-[#091E42] font-bold'>{selectedIncidence.date}, {selectedIncidence.time}</p>
                    </span>

                    <span className='flex justify-between mb-3'>
                        <p className='text-[#6B778C] font-Avenir text-[.875rem]'>Truck Route</p>
                        <p className='font-Avenir text-[1.25rem] text-[#091E42] font-bold'>{selectedIncidence.route}</p>
                    </span>

                    <span className='flex justify-between mb-3'>
                        <p className='text-[#6B778C] font-Avenir text-[.875rem]'>Truck Content</p>
                        <p className='font-Avenir text-[1.25rem] text-[#091E42] font-bold'>{selectedIncidence.content}</p>
                    </span>

                    <span className='flex justify-between mb-3'>
                        <p className='text-[#6B778C] font-Avenir text-[.875rem]'>Status</p>
                        <p className='font-Avenir text-[1.25rem] text-[#091E42] font-bold'>{selectedIncidence.status}</p>
                    </span>

                </div>

                <div className="card bg-base-100 w-full shadow-xl p-5 col-span-1">
                    <h3 className='text-black font-Avenir font-bold mb-5 text-[1.5rem] text-center md:text-left'>Driver’s Information</h3>

                    <span className='grid grid-cols-1 md:grid-cols-3 gap-3 mb-5'>
                        <div className="avatar col-span-1 md:border-r-2 flex justify-center">
                            <div className="w-24 rounded-full">
                                <img src={PersonImage} alt='' />
                            </div>
                        </div>
                        <div className='col-span-2 p-3 text-center md:text-left'>
                            <p className='font-Avenir text-[1.25rem] text-[#091E42] font-bold'>{incidenceDriver.name}</p>
                            <p className='text-[#6B778C] font-Avenir text-[.875rem] mt-2'>Membership ID: <span className='font-semibold'>{incidenceDriver.id}</span></p>
                            <p className='text-[#6B778C] font-Avenir text-[.875rem] mt-2'>License: <span className='font-semibold'>{incidenceDriver.license}</span></p>
                        </div>
                    </span>

                    <span className='flex justify-between mb-3'>
                        <p className='text-[#6B778C] font-Avenir text-[.875rem]'>Email</p>
                        <p className='font-Avenir text-[1.25rem] text-[#091E42] font-bold'>{incidenceDriver.email}</p>
                    </span>

                    <span className='flex justify-between'>
                        <p className='text-[#6B778C] font-Avenir text-[.875rem]'>Phone Number</p>
                        <p className='font-Avenir text-[1.25rem] text-[#091E42] font-bold'>{incidenceDriver.phone}</p>
                    </span>

                </div>
            </div>
        </div>
    )
}

export default IncidenceDetails