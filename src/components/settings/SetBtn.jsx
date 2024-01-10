"use client";
import React from "react";

const SetBtn = ({ ev, setActiveTab, activeTab }) => {
  return (
    <button
      className={`px-3 py-2 whitespace-nowrap flex-1 text-center ${
        activeTab === ev
          ? "bg-scoreColor text-[#2C2E31]"
          : "bg-[#2C2E31] text-lightText"
      } md:text-md text-sm hover:bg-lightText hover:text-[#2C2E31] rounded-xl`}
      onClick={() => setActiveTab(ev)}
      aria-label={ev}
    >
      {ev}
    </button>
  );
};
export default SetBtn;
