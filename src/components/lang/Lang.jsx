"use client";
import React, { useEffect } from "react";
import Popup from "../reusable/Popup";
import LangSearch from "../lang/LangSearch";
import { MdOutlineLanguage } from "react-icons/md";
import { useTestCtx } from "../../context/TestContext";
import { useAppCtx } from "../../context/AppContext";
import { languages } from "../../lib/lang";

const Lang = () => {
  const { lang, restartTest, isRunning } = useTestCtx();
  const { showPopup, closePopup } = useAppCtx();

  useEffect(() => {
    const focus = restartTest();
    return () => {
      focus;
    };
  }, [lang]);
  return (
    <div
      className="flex items-center justify-center m-2"
      style={{ visibility: isRunning ? "hidden" : "visible" }}
    >
      <div
        className="flex items-center gap-1 text-md text-softText  hover:text-lightText cursor-pointer"
        onClick={closePopup}
      >
        <MdOutlineLanguage />
        <p>{lang}</p>
        {showPopup && (
          <Popup
            closePopup={closePopup}
            children={<LangSearch data={languages} />}
            style={
              "md:w-[600px] xs:w-[85%] max-h-[75vh] min-h-[70vh] overflow-y-scroll"
            }
            pStyle={"items-center justify-center"}
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(Lang);
