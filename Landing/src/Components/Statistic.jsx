import React from "react";
import StatisticsCards from "./StatisticsCards";

const Statistic = (props) => {
  return (
    <>
      <div
        className={`flex flex-col items-center ${props.className} opacity-85`}
      >
        <div className=" flex justify-center space-x-10 w-11/12 bg-[#E5FA4E] rounded-[60px] p-16">
          {props.stats.map((stat) => (
            <StatisticsCards key={stat.id} item={stat} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Statistic;
