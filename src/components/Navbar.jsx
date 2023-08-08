import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export const Navbar = () => {
  const [showAsideMenu, setShowAsideMenu] = useState(false);
  return (
    <>
      <div className="h-full w-full text-[#00df9a] font-bold flex items-center">
        <span className="h-full w-[80%] flex items-center pl-7 text-[1.5rem] md:w-[20%]">
          MONITOR.
        </span>
        <span
          className="h-full w-[20%] flex flex-row-reverse items-center justify-center md:hidden"
          onClick={() => setShowAsideMenu(!showAsideMenu)}
        >
          {showAsideMenu ? (
            <>
              <AiOutlineClose className="text-[1.3rem] cursor-pointer" />
            </>
          ) : (
            <>
              <AiOutlineMenu className="text-[1.3rem] cursor-pointer" />
            </>
          )}
        </span>
        <span className="hidden md:flex h-[100%] w-[80%] items-center">
          <ul className=" h-[100%] w-full flex flex-row items-center justify-center">
            <li className="text-white h-[12%] uppercase flex items-center pl-10 text-[1.1rem] cursor-pointer">
              Home
            </li>
            <li className="text-white h-[12%] uppercase flex items-center pl-10 text-[1.1rem] cursor-pointer">
              Company
            </li>
            <li className="text-white h-[12%] uppercase flex items-center pl-10 text-[1.1rem] cursor-pointer">
              Resource
            </li>
            <li className="text-white h-[12%] uppercase flex items-center pl-10 text-[1.1rem] cursor-pointer">
              About
            </li>
            <li className="text-white h-[12%] uppercase flex items-center pl-10 text-[1.1rem] cursor-pointer">
              Contact
            </li>
          </ul>
        </span>

        <div
          className={
            showAsideMenu
              ? "h-[100vh] w-[70vw] bg-[#000100] fixed left-0 top-0 ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <span className="h-[10%] w-[100%] flex items-center pl-7 text-[1.5rem] text-[#00df9a] font-bold">
            MONITOR.
          </span>
          <ul className=" h-[60%] w-full flex flex-col">
            <li className="text-white h-[12%] border-b border-gray-400 uppercase flex items-center pl-10 text-[1.1rem] cursor-pointer">
              Home
            </li>
            <li className="text-white h-[12%] border-b border-gray-400 uppercase flex items-center pl-10 text-[1.1rem] cursor-pointer">
              Company
            </li>
            <li className="text-white h-[12%] border-b border-gray-400 uppercase flex items-center pl-10 text-[1.1rem] cursor-pointer">
              Resource
            </li>
            <li className="text-white h-[12%] border-b border-gray-400 uppercase flex items-center pl-10 text-[1.1rem] cursor-pointer">
              About
            </li>
            <li className="text-white h-[12%] border-b border-gray-400 uppercase flex items-center pl-10 text-[1.1rem] cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
