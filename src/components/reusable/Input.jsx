import React from "react";

const Input = ({ type, placeholder, inputName, costumStyle,onChange }) => {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      className={`w-[250px] focus:outline-lightText outline-none bg-[#2C2E31] text-[18px] ${costumStyle} rounded-lg p-1 text-md text-lightText placeholder-softText`}
      autoComplete="new-password"
      name={inputName}
      onChange={onChange}
    />
  );
};

export default React.memo(Input);
