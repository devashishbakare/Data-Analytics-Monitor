import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaMapMarker,
} from "react-icons/fa";

export const Contact = () => {
  return (
    <>
      <div className="h-full w-full gap-5 flex flex-col lg:flex-row mt-5">
        <div className="h-[35%] w-full pl-3 pt-2 flex flex-col items-center justify-center md:h-[70%] md:mt-0 gap-5 lg:h-[80%]">
          <span className="h-[20%] w-full text-[1.6rem] font-bold text-[#00df9a] ">
            {" "}
            MONITOR.
          </span>
          <span className="h-[55%] w-full  text-gray-400 text-[1.2rem] md:h-[30%] lg:h-[55%]">
            {" "}
            Contact us on different platoform to get started with intuitive
            analytics dashboard. Visualize trends and make informed decisions
            with real-time data visualization
          </span>
          <span className="h-[25%] w-full flex items-center gap-5">
            <span className="bg-white h-11 w-11 rounded-[50%] flex items-center justify-center">
              {" "}
              <FaTwitter className="text-[1.7rem]" />
            </span>
            <span className="bg-white h-11 w-11 rounded-[50%] flex items-center justify-center">
              {" "}
              <FaFacebookF className="text-[1.7rem]" />
            </span>
            <span className="bg-white h-11 w-11 rounded-[50%] flex items-center justify-center">
              {" "}
              <FaYoutube className="text-[1.7rem]" />
            </span>
            <span className="bg-white h-11 w-11 rounded-[50%] flex items-center justify-center">
              {" "}
              <FaInstagram className="text-[1.7rem]" />
            </span>
            <span className="bg-white h-11 w-11 rounded-[50%] flex items-center justify-center">
              {" "}
              <FaMapMarker className="text-[1.7rem]" />
            </span>
          </span>
        </div>
        <div className="h-[60%] w-full mt-5 flex flex-col md:flex-row">
          <div className="h-[50%] w-full flex items-center text-white ">
            <span className="h-full w-[50%] flex flex-col pd-4 gap-2  pl-4 pt-5">
              <span className="text-[1.3rem] font-bold mb-2">Solutions</span>
              <span className="text-[1.1rem]">Anaytics</span>
              <span className="text-[1.1rem]">Marketing</span>
              <span className="text-[1.1rem]">Insights</span>
            </span>
            <span className="h-full w-[50%] flex flex-col pd-4 gap-2 pl-4 pt-5">
              <span className="text-[1.3rem] font-bold mb-2">Support</span>
              <span className="text-[1.1rem]">Pricing</span>
              <span className="text-[1.1rem]">Guide</span>
              <span className="text-[1.1rem]">API status</span>
            </span>
          </div>
          <div className="h-[50%] w-full flex items-center text-white ">
            <span className="h-full w-[50%] flex flex-col pd-4 gap-2  pl-4 pt-5">
              <span className="text-[1.3rem] font-bold mb-2">Company</span>
              <span className="text-[1.1rem]">About</span>
              <span className="text-[1.1rem]">Blog</span>
              <span className="text-[1.1rem]">Jobs</span>
            </span>
            <span className="h-full w-[50%] flex flex-col pd-4 gap-2 pl-4 pt-5">
              <span className="text-[1.3rem] font-bold mb-2">Legal</span>
              <span className="text-[1.1rem]">Claim</span>
              <span className="text-[1.1rem]">Policy</span>
              <span className="text-[1.1rem]">Terms</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
