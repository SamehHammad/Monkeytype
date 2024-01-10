"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import { useTestCtx } from "../../context/TestContext";
import { useAppCtx } from "../../context/AppContext";
import { FaArrowPointer } from "react-icons/fa6";
import Image from "next/image";
import { useThemeCtx } from "../../context/ThemeContext";
const HoldScreen = React.memo(React.lazy(() => import("../reusable/HoldScreen")));

const TestText = () => {
  const { showPopup ,crownPopup} = useAppCtx();
  const { themePopup } = useThemeCtx();
  const [capsLockEnabled, setCapsLockEnabled] = useState(false);

  const {
    userInput,
    selectedTestText,
    hiddenInputRef,
    currentIndex,
    timer,
    isRunning,
    showCursor,
    calculateWPM,
    stopTimer,
    handleInputChange,
    getSpanStyle,
    restartTest,
    startTimer,
    finishTest,
    setIsRunning,
    hold,
    lang,
    calculateAcc,
    handleFocus,
  } = useTestCtx();
  const isShiftPressed = useRef(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Shift") {
        isShiftPressed.current = true;
      } else if (event.key === "Tab" && isShiftPressed.current) {
        restartTest();
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === "Shift") {
        isShiftPressed.current = false;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [restartTest]);
  useEffect(() => {
    if (finishTest) {
      stopTimer();
      calculateWPM();
      calculateAcc();
      setIsRunning(false);
    }
  }, [timer, currentIndex]);
  useEffect(() => {
    if (currentIndex > 0) startTimer();
  }, [currentIndex]);
  useEffect(() => {
    const res = restartTest();
    return () => {
      res;
    };
  }, []);
  useEffect(() => {
    const handleKeyDown = (event) => {
      handleFocus();
      const capsLockOn = event.getModifierState("CapsLock");
      setCapsLockEnabled(capsLockOn);
    };

    if (!showPopup && !themePopup && !crownPopup) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="min-w-[80%] min-h-fit m-1 text-center">
      <p
        className="text-3xl font-mono  text-scoreColor text-left m-1"
        style={{ visibility: !isRunning ? "hidden" : "visible" }}
      >
        {timer}
      </p>

      <div className="relative">
        <p
          className={`tracking-wider font-mono text-left text-2xl text-softText relative ${
            hold && capsLockEnabled ? "blur-sm" : ""
          }`}
        >
          {selectedTestText.split("").map((char, index) => (
            <span key={index} className={getSpanStyle(index)}>
              {index === currentIndex &&
                showCursor &&
                (lang === "العربيه" && currentIndex < 1 ? (
                  ""
                ) : (
                  <span
                    className={`cursor-blink text-scoreColor absolute  -ml-2 animate-blink`}
                  >
                    |
                  </span>
                ))}
              {char}
            </span>
          ))}
        </p>
        {hold && (
          <HoldScreen
            children={"Click here or start typing to focus"}
            icon={<FaArrowPointer />}
          />
        )}
        {capsLockEnabled && (
          <HoldScreen
            children={"Caps Lock is ON. Please disable it"}
            icon={
              <Image
                src={"/caps.png"}
                width={100}
                height={50}
                className="block text-white"
              />
            }
          />
        )}

        <div className="mt-4">
          <input
            type="text"
            ref={hiddenInputRef}
            style={{ position: "absolute", top: "-9999px" }}
            value={userInput}
            onChange={handleInputChange}
            readOnly={finishTest || hold || capsLockEnabled}
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-softText cursor-pointer group min-w-full mt-5 relative">
        <IoMdRefresh
          className="text-2xl group-hover:flex hover:text-lightText"
          onClick={restartTest}
        />
        <p className="text-xl absolute top-7 hidden group-hover:flex text-lightText bg-black px-3 py-1 rounded m-5">
          Restart test
        </p>
      </div>
    </div>
  );
};

export default React.memo(TestText);
