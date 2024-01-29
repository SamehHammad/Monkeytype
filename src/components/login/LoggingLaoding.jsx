import React from "react";

const LoggingLaoding = ({children}) => {
  return (
    <div className="w-full h-screen flex justify-center mt-[20vh] relative">
      <p className="text-lg text-softText tracking-wider absolute top-[10%] font-black">
      {children}
      </p>
   
        <div
          className="h-[150px] w-[150px] text-lightText animate-spin-slow rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_3s_linear_infinite]"
          role="status"
        ></div>
      </div>
  );
};
export default LoggingLaoding;
