import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import OnRouteImage from '../../src/assets/images/image-16.png'
import CurrentLocationImage from '../../src/assets/images/current-location.png'
import PersonImage from '../../src/assets/images/person.png'
import PlateNumberImage from '../../src/assets/images/image-plate-number.png'

const ClickToView = () => {
  return (
    <div className='container grid grid-cols-5'>
      {/* <h1 className="font-Dmsans">Track Activities</h1>
        <h1 className="font-Circularstd">Track Activities</h1>
        <h1 className="font-Avenir">Track Activities</h1> */}

      <div className='col-span-1 p-5'>
        {/* map the left container cards */}
        <div className='mb-10'>
          {/* fix the title */}
          <h3 className='text-black font-Avenir font-bold'>Trucks on Route (6)</h3>
          <p className='text-[#6B778C] font-Circularstd text-[.875rem]'>See details of trucks currently under attack</p>
        </div>

        <div className="overflow-y-auto">
          {/* overflow-y-auto - apply above */}
          {/* fixme - map through */}

          <div className="card bg-base-100 w-full shadow-xl mb-5">
            <div className='container h-40 bg-no-repeat bg-cover bg-center flex flex-col justify-between p-4 rounded-t-2xl' style={{ backgroundImage: `url(${OnRouteImage})` }}>
              <div></div>
              <div className="badge bg-[#BF2600] border border-[#BF2600] p-3 text-white rounded font-Avenir">Under Attack</div>
            </div>
            <div className="card-body">
              <h2 className="font-Avenir card-title text-[#0747A6]">On Federal Road</h2>
              <p className='font-Avenir text-[#1A1A1A]'>Possible Car Jacking & Arm Robbery</p>
              <p className='font-Avenir text-[#6B778C]'>	Reported: Nov 14, 	03:37:25 am</p>
            </div>
          </div>

          <div className="card bg-base-100 w-full shadow-xl mb-5">
            <div className='container h-40 bg-no-repeat bg-cover bg-center flex flex-col justify-between p-4 rounded-t-2xl' style={{ backgroundImage: `url(${OnRouteImage})` }}>
              <div></div>
              <div className="badge bg-[#BF2600] border border-[#BF2600] p-3 text-white rounded font-Avenir">Under Attack</div>
            </div>
            <div className="card-body">
              <h2 className="font-Avenir card-title text-[#0747A6]">On Federal Road</h2>
              <p className='font-Avenir text-[#1A1A1A]'>Possible Car Jacking & Arm Robbery</p>
              <p className='font-Avenir text-[#6B778C]'>	Reported: Nov 14, 	03:37:25 am</p>
            </div>
          </div>

          <div className="card bg-base-100 w-full shadow-xl mb-5">
            <div className='container h-40 bg-no-repeat bg-cover bg-center flex flex-col justify-between p-4 rounded-t-2xl' style={{ backgroundImage: `url(${OnRouteImage})` }}>
              <div></div>
              <div className="badge bg-[#BF2600] border border-[#BF2600] p-3 text-white rounded font-Avenir">Under Attack</div>
            </div>
            <div className="card-body">
              <h2 className="font-Avenir card-title text-[#0747A6]">On Federal Road</h2>
              <p className='font-Avenir text-[#1A1A1A]'>Possible Car Jacking & Arm Robbery</p>
              <p className='font-Avenir text-[#6B778C]'>	Reported: Nov 14, 	03:37:25 am</p>
            </div>
          </div>

        </div>

      </div>
      <div className='col-span-4 p-5'>
        <Link to={'someplace'} className='flex items-center gap-2'><FaArrowLeft /> Back </Link>

        <div className='flex items-center justify-between mt-5'>
          <p className='text-[#091E42] font-Circularstd font-bold'>Current Location</p>
          <button className="btn btn-primary bg-[#1633A3] rounded">Contact Driver</button>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
          <div className='col-span-2'>
            <img src={CurrentLocationImage} alt="Current Location" className='w-full' />
          </div>

          <div className='col-span-1'>
            <div className="grid grid-rows-3 gap-3">
              <img src={OnRouteImage} alt="Current Location" className='w-full row-span-2 grow-1' />
              <div className="row-span-1 grid grid-cols-2 gap-3">
                <img src={PlateNumberImage} alt="Current Location" className='w-full' />
                <img src={PlateNumberImage} alt="Current Location" className='w-full' />
              </div>
            </div>
          </div>
        </div>

        <div className='container grid grid-cols-1 md:grid-cols-2 gap-3 mt-3'>
          <div className="card bg-base-100 w-full shadow-xl p-5 col-span-1">
            <h3 className='text-black font-Avenir font-bold mb-5 text-[1.5rem]'>Incidence Report</h3>

            <span className='flex justify-between mb-3'>
              <p className='text-[#6B778C] font-Avenir text-[.875rem]'>Place of Incident</p>
              <p className='text-[#6B778C] font-Avenir text-[1.25rem] text-[#091E42] font-bold'>Jaji - Zaria</p>
            </span>

            <span className='flex justify-between mb-3'>
              <p className='text-[#6B778C] font-Avenir text-[.875rem]'>Date & Time</p>
              <p className='text-[#6B778C] font-Avenir text-[1.25rem] text-[#091E42] font-bold'>Nov 14, 03:37:25 am</p>
            </span>

            <span className='flex justify-between mb-3'>
              <p className='text-[#6B778C] font-Avenir text-[.875rem]'>Truck Route</p>
              <p className='text-[#6B778C] font-Avenir text-[1.25rem] text-[#091E42] font-bold'>Federal Highway</p>
            </span>

            <span className='flex justify-between mb-3'>
              <p className='text-[#6B778C] font-Avenir text-[.875rem]'>Truck Content</p>
              <p className='text-[#6B778C] font-Avenir text-[1.25rem] text-[#091E42] font-bold'>Alcohol</p>
            </span>

            <span className='flex justify-between mb-3'>
              <p className='text-[#6B778C] font-Avenir text-[.875rem]'>Status</p>
              <p className='text-[#6B778C] font-Avenir text-[1.25rem] text-[#091E42] font-bold'>Still in Danger</p>
            </span>

          </div>

          <div className="card bg-base-100 w-full shadow-xl p-5 col-span-1">
            <h3 className='text-black font-Avenir font-bold mb-5 text-[1.5rem]'>Driver’s Information</h3>

            <span className='grid grid-cols-3 gap-3 mb-5'>
              <div className="avatar col-span-1 border-r-2 flex justify-center">
                <div className="w-24 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt=''/>
                </div>
              </div>
              <div className='col-span-2'>
                <p className='text-[#6B778C] font-Avenir text-[1.25rem]'>William O. Johnson</p>
                <p className='text-[#6B778C] font-Avenir text-[.875rem]'>Membership ID: Wil97190</p>
                <p className='text-[#6B778C] font-Avenir text-[.875rem]'>License: Class A</p>
              </div>
            </span>

            <span className='flex justify-between'>
              <p className='text-[#6B778C] font-Avenir text-[.875rem]'>Email</p>
              <p className='text-[#6B778C] font-Avenir text-[1.25rem]'>Willjohn@gmail.com</p>
            </span>

            <span className='flex justify-between'>
              <p className='text-[#6B778C] font-Avenir text-[.875rem]'>Phone Number</p>
              <p className='text-[#6B778C] font-Avenir text-[1.25rem]'>09123456789</p>
            </span>

          </div>
        </div>

      </div>
    </div >
  );
};

export default ClickToView;
