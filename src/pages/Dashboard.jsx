import React from "react";
import Card from "../components/Card";
import dashboardData from "../data/dashboards";
import { GoHorizontalRule } from "react-icons/go";
import ShipmentInfo from "../components/ShipmentInfo";
import DonutChart from "../components/DonutChart";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { RiArrowDropDownFill, RiDropdownList } from "react-icons/ri";
import { ShipmentChart } from "../components";
import { Progress } from "flowbite-react";

const Dashboard = () => {
  // Data  to display on the cards
  const cardData = [
    {
      title: "Successful Shipments",
      subtext: "In the last 30 days",
      value: `${dashboardData.shipments.successfulShipments} Shipments`,
      percentage: `+${dashboardData.shipments.riskAssessments}%`,
      up: true,
    },
    {
      title: "Shipments on Route",
      subtext: "Updated 15 seconds ago",
      value: `${dashboardData.shipments.shipmentsOnRoute} Shipments`,
      percentage: `+${dashboardData.shipments.riskAssessments}%`,
      up: true,
    },
    {
      title: "Number of Incidence",
      subtext: "Updated 12 days ago",
      value: `${dashboardData.shipments.numberOfIncidents} Incidence`,
      percentage: `+${dashboardData.shipments.riskAssessments}%`,
      up: true,
    },
    {
      title: "Total Seized Shipments",
      subtext: "Updated 12 days ago",
      value: `${dashboardData.shipments.seizedShipments} Shipments`,
      percentage: `+${dashboardData.shipments.riskAssessments}%`,
      up: false,
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
      <div className="flex flex-col items-start justify-start gap-5 min-w-full bg-gradient-to-b from-[#FAFAFA] to-[#FAFAFA80] md:px-12 px-5 py-12 ">
        <div className="flex items-start justify-start flex-col">
          <h1 className="font-Avenir text-3xl font-extrabold">
            Welcome back Admin's Name
          </h1>
          <p className="text-lg font-DMsans font-normal text-[#303236]">
            Good to have you here. Let's get you ready for production
          </p>
        </div>

        {/* CARD CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
          {/* Mapping the data above into the card component */}
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              value={card.value}
              subtext={card.subtext}
              percentage={card.percentage}
              up={card.up}
            />
          ))}
        </div>

        {/* CHART AND DATA CONTAINER space-x-2 */}

        <div className="flex flex-col md:flex-row bg-white w-full items-start justify-start border border-[#DEEBFF] my-9">
          <div className="w-full md:w-4/5 md:h-full">
            <ShipmentChart />
          </div>
          <div className="w-full md:w-1/5">
            <div className="text-center border-[#DEEBFF] border-l w-full grid grid-cols-1 md:grid-col-3">
              {shipmentData.map((data, index) => (
                <ShipmentInfo
                  key={index}
                  title={data.title}
                  value={data.value}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center bg-white w-full border border-[#DEEBFF] p-4">
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-col justify-start items-start w-full p-4 gap-4">
              <h1 className="font-Avenir font-extrabold text-2xl w-full text-center md:text-left">
                Truck Drivers
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-10">
                <div className="md:max-w-44 flex items-center justify-between gap-2">
                  <CircularProgressbarWithChildren
                    value={80}
                    styles={buildStyles({
                      pathColor: "#f00",
                      trailColor: "#eee",
                      strokeLinecap: "butt",
                    })}
                  >
                    <CircularProgressbar
                      value={70}
                      styles={buildStyles({
                        trailColor: "transparent",
                        strokeLinecap: "butt",
                        pathColor: "#0052CC",
                        textColor: "#000000",
                      })}
                      text={"1536"}
                    />
                  </CircularProgressbarWithChildren>
                </div>
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
          </div>
          <div className="w-[1px] sm:d-none{Toas} md:h-52 bg-[#000000] md:mx-10" />
          <div className="flex flex-col items-start justify-start w-full md:w-1/2  gap-4 md:border-none border-t">
            <h1 className="font-Avenir font-extrabold text-2xl md:m-0 mt-5">
              Title goes here
            </h1>
            <div className="flex justify-start items-center gap-3">
              <p className="font-Avenir font-extrabold text-3xl">592</p>
              <p className="font-Avenir font-normal text-lg text-[#D0D1D2]">
                Total TL
              </p>
            </div>
            <progress
              className="progress w- md:h-3.5"
              value="20"
              max="100"
            ></progress>
            <div className="flex md:flex-col flex-row gap-4 ">
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
    </>
  );
};

export default Dashboard;
