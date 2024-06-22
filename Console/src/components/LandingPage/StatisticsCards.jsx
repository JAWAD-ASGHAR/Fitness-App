import React from "react";

const StatisticsCards = (props) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="text-7xl font-semibold">{props.item.main}</div>
      <p className="w-2/3 font-medium text-xl">{props.item.des}</p>
    </div>
  );
};

export default StatisticsCards;
