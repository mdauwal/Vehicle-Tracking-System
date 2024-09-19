import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Beepboop from "../assets/Beepboop.png";
import { BsBell } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" h-screen scro">
      <nav className="mb-0 border shadow-md w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="font-Dmsans text-lg font-bold text-[#0747A6]">
            BRAND LOGO
          </span>

          <div className="flex flex-wrap justify-evenly items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex justify-center items-center">
              <div className="relative border-r border-black">
                <BsBell className="text-2xl mr-5 h-7" />
                <span className="absolute top-0 right-5 badge badge-xs badge-primary indicator-item"></span>
              </div>

              <div className="flex justify-center items-center">
                <div className="ml-5">
                  <img src={Beepboop} alt="" />
                </div>
                <div className="text-sm px-4 py-2">
                  <p>Admin's Name</p>
                  <span className="text-2xs">Super Admin</span>
                </div>
                <RiArrowDropDownLine className="text-3xl" />
              </div>
            </div>

            {/* HAMBURGER */}
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              onClick={() => setIsOpen(!isOpen)} // Toggle isOpen state
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* MOBILE MENU */}
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isOpen ? "block" : "hidden"
            }`}
            id="navbar-cta"
          >
            <ul className="flex flex-wrap flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/activities"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Activities
                </a>
              </li>
              <li>
                <a
                  href="/destination-tracking"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Destination Tracking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="w-full">
        <Outlet />
      </main>

      <footer className="footer footer-center bg-white text-base-content p-4 border">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Layout;
