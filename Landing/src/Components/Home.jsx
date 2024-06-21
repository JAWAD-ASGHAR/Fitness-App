import React from "react";
import Button from "./Button";
import Statistic from "./Statistic";

const Home = () => {
  const stats = [
    {
      id: 1,
      main: "100+",
      des: "Join Daily Active Users Worldwide",
    },
    {
      id: 2,
      main: "85%",
      des: "Active Users Satisfaction Rate",
    },
    {
      id: 3,
      main: "500+",
      des: "Professionally Designed Workouts",
    },
    {
      id: 4,
      main: "70%",
      des: "Increase In Daily Activity",
    },
  ];
  return (
    <>
        <div className="w-full h-[1200px] bg-[url('../../public/Layers_night.svg')] bg-cover bg-no-repeat">
        <div className="flex ">
        <div className="flex flex-col px-36 pt-36">
              <div className="text-white text-8xl font-semibold flex flex-col text-left w-full ">
                <div>Track</div>
                <div>Your Progress</div>
              </div>
              <p className="max-w-[30rem] mt-6 text-lg font-medium text-[#B8B8B8]">
                Achieve Your Fitness Goals With Personalized Fitness Tracking,
                Workouts and Nutrition Advice.
              </p>
              <Button className={"bg-white text-slate-800 my-6 rounded-full font-medium px-14 py-7" } > Start For Free </Button>
            <img src="../../public/White_Lady.svg" className="absolute top-52 right-0" />
            </div>
            </div>
            <Statistic stats={stats} className={"mt-32 py-16"} />
          </div>
    </>
  );
};

export default Home;
