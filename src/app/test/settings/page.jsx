"use client";
import React, { useState } from "react";
import SetBtn from "../../../components/settings/SetBtn";
import SetContent from "../../../components/settings/SetContent";
import Button from "../../../components/reusable/Button";
import { FaRegStar } from "react-icons/fa6";
import { IoMdRefresh } from "react-icons/io";
import { FiRefreshCcw } from "react-icons/fi";
import { FaEyeSlash } from "react-icons/fa";
import { GiHistogram } from "react-icons/gi";
import toast, { Toaster } from "react-hot-toast";

const Settings = () => {
  const [diff, setDiff] = useState("normal");
  const [qRes, setqRes] = useState("off");
  const [repeat, setRepeat] = useState("repeat");
  const [command, setCommand] = useState("auto");
  const [blind, setBlind] = useState("no");

  return (
    <div className="min-h-screen text-softText font-mono">
      <Toaster />
      <div className="flex md:flex-row xs:flex-col items-center gap-5 font-mono">
        <SetContent
          cont={
            "Normal is the classic type test experience. Expert fails the test if you submit (press space) an incorrect word. Master fails if you press a single incorrect key (meaning you have to achieve 100% accuracy)."
          }
          header={"test difficulty"}
          icon={<FaRegStar />}
        />
        <div className="w-full flex justify-between md:mt-12 gap-2">
          <SetBtn ev={"normal"} setActiveTab={setDiff} activeTab={diff} />
          <SetBtn ev={"expert"} setActiveTab={setDiff} activeTab={diff} />{" "}
          <SetBtn ev={"master"} setActiveTab={setDiff} activeTab={diff} />
        </div>
      </div>{" "}
      <div className="flex md:flex-row xs:flex-col items-center gap-5 font-mono">
        <SetContent
          cont={
            "Presstaborescto quickly restart the test, or to quickly jump to the test page. Both options disable tab navigation on most parts of the website. Using the esc option will move opening the commandline to thetabkey."
          }
          header={"quick restart"}
          icon={<IoMdRefresh />}
        />
        <div className="w-full flex justify-between gap-2 md:mt-12">
          <SetBtn ev={"off"} setActiveTab={setqRes} activeTab={qRes} />
          <SetBtn ev={"tab"} setActiveTab={setqRes} activeTab={qRes} />{" "}
          <SetBtn ev={"esc"} setActiveTab={setqRes} activeTab={qRes} />
        </div>
      </div>
      <div className="flex md:flex-row xs:flex-col items-center gap-5 font-mono">
        <SetContent
          cont={
            "This setting changes the restarting behavior when typing in quote mode. Changing it to 'typing' will repeat the quote if you restart while typing."
          }
          header={"repeat quotes"}
          icon={<FiRefreshCcw />}
        />
        <div className="w-full flex justify-between gap-2 md:mt-12">
          <SetBtn ev={"don't"} setActiveTab={setRepeat} activeTab={repeat} />{" "}
          <SetBtn ev={"repeat"} setActiveTab={setRepeat} activeTab={repeat} />
        </div>
      </div>
      <div className="flex md:flex-row xs:flex-col items-center gap-5 font-mono">
        <SetContent
          cont={
            "No errors or incorrect words are highlighted. Helps you to focus on raw speed. If enabled, quick end is recommended."
          }
          header={"blind mode"}
          icon={<FaEyeSlash />}
        />
        <div className="w-full flex justify-between gap-2 md:mt-12">
          <SetBtn ev={"no"} setActiveTab={setBlind} activeTab={blind} />
          <SetBtn ev={" "} setActiveTab={setBlind} activeTab={blind} />
        </div>
      </div>
      <div className="flex md:flex-row xs:flex-col items-center gap-5 font-mono">
        <SetContent
          cont={
            "When enabled, it will show the command line with all commands in a single list instead of submenu arrangements. Selecting 'manual' will expose all commands only after typing."
          }
          header={"single list command line"}
          icon={<GiHistogram />}
        />
        <div className="w-full flex justify-between gap-2 md:mt-12">
          <SetBtn ev={"manual"} setActiveTab={setCommand} activeTab={command} />
          <SetBtn ev={"auto"} setActiveTab={setCommand} activeTab={command} />
        </div>
      </div>
      <div className="flex w-full justify-center mt-12 ">
        <Button
          children={"Save"}
          costumStyle={"w-[50%] focus:bg-scoreColor focus:text-bg2Color"}
          handleClick={() => toast.success("All Changes Saved Successfully")}
        />
      </div>
    </div>
  );
};

export default React.memo(Settings);
