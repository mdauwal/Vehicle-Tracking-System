import React from 'react';
//import Taiwan from '@svg-maps/taiwan';
import Nigeria from '@svg-maps/nigeria';
import { SVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';

const Activities = () => {
  return (
    <div className="flex items-start justify-start p-4">
      <div className="flex flex-col items-start justify-start w-1/2">
        <h1>Track Activities</h1>
        <h2>Make informed decisions, stay ahead of security risks.</h2>

        <div className="p-4 w-full">
          <SVGMap map={Nigeria} />
        </div>
      </div>
      <div className="w-1/2 flex items-start justify-center">
        <div className="flex flex-col border border-[#DEEBFF] p-2">
          <div>Risk Rating</div>
          <div>A. Rating</div>
          <div>B. Rating</div>
          <div>C. Rating</div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
