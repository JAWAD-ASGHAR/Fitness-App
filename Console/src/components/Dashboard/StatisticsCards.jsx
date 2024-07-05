import React from "react";
import { HiDotsVertical } from "react-icons/hi";
const StatisticsCards = (props) => {
  return (
    <>
      <div className=" bg-slate-100 p-4 rounded-lg">
        <div className="flex justify-between space-x-7">
          <div className="flex flex-col space-y-2 w-2/3">
            <div className="text-lg font-semibold">{props.details.title}</div>
            <div className="text-2xl font-bold">{props.details.value}</div>
            <div className="text-green-500">{props.details.improve}</div>
          </div>
          <div className="flex flex-col justify-between items-center py-1">
            {props.details.icon}
            <HiDotsVertical className="w-6 h-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsCards;
