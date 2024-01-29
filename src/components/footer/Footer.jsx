"use client";
import React from "react";
import { MdLocalPostOffice, MdOutlineSecurity } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaCode, FaTwitter, FaLock } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { LuFileTerminal } from "react-icons/lu";
import { IoIosColorPalette } from "react-icons/io";
import { IoGitBranchOutline } from "react-icons/io5";
import { useTestCtx } from "../../context/TestContext";
import { useThemeCtx } from "../../context/ThemeContext";
import FooterTab from "./FooterTab";
import { useRouter } from "next/navigation";
const Footer = () => {
  const { isRunning } = useTestCtx();
  const { setThemePopup, theme, themeName } = useThemeCtx();
  const router = useRouter();
  const tapLeft = [
    {
      id: 3,
      text: "Contact",
      icon: <MdLocalPostOffice />,
      clicked: () => {
        router.push("/test/about");
      },
    },
    {
      id: 4,
      text: "Support",
      icon: <GiTakeMyMoney />,
      clicked: () => {
        router.push("/test/about");
      },
    },
    {
      id: 5,
      text: "GitHub",
      icon: <FaCode />,
      clicked: () => {
        router.push("https://github.com/SamehHammad");
      },
    },
    {
      id: 6,
      text: "Discord",
      icon: <BsDiscord />,
      clicked: () => {
        router.push("https://www.linkedin.com/in/sameh7ammad/");
      },
    },
    {
      id: 7,
      text: "Twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/SamehHammad17",
      clicked: () => {
        router.push("https://twitter.com/SamehHammad17");
      },
    },
    {
      id: 8,
      text: "Terms",
      icon: <LuFileTerminal />,
      clicked: () => {
        router.push("/test/about");
      },
    },
    {
      id: 9,
      text: "Security",
      icon: <MdOutlineSecurity />,
      clicked: () => {
        router.push("/test/settings");
      },
    },
    {
      id: 11,
      text: "Privacy",
      icon: <FaLock />,
      clicked: () => {
        router.push("/test/profile");
      },
    },
  ];
  const tapRight = [
    {
      id: 9,
      text: themeName || "dark",
      icon: <IoIosColorPalette />,
      clicked: () => {
        setThemePopup(true);
      },
    },
    {
      id: 10,
      text: "v23.51.0",
      icon: <IoGitBranchOutline />,
      clicked: () => {
        router.push("https://github.com/SamehHammad/Monkeytype");
      },
    },
  ];
  return (
    <div
      className="w-full flex justify-between xs:mt-8 lg:mt-12 "
      style={{ visibility: isRunning ? "hidden" : "visible" }}
    >
      <div className="flex gap-3 flex-wrap text-softText  max-w-[70%]">
        {tapLeft.map((nav) => (
          <FooterTab
            text={nav.text}
            icon={nav.icon}
            key={nav.id}
            onClick={nav.clicked}
          />
        ))}
      </div>
      <div className="flex md:flex-row xs:flex-col gap-3 text-softText  max-w-[25%]">
        {tapRight.map((nav) => (
          <FooterTab
            key={nav.id}
            text={nav.text}
            icon={nav.icon}
            onClick={nav.clicked}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Footer);
