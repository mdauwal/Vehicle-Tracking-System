import React from "react";
import { DownwardIcon, UpwardIcon } from "../icons/Icons";

const Card = ({ title, subtext, value, percentage, up }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-[#deebff] rounded bg-[#ffffff] gap-14 hover:border-none hover:bg-[#DEEBFF]">
      <div className="flex flex-col justify-start items-start w-full">
        <h1 class="font-Dmsans font-bold text-xl text-[#000000]">{title}</h1>
        <p class="font-Dmsans font-normal text-sm text-[#000000]">{subtext}</p>
      </div>
      <div className="flex justify-between items-center w-full">
        <p class="font-medium text-xl text-[#404040]">{value}</p>
        <div className="flex items-center justify-start gap-2">
          <p class="font-medium text-xl text-[#006644]">{percentage}</p>
          {up ? <UpwardIcon /> : <DownwardIcon />}
        </div>
      </div>
    </div>
  );
};

export default Card;
/* 
<a
        href="#"
        class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="font-Dmsans text-[24px] font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <div className="flex justify-between items-center w-full">
          <p class="mb-12 font-normal text-gray-700 dark:text-gray-400">
            {value}
          </p>
          <p class="mb-12 font-normal text-gray-700 dark:text-gray-400">
            + 14%
          </p>
        </div>
      </a> */
