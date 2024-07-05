import React from "react";
import { RiFootprintLine } from "react-icons/ri";
import StatisticsCards from "./StatisticsCards";
import { TbTargetArrow } from "react-icons/tb";
import { AiOutlineFire } from "react-icons/ai";
import { TbWeight } from "react-icons/tb";
const Statistics = () => {
  const PersonalRecord = [
    {
      id: 1,
      title: "Meter Walked",
      value: "2901",
      improve: "+20%",
      icon: <RiFootprintLine className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Achieved",
      value: "92%",
      improve: "+35%",
      icon: <TbTargetArrow className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Cals Burned",
      value: "232",
      improve: "+2.4%",
      icon: <AiOutlineFire className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "Weight KG",
      value: "62",
      improve: "+11%",
      icon: <TbWeight className="w-6 h-6" />,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-center p-11 gap-2">
        {PersonalRecord.map((record) => (
          <StatisticsCards key={record.id} details={record} />
        ))}
      </div>
    </>
  );
};

export default Statistics;
