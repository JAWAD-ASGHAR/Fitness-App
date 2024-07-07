import React, { useState } from "react";
import SideBar from "../components/Dashboard/SideBar";
import Header from "../components/Dashboard/Header";
import DashboardBody from "./DashboardPageBody";
import ProgressBody from "./ProgressBody";
import TargetPageBody from "./TargetPageBody";
import AlertPageBody from "./AlertPageBody";
import SettingsPageBody from "./SettingsPageBody";

const HomeBody = () => {
  const [active, setActive] = useState("Home");

  const renderBody = () => {
    switch (active) {
      case "Home":
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
        <Header />
        {renderBody()}
      </div>
    </div>
  );
};

export default HomeBody;
