import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useStateContext } from "../contexts/ContextProvider";

export default function Home() {
  const { activeMenu, currentMode } = useStateContext();

  const sidebar = (
    <div
      className={
        activeMenu
          ? "w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"
          : "w-0 dark:bg-secondary-dark-bg flex-none"
      }
    >
      <SideBar />
    </div>
  );

  const contentWrapperClass = activeMenu
    ? "w-full dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72"
    : "bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-1";

  return (
    <div
      className={`flex relative ${
        currentMode === "light" ? "dark" : ""
      } dark:bg-main-dark-bg`}
    >
      {/* Sidebar */}
      {sidebar}

      {/* Main Content */}
      <div className={contentWrapperClass}>
        <div className="sticky top-0 z-50 bg-white dark:bg-main-dark-bg navbar w-full">
          <Navbar />
        </div>

        <Outlet />

        <div className="sticky bottom-0 z-50 bg-white dark:bg-main-dark-bg navbar w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
