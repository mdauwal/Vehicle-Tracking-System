import React, {useState} from "react";
import { Link } from "react-router-dom";
import Truck from "../data/Truck.png";
import greenFlag from "../data/greenFlag.png";
import redFlag from "../data/redFlag.png";
import yellowFlag from "../data/yellowFlag.png";

const Sidebar = () => {
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() { 
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime)
  };

  setInterval(() => {
    setTime(updateTime)
  }, 1000);




  return (
    <div className="overflow-y-auto p-4 bg-white shadow-lg">
      <div className="mb-4">
        <div className="flex flex-1 gap-10px">
        <h2 className="font-semibold text-lg mb-4">Search Result</h2>
        <h4 className="font-semibold text-lg ml-20 mb-4 border-2 rounded border-blue-600 px-1">{time}</h4>
        </div>
        

        <div className="p-4 border border-blue-500 rounded mb-4">
          <h3 className="font-semibold text-gray-800">Sokoto's Status</h3>
          <hr className="my-2 border-blue-300" />
          <div className="flex justify-between">
            <span>History Shari’a</span>
            <span className="font-semibold">Yes</span>
          </div>
          <div className="flex justify-between">
            <span>Risk Level</span>
            <div className="bg-[#FF0000] h-5 w-1/6 ml-14 mr-0"></div>
            <span className="font-semibold">High</span>
          </div>
          <div className="flex justify-between">
            <span>Alcohol Ban</span>
            <span className="font-semibold">12 LGA</span>
          </div>

          <div className="flex justify-end">
            <Link to="/" className="text-blue-600 font-semibold mt-2 underline">
              View in Map
            </Link>
          </div>

          <hr className="my-2 border-blue-300" />
          <div className="text-sm">
            <span>12 Incidence on route in the last 40 days</span>
            <span className="text-green-600 font-bold ml-2">
              + 14% <span className="text-green-600">&#8593;</span>
            </span>
          </div>
        </div>

        {/* Road Options */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <span className="w-5 h-5 bg-[#FFAF00] text-white rounded-full flex justify-center items-center">
              5
            </span>
            <p className="ml-2 text-sm">Five States through to Sokoto</p>
            <input type="checkbox" className="ml-auto" defaultChecked />
          </div>
          <div className="flex items-center mb-2">
            <div className="w-5 h-5 bg-green-500 text-white rounded-full flex justify-center items-center">
              4
            </div>
            <p className="ml-2 text-sm">Four major federal roads</p>
            <input type="checkbox" className="ml-auto" defaultChecked />
          </div>
          <div className="flex items-center mb-2">
            <div className="w-5 h-5 bg-purple-500 text-white rounded-full flex justify-center items-center">
              4
            </div>
            <p className="ml-2 text-sm">Four states roads</p>
            <input type="checkbox" className="ml-auto" defaultChecked />
          </div>
        </div>
        <div>
          <h6 className="text-sm text-blue-600 mb-3">More Insights</h6>
          <Link
            to="/More"
            className="text-blue-600 font-bold mb-3 inline-block"
          >
            More Insights
          </Link>
          <p className="text-sm mb-2">
            See possible routes, federal and state roads, and other route
            disruptions
          </p>
        </div>

        {/* Route 1 */}
        <div className="mt-3 mb-2">
          <div className="flex flex-1 gap-2 mb- 3">
            <h4 className="font-semibold text-gray-800 text-sm font-bold">
              Route 1
            </h4>
            <img src={Truck} alt="Route 1" />
          </div>

          <div className="flex items-center mt-1">
            <span className="bg-gradient-to-r from-red-300 to-yellow-500 px-1 p-0.5 text-sm text-black font-bold">
              Abuja
            </span>
            <span className="mx-1 text-xs">--</span>
            <span className="bg-gradient-to-r from-yellow-500 to-red-500 px-1 p-0.5  font-bold text-sm text-black">
              Kaduna
            </span>
            <span className="mx-1 text-xs">--</span>
            <span className="bg-[#FF0000] p-0.5 px-1 font-bold text-sm text-black">
              Gusau
            </span>
            <span className="mx-1 text-xs">--</span>
            <span className="bg-[#FF0000] p-0.5 px-1 font-bold text-sm text-black">
              Sokoto
            </span>
          </div>
        </div>

        {/* Route 2 */}
        <div className="mb-5 mt-3">
          <div className="flex flex-1 gap-2 mb- 3">
            <h4 className="font-semibold text-gray-800 text-sm font-bold">
              Route 2
            </h4>
            <img src={Truck} alt="Route 2" />
          </div>

          <div className="flex items-center mt-1">
            <span className="bg-gradient-to-r from-yellow-500 to-red-400 px-1 p-0.5 text-sm text-black font-bold">
              Abuja
            </span>
            <span className="mx-1 text-xs">--</span>
            <span className="bg-yellow-500 p-0.5 text-sm text-black font-bold">
              Minna
            </span>
            <span className="mx-1 text-xs">--</span>
            <span className="bg-yellow-500 p-0.5 text-sm font-bold text-black">
              Nasarawa
            </span>
            <span className="mx-1 text-xs">--</span>
            <span className="bg-[#FF0000] p-0.5 text-sm text-black font-bold">
              Sokoto
            </span>
          </div>
        </div>

        {/* Trucks Section */}
        <div className="p-3 border border-gray-400 rounded mb-4">
          <div className="flex flex-1">
            <div className="bg-[#9DBDFF] p-2 rounded-full">
              <img src={Truck} alt="Route 2" />
            </div>
            <div className="ml-2">
              <p className="text-gray-500 text-xs">
                12 Trucks on similar routes
              </p>
              <p className="text-gray-500 text-xs">
                6 Under attack in Zaria-Kaduna road
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <Link to="/" className="text-blue-600 font-bold underline">
              Click to view
            </Link>
          </div>
        </div>

        {/* Market Days Section */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800">Market Days</h4>
          <div className="flex space-x-2 rounded-md border border-gray-300 px-2 py-0">
            <button>Mondays</button>
            <button
              variant="contained"
              className="text-blue-600 border pt-1 pb-1 border-blue-500 px-2 rounded-md"
            >
              Thursdays
            </button>
            <button>Fridays</button>
          </div>
        </div>

        {/* Road Disturbance Section */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800">Road Disturbance</h4>
          <div className="flex space-x-2 rounded-md border border-gray-300 px-1 py-0">
            <button className="text-sm">Not flagged</button>
            <button
              variant="contained"
              className="text-blue-600 border pt-1 pb-1 text-sm border-blue-500 px-2 rounded-md"
            >
              Flagged
            </button>

            <div className="flex items-center space-x-2 ml-2 mr-2">
              <img src={redFlag} alt="Red Flag" className="w-4 h-4" />
              <div className="border-l border-gray-400 h-8"></div>
              <img src={greenFlag} alt="Green Flag" className="w-4 h-4" />
              <div className="border-l border-gray-400 h-8"></div>
              <img src={yellowFlag} alt="Yellow Flag" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
