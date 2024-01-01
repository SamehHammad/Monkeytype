"use client";
import React, { useEffect } from "react";
import { TiKeyboard } from "react-icons/ti";
import { FaCrown, FaInfo, FaRegUser, FaKeyboard } from "react-icons/fa";
import { IoMdSettings, IoIosNotifications } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useAppCtx } from "../../context/AppContext";
import Image from "next/image";
import { useTestCtx } from "../../context/TestContext";
import Popup from "../reusable/Popup";
import Crown from "@/app/components/crown/Crown";
import Themes from "../theme/Themes";

const Navbar = () => {
  const {
    splash,
    crownPopup,
    setCrownPopup,
    themePopup,
    setThemePopup,
    theme,
    setTheme,
  } = useAppCtx();
  const { restartTest, isRunning } = useTestCtx();
  useEffect(() => {
    const focus = restartTest();
    return () => {
      focus;
    };
  }, [theme]);
  const router = useRouter();
  const navsLeft = [
    {
      id: 1,
      icon: <TiKeyboard />,
      clicked: () => {
        restartTest();
      },
    },
    {
      id: 2,
      icon: <FaCrown />,
      clicked: () => {
        setCrownPopup(true);
      },
    },
    {
      id: 3,
      icon: <FaInfo />,
      clicked: () => {
        router.push("/test/about");
      },
    },
    {
      id: 4,
      icon: <IoMdSettings />,
      clicked: () => {
        router.push("/test/settings");
      },
    },
  ];
  const navsRight = [
    {
      id: 5,
      icon: (
        <IoIosNotifications style={{ fontSize: "23px", marginTop: "2px" }} />
      ),
    },
    {
      id: 6,
      icon: <FaRegUser style={{ fontSize: "16px", marginTop: "5px" }} />,
      clicked: () => {
        router.push("/test/login");
      },
    },
  ];
  return (
    <div className="flex w-full h-[5vh] items-center pt-12 p-10 justify-between">
      <div className="flex">
        <div className="flex items-center">
          <button
            style={{ visibility: splash || isRunning ? "hidden" : "visible" }}
            onClick={restartTest}
          >
            <FaKeyboard className="text-4xl text-scoreColor m-2 mt-4" />
          </button>

          <Image
            src={"/logo.png"}
            alt="logo"
            width={150}
            height={50}
            className="sm:flex xs:hidden md:w-[190px] sm:w-[150px]"
          />
          <div
            className="flex"
            style={{ visibility: splash || isRunning ? "hidden" : "visible" }}
          >
            {navsLeft.map((nav) => (
              <button
                className="text-xl text-softText m-2 cursor-pointer hover:text-lightText"
                onClick={nav.clicked ? nav.clicked : () => {}}
                key={nav.id}
              >
                {nav.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div
        className="flex"
        style={{ visibility: splash || isRunning ? "hidden" : "visible" }}
      >
        {navsRight.map((nav) => (
          <button
            onClick={nav.clicked ? nav.clicked : () => {}}
            key={nav.id}
            className="text-xl text-softText m-2 cursor-pointer hover:text-lightText"
          >
            {nav.icon}
          </button>
        ))}
      </div>
      {crownPopup && (
        <Popup
          children={<Crown />}
          closePopup={() => setCrownPopup(!crownPopup)}
          style={"md:w-[700px] lg:w-[850px] xs:w-[85%] "}
        />
      )}
      {themePopup && (
        <Popup
          children={
            <Themes
              setTheme={setTheme}
              closePopup={() => {
                setThemePopup(!themePopup);
                console.log(theme);
              }}
            />
          }
          closePopup={() => setThemePopup(!themePopup)}
          style={"md:w-[600px] xs:w-[85%]"}
        />
      )}
    </div>
  );
};

export default Navbar;
