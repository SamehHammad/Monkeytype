import React from "react";

const Support = ({ style, icon, text }) => {
  return (
    <div
      className={`flex justify-center items-center ${style} bg-[#2C2E31] mb-14 mt-5 font-mono rounded-md cursor-pointer group hover:bg-lightText`}
    >
      <div className="text-lightText px-1 text-3xl group-hover:text-[#2C2E31]">{icon}</div>
      <p className="text-lightText px-1 text-3xl font-mono group-hover:text-[#2C2E31]">
        {text}
      </p>
    </div>
  );
};

export default React.memo(Support);
