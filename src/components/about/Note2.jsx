import React from "react";

const Note2 = ({desc,head}) => {
  return (
    <div className="flex flex-col justify-start font-mono gap-4 mt-5">
      <h1 className="text-softText text-4xl ">{head}</h1>
      <p className="text-lightText text-md font-bold ">
      {desc}
          </p>
    </div>
  );
};

export default Note2;
