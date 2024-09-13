import React from 'react';

const RiskRating = ({ primaryText, secondaryText, color }) => {
  return (
    <li className="flex flex-col items-start justify-start border-t border-t-[#DFE1E6] py-4">
      <div className="flex items-center justify-between w-full">
        <p className="font-medium text-2xl">{primaryText}</p>

        <span className={'w-14 h-6'} style={{ backgroundColor: color }}></span>
      </div>
      <p className="font-Avenir text-[#11263C] text-sm font-normal">
        {secondaryText}
      </p>
    </li>
  );
};

export default RiskRating;
