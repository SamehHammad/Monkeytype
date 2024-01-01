import Link from "next/link";
import React from "react";

const FooterTab = ({ icon, text, link, onClick }) => {
  return (
    <Link
      href={{ link }}
      className="flex gap-1 md:text-sm xs:text-xs items-center font-mono cursor-pointer hover:text-lightText "
      onClick={onClick}
    >
      {icon}
      <p>{text}</p>
    </Link>
  );
};

export default FooterTab;
