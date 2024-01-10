
import React from "react";
import Chart from "./Chart";
import ResItem from "./ResItem";
import Ad from "./Ad";
import { resIcons } from "../../lib/icons";
import { useTestCtx } from "../../context/TestContext";
import Link from "next/link";

const Result = () => {
  const {
    acc,
    wpm,
    typo,
    lang,
    restartTest,
    numWords,
    testTime,

  } = useTestCtx();
  const accuracy = isNaN(acc) || acc === -Infinity || acc < 0 ? 0 : acc;
  const wpmRes = isNaN(wpm) || wpm === -Infinity || wpm < 0 ? 0 : wpm;

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="w-full flex sm:flex-row xs:flex-col font-mono ">
        <div className=" flex sm:flex-col xs:gap-5 sm:gap-0 items-center lg:mx-20 mx:12">
          <div className="flex flex-col xs:justify-center w-full">
            <p className="text-softText md:text-4xl xs:text-3xl ">wpm</p>
            <p className="text-5xl md:text-6xl text-scoreColor whitespace-nowrap	">
              {wpmRes}
            </p>
          </div>
          <div className="flex flex-col xs:justify-center w-full">
            <p className="text-softText md:text-4xl xs:text-3xl ">acc</p>
            <p className="text-5xl md:text-6xl text-scoreColor whitespace-nowrap	">
              {accuracy}%
            </p>
          </div>
        </div>

        <Chart />
      </div>
      <div className="flex items-center">
        <div className="flex flex-col items-start font-mono whitespace-nowrap">
          <p className="text-softText  mt-4">test type</p>
          <p className="text-md font-bold text-scoreColor">{lang}</p>
          <p className="text-md font-bold text-scoreColor">time {testTime}</p>
          <p className="text-md font-bold text-scoreColor">{numWords} words</p>
        </div>
        <div className="flex w-full justify-between flex-wrap font-mono ms-20 items-end gap-4 ">
          <ResItem
            text1={"other"}
            text2={`${
              acc < 50 ? "Invalid" : acc > 50 && acc < 80 ? "Good" : "Very Good"
            } (accuracy ${accuracy}%)`}
            fSize={"text-xl"}
          />
          <ResItem text1={"typo"} text2={typo} fSize={"text-3xl"} />
          <ResItem text1={"characters"} text2={"0/12/1/0"} fSize={"text-3xl"} />
          <ResItem text1={"consistency"} text2={"2%"} fSize={"text-3xl"} />
          <ResItem text1={"time"} text2={`${testTime}s`} fSize={"text-3xl"} />
        </div>
      </div>
      <div className="w-full flex md:gap-[100px] text-softText  text-xl xs:justify-between md:justify-center mt-5">
        {resIcons.map((i, index) => (
          <div
            key={index}
            className="cursor-pointer hover:text-lightText"
            onClick={index === 1 || index === 0 ? restartTest : () => {}}
          >
            {i}
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center text-xl items-center text-softText gap-2 mt-8 font-mono">
        <Link href={"/test/profile"}>
          <p className="underline">Sign in</p>{" "}
        </Link>
        <p>to save your result</p>
      </div>
      <div className="flex w-full justify-center mt-8">
        <Ad text={"Ad"} style={"w-[50%] h-[50px]"} />
      </div>
    </div>
  );
};

export default React.memo(Result);
