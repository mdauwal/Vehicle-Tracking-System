import React from 'react';
import dashboardData from '../data/dashboards';

const ShipmentInfo = ({ title, value }) => {
  return (
    <div>
      <div className="border-t border-t-[#DEEBFF] py-3 px-4">
        <label className="font-Avenir text-[#9FA2B4]">{title}</label>
        <p className="font-bold text-xl">{value}</p>
      </div>
    </div>
  );
};

export default ShipmentInfo;
