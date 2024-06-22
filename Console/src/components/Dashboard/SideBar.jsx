import React from "react";
import { RiHome2Fill } from "react-icons/ri";
import { TfiTarget } from "react-icons/tfi";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { GrCube } from "react-icons/gr";
import { GoGraph } from "react-icons/go";
const SideBar = () => {
  return (
    <>
      <div className="w-24 py-5 h-screen bg-slate-200 flex flex-col justify-between items-center">
        <div>
          <GrCube className="w-9 h-9" />
        </div>
        <div className="bg-slate-300 rounded-3xl p-2 flex flex-col space-y-3">
          <div className="rounded-full bg-green-300 p-1">
            <RiHome2Fill className="w-7 h-7" />
          </div>
          <div className="rounded-full p-1">
            <GoGraph className="w-7 h-7 rounded-full" />
          </div>
          <div className="rounded-full p-1">
            <TfiTarget className="w-7 h-7 rounded-full" />
          </div>
          <div className="rounded-full p-1">
            <FaRegBell className="w-7 h-7 rounded-full" />
          </div>
          <div className="rounded-full p-1">
            <MdOutlineSettings className="w-7 h-7 rounded-full" />
          </div>
        </div>

        <div className="w-9 h-9 rounded-full border-solid border-slate-950 border-2 flex items-center justify-center ">
          <BiSolidUser className="w-9 h-9 rounded-full " />
        </div>
      </div>
    </>
  );
};

export default SideBar;
