import React from "react";

const Giude = ({ head, desc }) => {
  return (
    <div className="w-full flex flex-col justify-start font-mono mt-4">
      <h1 className="text-softText text-lg ">{head}</h1>
      <p className="text-lightText text-md font-bold ">{desc}</p>
    </div>
  );
};

export default Giude;
