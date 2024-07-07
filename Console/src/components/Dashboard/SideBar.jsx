import React, { useState } from "react";
import { MdHomeFilled } from "react-icons/md";
import { GrCube } from "react-icons/gr";
import { SiTarget } from "react-icons/si";
import { IoMdSettings } from "react-icons/io";
import { SiProgress } from "react-icons/si";
import { HiBellAlert } from "react-icons/hi2";
import { FaCircleUser } from "react-icons/fa6";

const SideBar = ({ active, setActive }) => {
  const handleButtonClick = (buttonName) => {
    setActive(buttonName);
  };

  return (
    <div className="w-24 py-5 h-screen bg-slate-200 flex flex-col justify-between items-center">
      <button onClick={() => handleButtonClick("Dashboard")}>
        <GrCube className={"w-9 h-9"} />
      </button>
      <div className="bg-slate-300 rounded-full py-3 px-2 justify-center items-center flex flex-col space-y-6">
        <button
          onClick={() => handleButtonClick("Dashboard")}
          className={`rounded-full p-2 flex items-center justify-center ${
            active === "Dashboard" ? "bg-lime-400" : ""
          }`}
        >
          <MdHomeFilled className="w-7 h-7 hover:scale-110" />
        </button>
        <button
          onClick={() => handleButtonClick("Progress")}
          className={`rounded-full p-2 flex items-center justify-center ${
            active === "Progress" ? "bg-lime-400" : ""
          }`}
        >
          <SiProgress className="w-6 h-6 rounded-full hover:scale-110" />
        </button>
        <button
          onClick={() => handleButtonClick("Target")}
          className={`rounded-full p-2 flex items-center justify-center ${
            active === "Target" ? "bg-lime-400" : ""
          }`}
        >
          <SiTarget className="w-6 h-6 rounded-full hover:scale-110" />
        </button>
        <button
          onClick={() => handleButtonClick("Alert")}
          className={`rounded-full p-2 flex items-center justify-center ${
            active === "Alert" ? "bg-lime-400" : ""
          }`}
        >
          <HiBellAlert className="w-[1.7rem] h-[1.7rem] hover:scale-110" />
        </button>
        <button
          onClick={() => handleButtonClick("Settings")}
          className={`rounded-full p-2 flex items-center justify-center ${
            active === "Settings" ? "bg-lime-400" : ""
          }`}
        >
          <IoMdSettings className="mt-[-2px] w-7 h-7 hover:scale-110" />
        </button>
      </div>
      <button className="w-9 h-9 rounded-full flex items-center justify-center">
        <FaCircleUser className="w-8 h-8" />
      </button>
    </div>
  );
};

export default SideBar;
