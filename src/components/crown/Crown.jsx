import React, { useEffect, useState } from "react";
import TypingTestTable from "./TypingTestTable";
import Laoding from "../reusable/Laoding";
import { users } from "../..//lib/users";
import Lang from "../lang/Lang";
import { useTestCtx } from "../../context/TestContext";

const Crown = () => {
  const [userData] = useState(users);
  const [dataIsHere, setdataIsHere] = useState(false);
  const { lang } = useTestCtx();
  const sortedUserData = [...userData].sort((a, b) => b.wpm - a.wpm);

  const [activeTab, setActiveTab] = useState("all"); 

  useEffect(() => {
    setTimeout(() => {
      setdataIsHere(true);
    }, 1000);
  }, []);
  return (
    <div>
      <div className="flex w-full p-2 md:justify-between justify-center flex-col md:flex-row font-mono">
        <h1 className="text-lightText lg:text-3xl text-2xl flex-3">
          {activeTab === "all" ? "All-Time" : "Daily"}{" "}
          {lang !== "العربيه" ? lang : "Arabic"} Leaderboards
        </h1>
        <div className="grid grid-cols-2 gap-2 mt-3">
          <button
            className={`px-3 py-2 text-xl ${
              activeTab === "all"
                ? "bg-scoreColor text-[#2C2E31]"
                : "bg-[#2C2E31] text-lightText"
            }  md:text-lg text-md hover:bg-lightText hover:text-[#2C2E31] rounded-xl`}
            onClick={() => setActiveTab("all")}
          >
            all-time
          </button>
          <button
            className={`px-3 py-2  text-xl ${
              activeTab === "daily"
                ? "bg-scoreColor text-[#2C2E31]"
                : "bg-[#2C2E31] text-lightText"
            }  md:text-lg text-md hover:bg-lightText hover:text-[#2C2E31] rounded-xl`}
            onClick={() => setActiveTab("daily")}
          >
            daily
          </button>
        </div>
      </div>
      <Lang />
      {dataIsHere ? (
        activeTab === "all" ? (
          <TypingTestTable sortedUserData={sortedUserData} />
        ) : (
          <TypingTestTable sortedUserData={sortedUserData.slice(7, 17)} />
        )
      ) : (
        <Laoding />
      )}
    </div>
  );
};

export default React.memo(Crown);
