import React, { useContext, useState } from "react";
import SideBar from "../components/Dashboard/SideBar";
import Header from "../components/Dashboard/Header";
import DashboardBody from "./DashboardPageBody";
import ProgressBody from "./ProgressBody";
import TargetPageBody from "./TargetPageBody";
import AlertPageBody from "./AlertPageBody";
import SettingsPageBody from "./SettingsPageBody";

const HomeBody = () => {
  const [active, setActive] = useState("Dashboard");

  const renderBody = () => {
    switch (active) {
      case "Dashboard":
        return <DashboardBody />;
      case "Progress":
        return <ProgressBody />;
      case "Target":
        return <TargetPageBody />;
      case "Alert":
        return <AlertPageBody />;
      case "Settings":
        return <SettingsPageBody />;
      default:
        return <DashboardBody />;
    }
  };

  return (
    <div className="flex">
      <SideBar active={active} setActive={setActive} />
      <div className="w-full">
        <Header title={active} />
        {renderBody()}
      </div>
    </div>
  );
};

export default HomeBody;
