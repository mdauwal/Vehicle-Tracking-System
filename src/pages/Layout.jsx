import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <main className="w-full">
        <div className="flex items-center justify-center">
          <div className="border bg-slate-200 w-full">
            <div className="flex gap-2 w-full">
              <a href="/">home</a>
              <a href="/succesful-shipments">succesful-shipments</a>
              <a href="/login">login</a>
              <a href="/activities">activities</a>
              <a href="/destination-tracking">destination-tracking</a>
              <a href="/destination-tracking/search-results">search-results</a>
              <a href="/destination-tracking/view-in-map">view-in-map</a>
              <a href="/destination-tracking/click-to-view">click-to-view</a>
            </div>
          </div>
        </div>

        <Outlet />
      </main>
      <h1>footer will be imported here</h1>
    </div>
  );
};

export default Layout;
