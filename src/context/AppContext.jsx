"use client";
import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  createContext,
} from "react";
const MyContext = createContext();
const SplashPovider = ({ children }) => {
  const [splash, setSplash] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [crownPopup, setCrownPopup] = useState(false);
  const [notifPopup, setNotifPopup] = useState(false);

  const closePopup = useCallback(() => {
    setShowPopup(!showPopup);
  }, [showPopup]);
  useEffect(() => {
    setSplash(false);
  }, []);
  return (
    <MyContext.Provider
      value={{
        splash,
        showPopup,
        crownPopup,
        notifPopup,
        setNotifPopup,
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

export default React.memo(SplashPovider);
export const useAppCtx = () => {
  return useContext(MyContext);
};
