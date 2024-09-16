import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';
import DateRangePicker from '../components/DateRangePicker';
import PlateDropdown from '../components/PlateDropdown';
import TimeOfDaySlider from '../components/TimeOfDaySlider';
import orangeflag from '../images/orangeflag.svg';
import greenflag from '../images/greenflag.svg';
import redflag from '../images/redflag.svg';


const SearchResults = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="relative h-screen w-full flex justify-center">
    <div className="container w-full lg:max-w-[1440px] flex justify-center">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-5 left-[364px] z-40 p-2 bg-white text-gray-200 rounded-lg shadow-lg"
      >
        {isSidebarVisible ? <FaTimes size={15} /> : <FaBars size={15} />}
      </button>

      <div className="relative h-full w-full flex">
        {/* Sidebar */}
        <div
        className={`absolute top-0 left-0 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
        } z-30 w-96 md:w-64 lg:w-96 flex flex-col h-full overflow-y-auto overflow-x-hidden`}>
        
          <h2 className="text-xl font-semibold mt-0 mb-4 p-4">Search Result</h2>

          {/* Sidebar content */}
        <div className="flex-grow p-4 mt-[-45px]">
          <div className="mb-4 flex justify-between items-center">
            <p className="flex items-center">
              <span className="w-[20px] h-[20px] bg-[#FF9D0A] rounded-full flex items-center justify-center text-white mr-2">5</span>
              Five States through to Sokoto
            </p>
            <input type="checkbox" />
          </div>

          <div className="mb-4 flex justify-between items-center">
            <p className="flex items-center">
              <span className="w-[20px] h-[20px] bg-[#31C75B] rounded-full flex items-center justify-center text-white mr-2">4</span>
              Four major Federal roads
            </p>
            <input type="checkbox" />
          </div>

          <div className="mb-4 flex justify-between items-center">
            <p className="flex items-center">
              <span className="w-[20px] h-[20px] bg-[#A727F5] rounded-full flex items-center justify-center text-white mr-2">4</span>
              Four states roads
            </p>
            <input type="checkbox" />
          </div>

          <Link to="/" className="text-blue">More Insights</Link>


           {/* Form for Bus Route and Filters */}
           <div className="form-control mt-4 mb-4 flex items-center justify-between">
            <label className="label">Bus Route</label>
            <input
              type="text"
              placeholder="Search routes"
              className="p-[2px] input input-bordered border border-[#E2E2E2] rounded-md w-[200px] ml-[20px]"
            />
          </div>

          <div className="form-control mb-4 flex items-center justify-between">
            <label className="label">Bus</label>
            <input
              type="text"
              placeholder="Search"
              className="p-[2px] input input-bordered border border-[#E2E2E2] rounded-md w-[200px] ml-[20px]"
            />
          </div>

          {/* Review Status */}
            <div className="mb-4 mt-6">
            <label className="block mb-2">Review Status</label>
            <div className="flex border-[1.11px] border-[#E2E2E2] rounded-md w-full">
              <button className="btn flex-grow flex items-center justify-center p-[4px] border-1 border-[#E2E2E2] hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500 rounded-md">
                Unreviewed
              </button>
              <button className="btn flex-grow flex items-center justify-center p-[4px] border-[0.1px] border-[#E2E2E2] hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500 rounded-md">
                Reviewed
              </button>
              <button className="btn flex-grow flex items-center justify-center p-[4px] border-1 border-[#E2E2E2] hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500 rounded-md">
                Approved
              </button>
              <button className="btn flex-grow flex items-center justify-center p-[4px] border-l-[0.1px] border-[#E2E2E2] hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500">
                Rejected
              </button>
            </div>
            </div>
          
          {/* Internal Review */}
         <div className="mb-6 mt-6">
            <label className="block mb-2">internal Review</label>
            <div className="flex border-[1.11px] border-[#E2E2E2] rounded-md w-full">
              <button className="btn flex-grow flex items-center justify-center p-[4px] border-1 border-[#E2E2E2] hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500 rounded-md">
                Unreviewed
              </button>
              <button className="btn flex-grow flex items-center justify-center p-[4px] border-[0.1px] border-[#E2E2E2] hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500 rounded-md">
                Reviewed
              </button>
              <button className="btn flex-grow flex items-center justify-center p-[4px] border-1 border-[#E2E2E2] hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500 rounded-md">
                Approved
              </button>
              <button className="btn flex-grow flex items-center justify-center p-[4px] border-l-[0.1px] border-[#E2E2E2] hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500">
                Rejected
              </button>
            </div>
            </div>

          
          {/* Time of Day */}
          <TimeOfDaySlider/>

          {/* Market Days */}
          <div className="mb-6 mt-8">
          <label className="block mb-2">Market Days</label>
          <div className="flex border-[1.11px] border-[#E2E2E2] rounded-md w-full">
              <button className="btn flex-grow flex items-center justify-center p-[4px] border-1 border-[#E2E2E2] hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500 rounded-md">
                Unspecified
              </button>
              <button className="btn flex-grow flex items-center justify-center p-[4px] border-[0.1px] border-[#E2E2E2] hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500 rounded-md">
                Specified
              </button>
              <button className="btn flex-grow flex items-center justify-center p-[4px] border-1 border-[#E2E2E2] hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500 rounded-md">
                Yes
              </button>
              <button className="btn flex-grow flex items-center justify-center p-[4px] border-l-[0.1px] border-[#E2E2E2] hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500">
                No
              </button>
            </div>
          </div>
         
          {/* Plate */}
          <PlateDropdown/>

          {/* Distance */}
         <div className="mb-4 mt-6">
           <label className="block mb-2">Road Disturbance</label>
           <div className="flex border-[1.11px] border-[#E2E2E2] rounded-md w-full">
              <button className="btn flex-grow flex items-center justify-center p-[4px] border-1 border-[#E2E2E2] hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500 rounded-md">
                Not flagged
              </button>
              <button className="btn flex-grow flex items-center justify-center p-[4px] border-[0.1px] border-[#E2E2E2] hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500 rounded-md">
                Flagged
              </button>
              <button className="btn flex-grow flex items-center justify-center p-[4px] border-1 border-[#E2E2E2] hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500 rounded-md">
                <img src={redflag} alt="flag" />
              </button>
              <button className="btn flex-grow flex items-center justify-center p-[4px] border-l-[0.1px] border-[#E2E2E2] hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500">
              <img src={greenflag} alt="flag" />
              </button>
              <button className="btn flex-grow flex items-center justify-center p-[4px] border-l-[0.1px] border-[#E2E2E2] hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500">
              <img src={orangeflag} alt="flag" />
              </button>
            </div>
         </div>

         
         {/* Robbery Attack */}
         <DateRangePicker/>

         {/* Trucks */}
         <div className="mt-20 mb-4">
           <p className="block"><span className=" font-semibold">12</span> Trucks on similar routes</p>
           <p className="block">6 Under attack in Zaria-Kaduna road</p>
         </div>


        </div>
        </div>


        {/* Map */}
        <div className="relative flex-grow">
        <MapContainer
          center={[13.005873, 5.247552]} 
          zoom={13}
          style={{ height: "100vh", width: "100%", zIndex: 1 }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
         {/* Buttons for Map, List, Grid, Evaluation */}
        <div className="absolute top-6 left-[420px] p-2 flex space-x-4 z-20 bg-white rounded-lg">
          <button className="btn btn-primary flex items-center border-[#E2E2E2] hover:border-blue-500 hover:text-white focus:border-blue-500 focus:bg-blue-500 focus:text-white rounded-md p-1 "> Map</button>
          <button className="btn btn-outline flex items-center border-[#E2E2E2] hover:border-blue-500 hover:text-white focus:border-blue-500 focus:bg-blue-500 focus:text-white rounded-md p-1"> List</button>
          <button className="btn btn-outline flex items-center border-[#E2E2E2] hover:border-blue-500 hover:text-white focus:border-blue-500 focus:bg-blue-500 focus:text-white rounded-md p-1"> Grid</button>
          <button className="btn btn-outline flex items-center border-[#E2E2E2] hover:border-blue-500 hover:text-white focus:border-blue-500 focus:bg-blue-500 focus:text-white rounded-md p-1"> Evaluation</button>
        </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default SearchResults;
