import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const ShipmentChart = () => {
  // Data for the chart
  const data = {
    labels: Array.from({ length: 22 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Success Rate',
        data: [
          15, 25, 35, 20, 45, 55, 40, 50, 45, 38, 50, 55, 45, 35, 38, 40, 50,
          48, 38, 45, 50, 42,
        ],
        borderColor: '#2563EB',
        backgroundColor: 'rgba(37, 99, 235, 0.3)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Incidents',
        data: [
          10, 20, 30, 15, 25, 35, 25, 30, 32, 28, 32, 30, 25, 20, 32, 35, 30,
          25, 30, 35, 28, 25,
        ],
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function (tooltipItem) {
            return (
              tooltipItem.dataset.label + ': ' + tooltipItem.formattedValue
            );
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Days',
        },
      },
      y: {
        grid: {
          color: '#E5E7EB',
        },
        title: {
          display: true,
          text: 'Count',
        },
        min: 0,
        max: 60,
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Total Shipments</h2>
        <div className="flex  flex-col md:flex-row">
          <div className="flex items-center bg-white border rounded-full px-3 py-1 border-gray-300 ">
            <span className="text-[#8494A5] mr-3">Filter</span>
            <select className="p-2 border rounded focus:outline-none">
              <option>Select A Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
          <div className="flex items-center bg-white border rounded-full px-3 py-1 border-gray-300 ">
            <span className="text-[#8494A5] mr-3">Filter</span>
            <select className="p-2 border rounded focus:outline-none">
              <option>Select A Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
        </div>
      </div>

      <div className="h-72">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ShipmentChart;
