import React from "react";

const Connection = () => {
  return (
    <div className="flex mt-2 items-center">
          <div className="flex h-10 rounded w-1 bg-[blue] "></div>
          <div className="flex flex-col ms-2 ">
              <p className="text-xs text-softText tracking-widest">Connection</p>
              <p className="text-xs text-lightText font-bold tracking-widest">You're back online</p>
          </div>
    </div>
  );
};

export default Connection;
