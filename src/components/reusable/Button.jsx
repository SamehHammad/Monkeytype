import React from "react";

const Button = ({ children, icon, costumStyle }) => {
  return (
    <button
      type="submit"
      className={`flex justify-center text-lightText  bg-[#2C2E31] rounded-lg items-center gap-2 p-1 text-xl ${costumStyle}`}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
