import React, { useState } from "react";
import { FaGreaterThan, FaLessThan, FaArrowLeft } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiFilter, CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

// Generate dummy data for 10 pages (6 rows per page, 60 rows total)
const generateDummyData = () => {
    const data = [];
    const statuses = ["SUCCESSFUL", "FAILED"];
    const cities = [
        "Abuja",
        "Lagos",
        "Port Harcourt",
        "Enugu",
        "Kaduna",
        "Gboko",
    ];

    for (let i = 1; i <= 60; i++) {
        data.push({
            id: i,
            truckPlate: `TRK${i} - ${Math.floor(Math.random() * 100)}`,
            departure: cities[Math.floor(Math.random() * cities.length)],
            destination: cities[Math.floor(Math.random() * cities.length)],
            driver: `Driver ${i}`,
            date: `${Math.floor(Math.random() * 30) + 1}th Nov, 2021`,
            status: statuses[Math.floor(Math.random() * statuses.length)],
        });
    }
    return data;
};

const shipmentsData = generateDummyData();

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 6; // 6 rows per page

    // Filter and search logic
    const filteredData = shipmentsData.filter((shipment) => {
        const matchesSearch =
            shipment.driver.toLowerCase().includes(searchTerm.toLowerCase()) ||
            shipment.truckPlate
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
        const matchesFilter =
            filterStatus === "All" || shipment.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    // Sorting logic
    const sortedData = [...filteredData].sort((a, b) => {
        if (!sortKey) return 0;
        const sortValueA = a[sortKey];
        const sortValueB = b[sortKey];
        if (sortValueA < sortValueB) return sortOrder === "asc" ? -1 : 1;
        if (sortValueA > sortValueB) return sortOrder === "asc" ? 1 : -1;
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
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    const getPaginationRange = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5; // Number of pages to show at a time

        // If total pages are less than or equal to the maxPagesToShow, display all pages
        if (totalPages <= maxPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            const startPage = Math.max(2, currentPage - 1); // Start from the second page
            const endPage = Math.min(totalPages - 1, currentPage + 1); // End before the last page

            // Always show the first page
            pageNumbers.push(1);

            // Show ellipsis if the current page is far from the beginning
            if (currentPage > 3) {
                pageNumbers.push("...");
            }

            // Display the range of pages around the current page
            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }

            // Show ellipsis if the current page is far from the end
            if (currentPage < totalPages - 2) {
                pageNumbers.push("...");
            }

            // Always show the last page
            pageNumbers.push(totalPages);
        }

        return pageNumbers;
    };

    return (
        <div className="px-4 md:px-8 lg:px-12 py-6">
            <Link
                to="/"
                className="flex gap-2 mt-5 cursor-pointer font-Aveni text-[18px]"
            >
                <FaArrowLeft className="mt-1" />
                Back
            </Link>

            <div className="max-w-7xl mx-auto bg-white p-6 mt-7 rounded-lg shadow-md  font-Aveni">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] mb-5 md:gap-3 ">
                    <div className="mb-4 sm:mb-0">
                        <h1 className="text-[24px] text-[#091E42] font-bold">
                            Successful Shipments
                        </h1>
                        <p className="text-[18px] text-[#6B778C]">
                            Showing the updated data in the last 30 days
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-0 items-center">
                        <div className="relative flex items-center flex-1 w-full">
                            <span className="absolute left-3 text-gray-400">
                                <CiFilter className="h-5 w-5" />
                            </span>
                            <select
                                onChange={(e) =>
                                    setFilterStatus(e.target.value)
                                }
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
                                className="pl-10 pr-4 py-2 border border-gray-300 w-full flex-1 md:mr-5"
                            />
                        </div>
                        <button className="bg-[#1633A3] text-[18px] text-white flex-1 px-3 py-2.5 whitespace-nowrap w-full">
                            Export Data
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto">
                        <thead className="bg-[#DEEBFF] text-center text-[#091E42]">
                            <tr>
                                <th className="px-4 py-2 text-[#091E42] text-[14px] ">
                                    <button
                                        onClick={() => handleSort("truckPlate")}
                                    >
                                        Truck Plate
                                    </button>
                                </th>
                                <th className="px-4 py-2">
                                    <button
                                        onClick={() => handleSort("departure")}
                                    >
                                        Departure State
                                    </button>
                                </th>
                                <th className="px-4 py-2">
                                    <button
                                        onClick={() =>
                                            handleSort("destination")
                                        }
                                    >
                                        Destination State
                                    </button>
                                </th>
                                <th className="px-4 py-2">
                                    <button
                                        onClick={() => handleSort("driver")}
                                    >
                                        Truck Driver
                                    </button>
                                </th>
                                <th className="px-4 py-2">
                                    <button onClick={() => handleSort("date")}>
                                        Date
                                    </button>
                                </th>
                                <th className="px-4 py-2">Shipment Status</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center text-[#0C0C0C]  lg:text-[18px] md:text-[15px]">
                            {currentPageData.map((shipment) => (
                                <tr key={shipment.id} className="border-b">
                                    <td className="px-4 py-2">
                                        {shipment.truckPlate}
                                    </td>
                                    <td className="px-4 py-2">
                                        {shipment.departure}
                                    </td>
                                    <td className="px-4 py-2">
                                        {shipment.destination}
                                    </td>
                                    <td className="px-4 py-2">
                                        {shipment.driver}
                                    </td>
                                    <td className="px-4 py-2">
                                        {shipment.date}
                                    </td>
                                    <td className="px-4 py-2">
                                        <span
                                            className={`text-[14px] px-2 py-1 rounded-lg ${
                                                shipment.status === "SUCCESSFUL"
                                                    ? "bg-green-100 text-[#006644]"
                                                    : "bg-red-100 text-red-600"
                                            }`}
                                        >
                                            {shipment.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2">
                                        <button className="text-[#1B0512]">
                                            <BsThreeDotsVertical />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-4 sm:space-y-0">
                    <span>
                        Showing page {currentPage} of {totalPages}
                    </span>
                    <div className="flex items-center space-x-2">
                        <button
                            className={`text-xl font-bold ${
                                currentPage === 1
                                    ? "text-gray-300 cursor-not-allowed"
                                    : ""
                            }`}
                            onClick={() =>
                                setCurrentPage((prev) =>
                                    prev > 1 ? prev - 1 : prev
                                )
                            }
                            disabled={currentPage === 1}
                        >
                            <FaLessThan className="h-4 w-4" />
                        </button>
                        {getPaginationRange().map((page, index) =>
                            typeof page === "string" ? (
                                <span key={index}>...</span>
                            ) : (
                                <button
                                    key={index}
                                    className={`px-2 py-1 ${
                                        page === currentPage
                                            ? "bg-[#1633A3] "
                                            : ""
                                    }`}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </button>
                            )
                        )}
                        <button
                            className={`text-xl font-bold ${
                                currentPage === totalPages
                                    ? "text-gray-300 cursor-not-allowed"
                                    : ""
                            }`}
                            onClick={() =>
                                setCurrentPage((prev) =>
                                    prev < totalPages ? prev + 1 : prev
                                )
                            }
                            disabled={currentPage === totalPages}
                        >
                            <FaGreaterThan className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
