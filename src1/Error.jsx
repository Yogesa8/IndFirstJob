import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="h-screen bg-white items-center flex justify-center px-5 lg:px-0">
      <div className="w-103.75 text-center flex-col items-center justify-center mx-auto gap-25">
        <div>
          <h3 className="text-4xl md:text-[56px] leading-16 text-[#1A1C16]">
            Page Not Found
          </h3>
        </div>
        <div className="flex flex-col gap-6 mt-3">
          <div className="text-center">
            <p className="text-base leading-6 tracking-wider font-sans">
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
          </div>
          <div>
            <Link to={'/'} className="bg-[#8AC732] text-white font-sans max-w-36.5 w-full h-12 rounded-[100px] font-medium text-sm p-4">
              Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Error;
