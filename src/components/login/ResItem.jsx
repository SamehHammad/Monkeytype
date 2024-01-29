import React from "react";

const ResItem = ({item1,item2,item3,item4}) => {
  return (
    <div className="w-full text-center grid grid-cols-4 bg-bg2Color p-5 font-mono">
      <div className="flex flex-col gap-4">
        <p className="text-softText text-xs">{item1.n}</p>
        <p className="text-lightText text-xl font-bold">{item1.value1}</p>
        <p className="text-lightText text-xl">{item1.value}</p>
      </div>{" "}
      <div className="flex flex-col gap-4">
        <p className="text-softText text-xs">{item2.n}</p>
        <p className="text-lightText text-xl font-bold">{item2.value}</p>
        <p className="text-lightText text-xl">{item2.value1}</p>
      </div>{" "}
      <div className="flex flex-col gap-4">
        <p className="text-softText text-xs">{item3.n}</p>
        <p className="text-lightText text-xl font-bold">-</p>
        <p className="text-lightText text-xl">{item3.value}</p>
      </div>{" "}
      <div className="flex flex-col gap-4">
        <p className="text-softText text-xs">{item4.n}</p>
        <p className="text-lightText text-xl font-bold">{item4.value}</p>
        <p className="text-lightText text-xl">-</p>
      </div>
    </div>
  );
};

export default ResItem;
