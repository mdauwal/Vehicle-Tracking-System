import React, { useState } from 'react';
import { FaGreaterThan, FaLessThan, FaArrowLeft } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiFilter, CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx';

// Generate dummy data for 10 pages (6 rows per page, 60 rows total)
const generateDummyData = () => {
  const data = [];
  const statuses = ['SUCCESSFUL', 'FAILED'];
  const cities = [
    'Abuja',
    'Lagos',
    'Port Harcourt',
    'Enugu',
    'Kaduna',
    'Gboko',
  ];
  const generateDriverId = (i) =>
    `DRV${i}-${Math.floor(Math.random() * 10000)}`;
  for (let i = 1; i <= 60; i++) {
    data.push({
      id: i,
      truckPlate: `TRK${i} - ${Math.floor(Math.random() * 100)}`,
      departure: cities[Math.floor(Math.random() * cities.length)],
      destination: cities[Math.floor(Math.random() * cities.length)],
      driver: `Driver ${generateDriverId(i)}`,
      date: `${Math.floor(Math.random() * 30) + 1}th Nov, 2021`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
    });
  }
  return data;
};

const shipmentsData = generateDummyData();

const App = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Stores input from input field
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6; // 6 rows per page
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const navigate = useNavigate(); // Initialize useNavigate

  // Filter and search logic
  const filteredData = shipmentsData.filter((shipment) => {
    const matchesSearch =
      (shipment.driver &&
        shipment.driver.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (shipment.truckPlate &&
        shipment.truckPlate.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (shipment.departure &&
        shipment.departure.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (shipment.destination &&
        shipment.destination
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (shipment.date &&
        shipment.date.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (shipment.status &&
        shipment.status.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesFilter =
      filterStatus === 'All' || shipment.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  // Sorting logic
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortKey) return 0;
    const sortValueA = a[sortKey];
    const sortValueB = b[sortKey];
    if (sortValueA < sortValueB) return sortOrder === 'asc' ? -1 : 1;
    if (sortValueA > sortValueB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const currentPageData = sortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSort = (key) => {
    setSortKey(key);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const getPaginationRange = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Number of pages to show at a time

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      pageNumbers.push(1);

      if (currentPage > 3) {
        pageNumbers.push('...');
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push('...');
      }

      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="px-5 md:px-8 lg:px-12 py-6">
      <Link
        to="/"
        className="flex gap-2 mt-1 cursor-pointer font-Aveni text-[18px]"
      >
        <FaArrowLeft className="mt-1" />
        Back
      </Link>
      <div className="max-w-7xl mx-auto bg-white p-5 mt-3 rounded-lg shadow-md font-Aveni">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] mb-5 md:gap-3">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-[24px] text-[#091E42] font-bold">
              Successful Shipments
            </h1>
            <p className="text-[18px] text-[#6B778C]">
              Showing the updated data in the last 30 days
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-0 items-center">
            <div className="relative flex items-center flex-1 w-full">
              <span className="absolute left-3 text-gray-400">
                <CiFilter className="h-5 w-5" />
              </span>
              <select
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 w-full"
              >
                <option value="All">Filter</option>
                <option value="SUCCESSFUL">SUCCESSFUL</option>
                <option value="FAILED">FAILED</option>
              </select>
            </div>
            <div className="relative flex items-center flex-1 w-full">
              <span className="absolute left-3 text-gray-400">
                <CiSearch className="h-5 w-5" />
              </span>
              <input
                type="text"
                placeholder="Quick Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 w-full flex-1 "
              />
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#1633A3] text-[18px] text-white flex-1 px-3 py-2.5 whitespace-nowrap w-full"
            >
              Export Data
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          {currentPageData.length > 0 ? (
            <table className="min-w-full table-auto">
              <thead className="bg-[#DEEBFF] text-center text-[#091E42]">
                <tr>
                  <th className="px-4 py-2">
                    <button onClick={() => handleSort('truckPlate')}>
                      Truck Plate
                    </button>
                  </th>
                  <th className="px-4 py-2">
                    <button onClick={() => handleSort('departure')}>
                      Departure State
                    </button>
                  </th>
                  <th className="px-4 py-2">
                    <button onClick={() => handleSort('destination')}>
                      Destination State
                    </button>
                  </th>
                  <th className="px-4 py-2">
                    <button onClick={() => handleSort('driver')}>
                      Truck Driver
                    </button>
                  </th>
                  <th className="px-4 py-2">
                    <button onClick={() => handleSort('date')}>Date</button>
                  </th>
                  <th className="px-4 py-2">Shipment Status</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="text-center text-[#0C0C0C] lg:text-[18px] md:text-[15px]">
                {currentPageData.map((shipment) => (
                  <tr
                    key={shipment.id}
                    className="border-b transition-colors duration-500 ease-in-out hover:bg-[#e9f2ff]"
                  >
                    <td className="px-4 py-2">{shipment.truckPlate}</td>
                    <td className="px-4 py-2">{shipment.departure}</td>
                    <td className="px-4 py-2">{shipment.destination}</td>
                    <td className="px-4 py-2">{shipment.driver}</td>
                    <td className="px-4 py-2">{shipment.date}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`inline-block px-3 py-1 rounded-[16px] ${
                          shipment.status === 'SUCCESSFUL'
                            ? ' bg-[#ABF5D1] text-[#006644]'
                            : 'bg-red-200 text-red-800'
                        }`}
                      >
                        {shipment.status}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <BsThreeDotsVertical className="inline-block h-6 w-6" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500 py-4">
              No shipment found matching your search
            </p>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center gap-2 py-4">
          <button
            className="px-4 py-2 bg-[#f5f5f5] text-gray-500 rounded-md transition-colors duration-300 hover:bg-gray-300"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            <FaLessThan />
          </button>
          {getPaginationRange().map((page, index) =>
            page === '...' ? (
              <span key={index}>...</span>
            ) : (
              <button
                key={index}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                  currentPage === page
                    ? 'bg-[#1633A3] text-white'
                    : 'bg-[#f5f5f5] text-gray-600 hover:bg-gray-300'
                }`}
              >
                {page}
              </button>
            )
          )}
          <button
            className="px-4 py-2 bg-[#f5f5f5] text-gray-600 rounded-md transition-colors duration-300 hover:bg-[#e9f2ff]"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            <FaGreaterThan />
          </button>
        </div>
      </div>
      {/* // Export Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Export Data</h2>
            <p className="mb-4">Select the format to export the data.</p>
            <div className="flex justify-between space-x-4">
              {/* CSV Export */}
              <CSVLink
                data={filteredData} // Ensure filteredData is used to export only the visible data
                filename={'shipments-data.csv'}
                className="bg-[#1633A3] text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#0e2a6e]"
              >
                Export CSV
              </CSVLink>

              {/* Excel Export */}
              <button
                onClick={() => {
                  const worksheet = XLSX.utils.json_to_sheet(filteredData);
                  const workbook = XLSX.utils.book_new();
                  XLSX.utils.book_append_sheet(
                    workbook,
                    worksheet,
                    'Shipments'
                  );
                  XLSX.writeFile(workbook, 'shipments-data.xlsx');
                  setIsModalOpen(false);
                }}
                className="bg-[#1633A3] text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#0e2a6e]"
              >
                Export Excel
              </button>

              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition-colors duration-300 hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
