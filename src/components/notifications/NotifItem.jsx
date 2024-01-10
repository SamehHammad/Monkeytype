import React from "react";

const NotifItem = ({ child1, child2, icon }) => {
  return (
    <div className="flex flex-col tracking-wider font-bold">
      <div className=" flex gap-2 items-center text-2xl text-softText ">
        {icon}
        <h1>{child1}</h1>
      </div>
      <div className="flex-1 text-center mt-8 text-lightText text-sm">{child2}</div>
    </div>
  );
};

export default NotifItem;
