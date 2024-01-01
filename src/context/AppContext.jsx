"use client";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
const MyContext = createContext();
const SplashPovider = ({ children }) => {
  const [splash, setSplash] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [crownPopup, setCrownPopup] = useState(false);
  const [themePopup, setThemePopup] = useState(false);
  const [theme, setTheme] = useState("dark");
  const closePopup = () => {
    setShowPopup(!showPopup);
  };
  useEffect(() => {
    setSplash(false);
  }, []);
  return (
    <MyContext.Provider
      value={{
        splash,
        showPopup,
        crownPopup,
        themePopup,
        theme,
        setTheme,
        setThemePopup,
        setSplash,
        setShowPopup,
        closePopup,
        setCrownPopup,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default SplashPovider;
export const useAppCtx = () => {
  return useContext(MyContext);
};
