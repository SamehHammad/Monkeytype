"use client";
import React from "react";
import { MdLocalPostOffice, MdOutlineSecurity } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaCode, FaTwitter, FaLock } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { LuFileTerminal } from "react-icons/lu";
import { IoIosColorPalette } from "react-icons/io";
import { IoGitBranchOutline } from "react-icons/io5";
import FooterIcon from "./FooterTab";
import { useTestCtx } from "../../context/TestContext";
import { useThemeCtx } from "../../context/ThemeContext";
const Footer = () => {
  const { isRunning } = useTestCtx();
  const { setThemePopup, theme,themeName } = useThemeCtx();
  const tapLeft = [
    { id: 3, text: "Contact", icon: <MdLocalPostOffice />, link: "/" },
    { id: 4, text: "Support", icon: <GiTakeMyMoney />, link: "/" },
    {
      id: 5,
      text: "GitHub",
      icon: <FaCode />,
      link: "https://github.com/SamehHammad",
    },
    {
      id: 6,
      text: "Discord",
      icon: <BsDiscord />,
      link: "https://www.linkedin.com/in/sameh7ammad/",
    },
    {
      id: 7,
      text: "Twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/SamehHammad17",
    },
    { id: 8, text: "Terms", icon: <LuFileTerminal />, link: "" },
    { id: 9, text: "Security", icon: <MdOutlineSecurity />, link: "/" },
    { id: 11, text: "Privacy", icon: <FaLock />, link: "/" },
  ];
  const tapRight = [
    {
      id: 9,
      text: themeName||"dark",
      icon: <IoIosColorPalette />,
      link: "/",
      clicked: () => {
        setThemePopup(true);
      },
    },
    {
      id: 10,
      text: "v23.51.0",
      icon: <IoGitBranchOutline />,
      link: "https://github.com/SamehHammad/Monkeytype-clone",
      clicked: () => {},
    },
  ];
  return (
    <div
      className="w-full flex justify-between xs:mt-8 lg:mt-12 "
      style={{ visibility: isRunning ? "hidden" : "visible" }}
    >
      <div className="flex gap-3 flex-wrap text-softText  max-w-[70%]">
        {tapLeft.map((nav) => (
          <FooterIcon text={nav.text} icon={nav.icon} key={nav.id} />
        ))}
      </div>
      <div className="flex md:flex-row xs:flex-col gap-3 text-softText  max-w-[25%]">
        {tapRight.map((nav) => (
          <FooterIcon
            key={nav.id}
            text={nav.text}
            icon={nav.icon}
            link={nav.link}
            onClick={nav.clicked}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Footer);
