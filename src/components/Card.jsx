import React from "react";

const Card = ({ title, subtext, value, percentage }) => {
  return (
    <div className="flex flex-wrap flex-col justify-between items-start p-2.5 w-64 gap-5 border border-[#DEEBFF] rounded bg-[#ffffff] hover:bg-base-200 hover:border-none">
      <div className="flex flex-col justify-start items-start w-full">
        <h1 class="font-Dmsans text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h1>
        <p class="font-normal text-xs text-gray-700 dark:text-gray-400 mb-5">
          {subtext}
        </p>
      </div>
      <div className="flex justify-between items-center w-full">
        <p class="font-normal text-base text-[#404040]-700 dark:text-gray-400">
          {value}
        </p>
        <p class="font-normal text-gray-700 dark:text-gray-400 text-{}">
          {percentage}
        </p>
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
