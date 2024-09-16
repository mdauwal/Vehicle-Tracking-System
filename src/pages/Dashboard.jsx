import React from "react";
import Card from "../components/Card";
import dashboardData from "../data/dashboards";
import { GoHorizontalRule } from "react-icons/go";
import ShipmentInfo from "../components/ShipmentInfo";
import DonutChart from "../components/DonutChart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { RiArrowDropDownFill, RiDropdownList } from "react-icons/ri";

// import { FaArrowUp } from "react-icons/fa6";

const Dashboard = () => {
  // Data  to display on the cards
  const cardData = [
    {
      title: "Successful Shipments",
      subtext: "In the last 30 days",
      value: `${dashboardData.shipments.successfulShipments} Shipments`,
      percentage: `+${dashboardData.shipments.riskAssessments}%`,
    },
    {
      title: "Shipments on Route",
      subtext: "Updated 15 seconds ago",
      value: `${dashboardData.shipments.shipmentsOnRoute} Shipments`,
      percentage: `+${dashboardData.shipments.riskAssessments}%`,
    },
    {
      title: "Number of Incidence",
      subtext: "Updated 12 days ago",
      value: `${dashboardData.shipments.numberOfIncidents} Incidence`,
      percentage: `+${dashboardData.shipments.riskAssessments}%`,
    },
    {
      title: "Total Seized Shipments",
      subtext: "Updated 12 days ago",
      value: `${dashboardData.shipments.seizedShipments} Shipments`,
      percentage: `+${dashboardData.shipments.riskAssessments}%`,
    },
  ];

  //Data to display in shipment
  const shipmentData = [
    {
      title: "Shipments on Federal Routes",
      value: dashboardData.shipments.breakdownByRoutes.federal,
    },
    {
      title: "Shipments on State Routes",
      value: dashboardData.shipments.breakdownByRoutes.state,
    },
    {
      title: "Shipments with Security Incidence",
      value: dashboardData.shipments.breakdownByRoutes.securityIncidents,
    },
    {
      title: "Successful Shipments",
      value: dashboardData.shipments.successfulShipments,
    },
    {
      title: "Risk Assessments",
      value: `${dashboardData.shipments.riskAssessments}%`,
    },
    // {
    //   drivers: shipmentData.truckDrivers,
    // },
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-[#FAFAFA] to-[#FAFAFA80] px-[80px] py-10">
        {/* HERO/WELCOME TEXT */}
        <div className="font-Avenir mb-12">
          <h1 className="text-2xl font-bold">Welcome back Admin's Name</h1>
          <p className="text-sm">
            Good to have you here. Let's get you ready for production
          </p>
        </div>

        {/* CARD CONTAINER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {/* Mapping the data above into the card component */}
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              value={card.value}
              subtext={card.subtext}
              percentage={card.percentage}
            />
          ))}
        </div>

        {/* CHART AND DATA CONTAINER */}

        <div className="flex flex-wrap justify-between border border-[#DEEBFF]">
          {/* chart heading, colour key and chart  */}
          <div className="p-8">
            <div className="flex">
              <div className="flex flex-wrap sm:gap-1 md:gap-48 items-center">
                <div className="flex flex-col font-Avenir  mb-4 md:mb-0">
                  <h2 className="font-bold text-lg mb-2">Total Shipments</h2>
                  <div className="flex gap-2 text-sm">
                    <span className="flex items-center gap-1 text-sm">
                      <GoHorizontalRule className="text-[#0065FF] text-2xl bold" />
                      Success rate
                    </span>
                    <span className="flex items-center gap-1 text-sm  ">
                      <GoHorizontalRule className="text-[#DE350B] text-2xl bold" />
                      Incidents
                    </span>
                  </div>
                </div>

                {/* filter dropdown */}
                <div className="grid sm:grid-cols-1 grid-cols-2 gap-2 w-full md:w-auto">
                  <form className="flex items-center bg-white border rounded-full px-3 py-1 border-gray-300 max-w-sm mx-auto">
                    <span className="text-[#8494A5] mr-3">Filter</span>

                    <select
                      id="states"
                      class="text-bold text-gray-900 text-sm rounded-e-lg border-s-gray-100 outline-none dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Select a year</option>
                      {/* Dropdown options */}
                      {[
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                      ].map((month, index) => (
                        <option key={index} value={month.slice(0, 2)}>
                          {month}
                        </option>
                      ))}
                    </select>
                  </form>
                  <form className="flex items-center bg-white border rounded-full px-3 py-1 border-gray-300 max-w-sm mx-auto">
                    <span className="text-[#8494A5] mr-3">Filter</span>

                    <select
                      id="states"
                      class="text-bold text-gray-900 text-sm rounded-e-lg border-s-gray-100 outline-none dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Select a year</option>
                      {/* Dropdown options */}
                      {[
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                      ].map((month, index) => (
                        <option key={index} value={month.slice(0, 2)}>
                          {month}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* SHIPMENT STATS/DATA */}
          <div className="text-center border-l border-[#DEEBFF] w-full md:w-fit">
            {shipmentData.map((data, index) => (
              <ShipmentInfo key={index} title={data.title} value={data.value} />
            ))}
          </div>
        </div>

        {/* TRUCK DRIVERS CARD */}
        <div className="border border-[#DEEBFF] flex flex-wrap md:flex-nowrap my-11 p-10 h-fit">
          {/* TRUCK DRIVERS: DONUT CHART, VALUES AND KEYS */}
          <div className="flex flex-col w-full mb-5 md:mb-0 md:w-1/2 md:border-r pr-8">
            <label className="font-bold mb-5">Truck Drivers</label>

            <div className="flex flex-wrap justify-between items-start gap-8">
              {/* DONUT CHART */}
              <div className="w-48 mx-auto md:mx-0">
                <CircularProgressbar
                  className="text-black font-bold"
                  value={80}
                  text={"1536"}
                  styles={buildStyles({
                    display: "flex",
                    pathColor: "#0052CC",
                    textColor: "#000000",
                    textSize: "14px",
                  })}
                />
              </div>

              {/* KEYS TO CHART */}
              <div className="flex flex-col gap-5">
                <label className="flex items-start gap-2 text-sm">
                  <span className="mt-2.5 bg-[#0052CC] rounded-full h-1 w-6"></span>
                  <div>
                    <p className="text-sm text-[#5E6C84]">
                      Drivers with Successful Shipments
                    </p>
                    <p className="font-bold">1211</p>
                  </div>
                </label>

                <label className="flex items-start gap-2 text-sm">
                  <span className="mt-2.5 bg-[#2684FF] rounded-full h-1 w-6"></span>
                  <div>
                    <p className="text-sm text-[#5E6C84]">
                      Drivers with incidents
                    </p>
                    <p className="font-bold">124</p>
                  </div>
                </label>

                <label className="flex items-start gap-2 text-sm">
                  <span className="mt-2.5 bg-[#B3D4FF] rounded-full h-1 w-6"></span>
                  <div>
                    <p className="text-sm text-[#5E6C84]">Drivers on route</p>
                    <p className="font-bold">201</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* AVAILABILITY PROGRESS BAR */}
          <div className="w-full md:w-1/2 pl-8 md:border-t-0 border-t">
            <h3 className="font-bold my-4 md:mb-7">Title goes here</h3>

            {/* PROGRESSBAR */}
            <div className="flex flex-col">
              <h2 className="mb-5 text-2xl font-bold dark:text-white">
                594{" "}
                <span className="text-gray-400 text-base font-normal">
                  Total TL
                </span>
              </h2>

              <div className="bg-gray-300 rounded-full h-2.5 w-full mb-4 dark:bg-gray-700">
                <div className="bg-black h-2.5 w-2/12 rounded-full dark:bg-gray-300"></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 mt-7">
                <label className="flex items-start gap-2">
                  <span className="mt-2.5 bg-[#000000] rounded-full h-1 w-6"></span>
                  <div>
                    <p className="text-sm text-[#D0D1D2]">Available</p>
                    <p className="font-bold text-sm text-[#11263C]">179 TL</p>
                  </div>
                </label>

                <label className="flex items-start gap-2">
                  <span className="mt-2.5 bg-[#D0D1D2] rounded-full h-1 w-6"></span>
                  <div>
                    <p className="text-sm text-[#D0D1D2]">Unavailable</p>
                    <p className="font-bold text-sm text-[#11263C]">394 TL</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

{
  /* <div className="relative w-64 h-64">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">1536</span>
                    <span className="text-lg">Total Drivers</span>
                  </div>
                  <svg className="w-full h-full">
                    <circle
                      className="text-white"
                      strokeWidth="20"
                      stroke="currentColor"
                      fill="transparent"
                      r="90"
                      cx="128"
                      cy="128"
                    />
                    <circle
                      className="text-blue-500"
                      strokeWidth="20"
                      strokeDasharray="188.4, 376.8"
                      strokeDashoffset="30"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="90"
                      cx="128"
                      cy="128"
                    />
                    <circle
                      className="text-blue-400"
                      strokeWidth="20"
                      strokeDasharray="94.2, 471"
                      strokeDashoffset="-188.4"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="90"
                      cx="128"
                      cy="128"
                    />
                    <circle
                      className="text-blue-300"
                      strokeWidth="20"
                      strokeDasharray="282.6, 282.6"
                      strokeDashoffset="-282.6"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="90"
                      cx="128"
                      cy="128"
                    />
                  </svg>
                </div> */
}
