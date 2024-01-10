import React from "react";
import { useTestCtx } from "../../context/TestContext";

const HoldScreen = ({children,icon}) => {
  const { handleFocus } = useTestCtx();
  return (
    <div
      className="w-full flex justify-center  absolute top-[-15vh]"
      onClick={handleFocus}
    >
      <div className="flex gap items-center mt-28 text-lightText font-bold xs:text-lg lg:text-xl tracking-wider font-mono cursor-pointer ">
{icon}
        <p> {children}</p>
      </div>
    </div>
  );
};

export default React.memo(HoldScreen);
