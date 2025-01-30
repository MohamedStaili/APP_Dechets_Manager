// DashboardLayout.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div
  style={{
    marginLeft: isSidebarOpen ? "16rem" : "4rem", // Correspond à 64px et 16px respectivement
    transition: "all 0.3s ease-in-out",
  }}
  className="flex-1 flex flex-col bg-gray-100"
>
        {console.log(isSidebarOpen)}
        <header className="p-4 bg-white shadow-md">
          {/* Header content */}
        </header>
        
        <main className="flex-1 p-6 overflow-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;