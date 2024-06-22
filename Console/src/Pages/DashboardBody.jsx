import React from "react";
import SideBar from '../components/Dashboard/SideBar'
import Header from '../components/Dashboard/Header'
import Statistics from '../components/Dashboard/Statistics'

const DashboardBody = () => {
  return (
    <>
      <div className="flex">
        <SideBar/>
        <div className="w-full">
          <Header />
          <Statistics />
        </div>
      </div>
    </>
  );
};

export default DashboardBody;
