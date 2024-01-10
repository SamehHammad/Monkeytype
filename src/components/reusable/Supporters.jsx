import React from "react";

const Supporters = ({ head, desc }) => {
  return (
    <div className="flex flex-col w-full justify-start font-mono gap-2 mt-5 ">
      <h1 className="text-softText text-4xl ">{head}</h1>
      {desc.map((name, index) => (
        <p key={index} className="text-lightText text-md font-bold flex flex-col max-h-[10%] flex-wrap">
          {name}
        </p>
      ))}
    </div>
  );
};

export default React.memo(Supporters);
