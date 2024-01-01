import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      className="w-[250px] focus:outline-lightText outline-none bg-[#2C2E31] text-[18px] rounded-lg p-1 text-md text-lightText placeholder-softText"
      autocomplete="new-password"
    />
  );
};

export default Input;
