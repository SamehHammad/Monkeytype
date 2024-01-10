"use client"
import React from "react";
import { useTestCtx } from "../../context/TestContext";

const ShortCuts = () => {
  const {isRunning}=useTestCtx()
  return (
    <div className="flex flex-col items-center gap-3 xs:mt-2 md:mt-[20vh]"
      style={{ visibility: isRunning ? "hidden" : "visible" }}
    >
      <div className="d">
        <p className=" bg-softText px-1 text-xs text-gray-700 font-bold rounded">
          tap <span className="bg-bgColor text-softText p-1">+</span> shift{" "}
          <span className="bg-bgColor text-softText p-1">- restart test</span> 
        </p>
      </div>
      <div className="f">
        <p className=" bg-softText px-1 text-xs text-gray-700 font-bold rounded">
          esc <span className="bg-bgColor text-softText p-1">or</span> ctrl{" "}  
          <span className="bg-bgColor text-softText p-1">+</span> shift{" "} 
          <span className="bg-bgColor text-softText p-1">+</span> P{" "}
          <span className="bg-bgColor text-softText p-1">- command line</span> 
        </p>
      </div>
    </div>
  );
};

export default React.memo(ShortCuts);
