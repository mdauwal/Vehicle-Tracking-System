import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2 font-medium">Robbery Attacks</label>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className="border border-gray-300 rounded-md py-2 px-4 w-full text-gray-700"
            dateFormat="MMM d, h:mm aa"
          />
          <span className="absolute right-1 top-2.5 pointer-events-none ml-6 bg-gray-100 rounded-md text-gray-500">
            ▼
          </span>
        </div>

        <div className="relative mr-2">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="border border-gray-300 rounded-md py-2 px-4 w-full text-gray-700"
            dateFormat="MMM d, h:mm aa"
          />
          <span className="absolute right-1 top-2.5 pointer-events-none ml-6 bg-gray-100 rounded-md text-gray-500">
            ▼
          </span>
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
