import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col">
      <h1>the navbar header will be imported here</h1>
      <main>
        <Outlet />
      </main>
      <h1>footer will be imported here</h1>
    </div>
  );
};

export default Layout;
