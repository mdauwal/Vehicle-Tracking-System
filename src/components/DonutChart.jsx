import React from 'react';

const DonutChart = () => {
  const total = 1536;
  const values = [1211, 124, 201];
  const colors = ['text-blue-500', 'text-blue-400', 'text-blue-300'];
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const offsets = values.map((value, index) => {
    const offset = values.slice(0, index).reduce((acc, val) => acc + val, 0);
    return (offset / total) * circumference;
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-64 h-64">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold">{total}</span>
          <span className="text-lg">Total Drivers</span>
        </div>
        <svg className="w-full h-full">
          <circle
            className="text-gray-300"
            strokeWidth="20"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="128"
            cy="128"
          />
          {values.map((value, index) => (
            <circle
              key={index}
              className={colors[index]}
              strokeWidth="20"
              strokeDasharray={`${(value / total) * circumference} ${circumference}`}
              strokeDashoffset={-offsets[index]}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="128"
              cy="128"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default DonutChart;
