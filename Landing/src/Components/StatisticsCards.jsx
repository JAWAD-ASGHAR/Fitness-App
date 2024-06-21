import React from "react";

const StatisticsCards = (props) => {
  return (
    <>
      <div className="flex flex-col space-y-6">
        <div className="text-5xl font-bold">{props.item.main}</div>
        <p className="w-2/3 font-semibold">{props.item.des}</p>
      </div>
    </>
  );
};

export default StatisticsCards;
