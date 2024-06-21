import React from "react";
import StatisticsCards from "./StatisticsCards";

const Statistic = (props) => {
  return (
    <>
      <div
        className={`flex flex-col items-center ${props.className} opacity-85`}
      >
        <div className=" flex justify-center space-x-10 w-11/12 bg-yellow-300 rounded-3xl p-11">
          {props.items.map((item) => (
            <StatisticsCards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Statistic;
