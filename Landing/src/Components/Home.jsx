import React from "react";
import Button from "./Button";
import Statistic from "./Statistic";

const Home = () => {
  const item = [
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
      <div className="w-full">
        <div className="bg-[url('../../public/Dark_Theme.svg')] bg-cover bg-no-repeat">
          <div className="flex  text-white">
            <div className=" w-2/4 p-24 ">
              <div className="text-5xl font-bold flex flex-col text-left w-full ">
                <span>Track</span>
                <span>Your Progress</span>
              </div>
              <div className="my-14">
                Achieve Your Fitness Goals With Personalized Fitness Tracking,
                Workouts and Nutrition Advice
              </div>
              <Button
                className={
                  "bg-white text-slate-800 my-6 rounded-full font-medium py-9 px-14"
                }
              >
                Start For Free
              </Button>
            </div>
          </div>

          <Statistic items={item} className={"py-16"} />
        </div>
      </div>
    </>
  );
};

export default Home;
