import React from "react";
import { useTestCtx } from "../../context/TestContext";

const Tools = () => {
  const { supTools, tabs, activeTool, activeSubTool, isRunning } = useTestCtx();

  return (
    <div
      className="xs:w-[90%] sm:w-[75%] lg:w-[60%] h-fit rounded bg-bg2Color xs:justify-center md:justify-between flex flex-wrap xs:p-0 md:p-2"
      style={{ visibility: isRunning ? "hidden" : "visible" }}
    >
      {tabs.map((nav) => (
        <button
          key={nav.id}
          className={`flex text-xs xs:m-4 md:m-1 hover:text-lightText cursor-pointer items-center gap-1 transition-all duration-300 ${
            nav.text === activeTool ? "text-scoreColor font-bold" : "text-softText"
          }`}
          onClick={nav.clicked ? nav.clicked : () => {}}
        >
          {nav.icon}
          <p>{nav.text}</p>
        </button>
      ))}
      {activeTool !== null && supTools !== null && (
        <div
          className={`w-[5px] bg-[#323437] h-[17px] xs:mt-4 md:mt-1 transition-all duration-300`}
        ></div>
      )}
      <div className="flex justify-center+6 transition-all duration-300">
        {supTools !== null &&
          supTools.map((nav) => (
            <button
              key={nav.id}
              className={`flex text-xs xs:m-4 md:m-1 hover:text-lightText cursor-pointer items-center gap-1 transition-all duration-300 ${
                nav.text === activeSubTool || nav?.type === activeSubTool
                  ? "text-scoreColor"
                  : "text-softText"
              }`}
              onClick={nav.clicked ? nav.clicked : () => {}}
            >
              {nav.icon}
              <p>{nav.text}</p>
            </button>
          ))}
      </div>
    </div>
  );
};

export default React.memo(Tools);
