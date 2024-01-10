"use client";
import React from "react";
import NotifItem from "./NotifItem";
import Connection from "./Connection";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdAnnouncement } from "react-icons/md";
import { usePathname } from "next/navigation";

const Notifications = () => {
  const path = usePathname();
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full h-full  p-3 mt-8">
        <NotifItem
          icon={<TfiAnnouncement />}
          child1={"Announcements"}
          child2={"Nothing to show"}
        />
        <div className="w-md h-2 bg-bg2Color m-12"></div>
        {path === "/" ? (
          <>
            <div className=" flex gap-2 items-center text-2xl text-softText tracking-wider font-bold ">
              <MdAnnouncement />
              <h1>Notifications</h1>
            </div>
            <Connection />
            <Connection />
          </>
        ) : (
          <NotifItem
            icon={<MdAnnouncement />}
            child1={"Notifications"}
            child2={"Nothing to show"}
          />
        )}
      </div>
    </div>
  );
};

export default Notifications;
