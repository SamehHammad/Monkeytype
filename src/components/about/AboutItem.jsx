import React from "react";

const AboutItem = ({header,num,num2}) => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center cursor-pointer">
      <p className="text-softText  ">{header}</p>
      <div className="flex text-2xl xs:flex-row md:flex-col xs:gap-2 md:gap-0 text-center items-center">
        <h2 className="text-5xl text-lightText">{num}</h2>
        <h4 className="text-2xl text-lightText ">{num2}</h4>
      </div>
    </div>
  );
};

export default AboutItem;
