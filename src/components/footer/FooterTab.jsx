import React from "react";

const FooterTab = ({ icon, text, lnk, onClick }) => {
  return (
    <div
      className="flex gap-1 md:text-sm xs:text-xs items-center font-mono cursor-pointer hover:text-lightText "
      onClick={onClick}
    >
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default FooterTab;
