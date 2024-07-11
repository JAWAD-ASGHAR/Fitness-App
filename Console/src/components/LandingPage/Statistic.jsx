import React from "react";
import StatisticsCards from "./StatisticsCards.jsx";

const Statistic = (props) => {
  console.log(props);
  return (
    <>
      <div
        className={`flex flex-col items-center ${props.className} opacity-85`}
      >
        <div className=" grid grid-cols-4 justify-center items-center  w-11/12 bg-[#E5FA4E] rounded-[60px] py-16 ">
          {props.stats.map((stat) => (
            <StatisticsCards key={stat.id} item={stat} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Statistic;
