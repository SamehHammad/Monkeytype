import React from "react";

const SetContent = ({cont,header,icon}) => {
  return (
    <div className="w-[95%] flex flex-col mt-14">
          <div className="flex gap-2 text-softText text-xl ">
              {icon}
          {header}</div>
      <p className="text-lightText text-md">
       {cont}
      </p>
    </div>
  );
};

export default SetContent;
