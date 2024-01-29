"use client";
import React, { useEffect, useState } from "react";
import { TiKeyboard } from "react-icons/ti";
import { FaCrown, FaInfo, FaRegUser, FaKeyboard } from "react-icons/fa";
import { IoMdSettings, IoIosNotifications } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { useAppCtx } from "../../context/AppContext";
import { useTestCtx } from "../../context/TestContext";
import Popup from "../reusable/Popup";
import Crown from "../crown/Crown";
import Themes from "../theme/Themes";
import Notifications from "../notifications/Notifications";
import { useThemeCtx } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

const Nav = () => {
  const { splash, crownPopup, setCrownPopup, notifPopup, setNotifPopup } =
    useAppCtx();
  const { themePopup, setThemePopup } = useThemeCtx();
  const { restartTest, isRunning } = useTestCtx();
  const { currentUserData, logout, currentUser } = useAuth();
  const [username, setUsername] = useState("");
  useEffect(() => {
    console.log(currentUser);
    currentUserData?.username != null
      ? setUsername(`${currentUserData?.username}`)
      : setUsername(currentUser?.displayName);
  }, [currentUser, currentUserData]);
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
      clicked: () => {
        setNotifPopup(true);
      },
    },
    {
      id: 6,
      username: currentUser && username,
      icon: <FaRegUser style={{ fontSize: "16px", marginTop: "5px" }} />,
      clicked: () => {
        router.push("/test/profile");
      },
    },
  ];
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      router.push("/test/login");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      {" "}
      <div className="flex">
        <div className="flex items-center">
          <button
            style={{ visibility: splash || isRunning ? "hidden" : "visible" }}
            onClick={restartTest}
          >
            <FaKeyboard className="text-4xl text-scoreColor m-2 mt-4" />
          </button>
          <div className="flex flex-col ">
            <p className="sm:flex xs:hidden font-mono text-softText text-[9px] mb-2 absolute ">
              monkey see
            </p>
            <h1 className="sm:flex xs:hidden font-mono text-lightText font-black text-3xl lg:text-4xl">
              monkeytype
            </h1>
          </div>
          <div
            className="flex"
            style={{ visibility: splash || isRunning ? "hidden" : "visible" }}
          >
            {navsLeft.map((nav) => (
              <button
                className="text-sm sm:text-xl text-softText m-2 cursor-pointer hover:text-lightText"
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
        className="flex items-center gap-2"
        style={{ visibility: splash || isRunning ? "hidden" : "visible" }}
      >
        {navsRight.map((nav) => (
          <button
            onClick={nav.clicked ? nav.clicked : () => {}}
            key={nav.id}
            className="flex text-sm sm:text-xl items-center gap-1 text-softText cursor-pointer hover:text-lightText"
          >
            {nav.icon}
            <p className="hover:text-scoreColor text-sm mt-1">
              {nav.username && nav.username}
            </p>
          </button>
        ))}
        {currentUser && (
          <LuLogOut
            className="text-sm sm:text-xl text-softText m-2 cursor-pointer hover:text-lightText ms-2"
            onClick={handleLogout}
          />
        )}
      </div>
      {crownPopup && (
        <Popup
          children={<Crown />}
          closePopup={() => setCrownPopup(!crownPopup)}
          style={
            "md:w-[700px] lg:w-[850px] xs:w-[85%] max-h-[75vh] min-h-[70vh] overflow-y-scroll"
          }
          pStyle={"items-center justify-center"}
        />
      )}
      {themePopup && (
        <Popup
          children={
            <Themes
              closePopup={() => {
                setThemePopup(!themePopup);
              }}
            />
          }
          closePopup={() => setThemePopup(!themePopup)}
          style={
            "md:w-[600px] xs:w-[85%] max-h-[75vh] min-h-[70vh] overflow-y-scroll"
          }
          pStyle={"items-center justify-center"}
        />
      )}
      {notifPopup && (
        <Popup
          children={
            <Notifications
              closePopup={() => {
                setNotifPopup(!notifPopup);
              }}
            />
          }
          closePopup={() => setNotifPopup(!notifPopup)}
          style={
            "md:w-[400px] xs:w-[55%] min-h-[100vh] transition duration-900 ease-in-out"
          }
          pStyle={"justify-end items-end"}
        />
      )}
    </>
  );
};

export default Nav;
