import React from "react";

export const AlaCart = () => {
  return (
    <>
      <div className="h-[60vh] w-[90%] border-2 gap-2 rounded-lg shadow-md sm:w-[70%] md:h-[55vh] md:w-[40%] mt-10 mb-10 md:border-2 lg:h-[60vh] lg:w-[32%]">
        <span className="h-[25%] flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/djgouef8q/image/upload/v1691563145/hh1bzffwytiityocglrt.png"
            alt="single_user_image"
            className="h-[70%] w-[30%] object-contains md:w-[25%]"
          />
        </span>
        <span className="h-[10%] flex items-center justify-center text-2xl mr-3">
          Single User
        </span>
        <span className="h-[15%] flex items-center justify-center text-4xl font-bold mr-3">
          &#8377;&nbsp;11999
        </span>
        <span className="h-[10%] flex items-center justify-center text-xl mr-3">
          500 GB Storage
        </span>
        <span className="h-[10%] flex items-center justify-center text-xl mr-3">
          1 User Allowed
        </span>
        <span className="h-[10%] flex items-center justify-center text-xl mr-3">
          Send up to 2GB
        </span>
        <span className="h-[15%] flex items-center justify-center ">
          <button className="h-[80%] w-[50%] bg-[#00df9a] border-none outline-none rounded-lg mr-2 text-xl font-bold">
            Start Trial
          </button>
        </span>
      </div>

      <div className="h-[60vh] w-[90%] border-2 gap-2 rounded-lg shadow-md sm:w-[70%] md:h-[55vh] md:w-[40%] mt-10 mb-10 md:border-2 lg:h-[60vh] lg:w-[32%]">
        <span className="h-[25%] flex items-center justify-center">
          <img
            src="http://res.cloudinary.com/djgouef8q/image/upload/v1691563229/ymufywkgwmwijj721zox.png"
            alt="double_user_image"
            className="h-[80%] w-[30%] object-contains md:w-[25%]"
          />
        </span>
        <span className="h-[10%] flex items-center justify-center text-2xl mr-3">
          Partnership
        </span>
        <span className="h-[15%] flex items-center justify-center text-4xl font-bold mr-3">
          &#8377;&nbsp;31999
        </span>
        <span className="h-[10%] flex items-center justify-center text-xl mr-3">
          5 TB Storage
        </span>
        <span className="h-[10%] flex items-center justify-center text-xl mr-3">
          10 User Allowed
        </span>
        <span className="h-[10%] flex items-center justify-center text-xl mr-3">
          Send up to 100GB
        </span>
        <span className="h-[15%] flex items-center justify-center ">
          <button className="h-[80%] w-[50%] bg-[#00df9a] border-none outline-none rounded-lg mr-2 text-xl font-bold">
            Start Trial
          </button>
        </span>
      </div>
    </>
  );
};
