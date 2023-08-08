import React from "react";

export const Dashboard = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col items-center justify-center sm:flex-row">
        <span className="h-[50%] w-[90%] flex items-center justify-center border-2 bg-white sm:h-[90%] sm:ml-5 sm:w-[50%]">
          <img
            src="https://raw.githubusercontent.com/fireclint/data-finance-react-tailwind/main/src/assets/laptop.jpg"
            alt="dashboard_image"
            className="h-full w-[70%] object-cover sm:h-[70%] sm:w-[100%]  md:h-[80%] md:w-[100%] lg:h-[85%] lg:w-[80%]"
          />
        </span>
        <span className="h-[50%] w-full flex flex-col text-center items-center pt-10 gap-3 sm:h-full sm:w-[50%] sm:justify-center sm:gap-5 md:gap-1">
          <span className="h-[10%] w-full flex items-center justify-center text-center uppercase font-bold sm:h-[15%] text-[1.5rem] lg:text-[1.8rem]">
            data analytics dashboard
          </span>
          <span className="text-gray-400 h-[65%] w-full flex items-center justify-center text-center capitalize text-[1.1rem] pl-10 pr-10 sm:h-[35%] sm:text-[1.2rem] lg:text-[1.3rem]">
            Explore data-driven insights with our intuitive analytics dashboard.
            Visualize trends, track key metrics, and make informed decisions
            with real-time data visualization
          </span>
          <button className="h-[30%] min-w-[150px] bg-[#000300] mb-3 text-white text-[1rem] font-bold p-3 rounded-lg border-none outline-none sm:h-[12%]">
            Get Started
          </button>
        </span>
      </div>
    </>
  );
};
