import React from "react";

const Button = ({ children, icon, costumStyle, handleClick }) => {
  return (
    <button
      type="submit"
      className={`flex justify-center text-lightText  bg-[#2C2E31] rounded-lg items-center gap-2 p-1 text-xl ${costumStyle} hover:bg-lightText hover:text-bg2Color`}
      onClick={handleClick}
      aria-label={children}
    >
      {icon}
      {children}
    </button>
  );
};

export default React.memo(Button);
