import React from "react";

export const Notify = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col items-center justify-center">
        <span className="h-[25%] w-[95%] text-[1.8rem] text-white capitalize font-bold sm:h-[15%] text-2xl">
          want tips and tricks to optimize your flow?
        </span>

        <span className=" h-[10%] w-[95%] text-[1.1rem] text-white capitalize opacity-50">
          sign up to our newsletter and stay up to date
        </span>

        <div className=" h-[40%] w-full flex flex-col gap-5 items-center justify-center sm:flex-row sm:h-[15%] sm:justify-start">
          <input
            type="text"
            placeholder="Enter your text"
            className="h-[25%] w-[90%] border-none outline-none custom-placeholder rounded-lg mr-5 sm:h-[70%] sm:w-[70%] ml-5
            "
          />
          <button
            className="bg-[#00df9a] h-[25%] w-1/3 rounded-md border-none outline-none text-base font-bold
          sm:h-[70%] sm:w-[27%] mr-3 md:w-[15%]
          "
          >
            Notify Me
          </button>
        </div>

        <span className="h-[10%] w-[95%] text-[1.1rem] text-white capitalize opacity-50 sm:mt-5">
          we care about protection of your data, read out{" "}
          <span className="opacity-1 text-[#00df9a] underline cursor-pointer font-bold ">
            <span className="opacity-1">privacy policy</span>
          </span>
        </span>
      </div>
    </>
  );
};
