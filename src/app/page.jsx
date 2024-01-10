"use client";
import React, { useEffect } from "react";
const Tools = React.memo(React.lazy(() => import("../components/toolbar/Tools")));
const Lang = React.memo(React.lazy(() => import("../components/lang/Lang")));
const TestText = React.memo(React.lazy(() => import("../components/testText/TestText")));
const Loading = React.memo(React.lazy(() => import("../components/reusable/Laoding")));
const Result = React.memo(React.lazy(() => import("../components/result/Result")));
import { useAppCtx } from "../context/AppContext";
import { useTestCtx } from "../context/TestContext";

export default function Home() {

  const { splash } = useAppCtx();
  const { goToResult, setGoToResult, finishTest, handleFocus, setIsRunning } =
    useTestCtx();
  useEffect(() => {
    if (finishTest) {
      setTimeout(() => {
        setGoToResult(true);
        setIsRunning(false);
      }, 10);
    }
  }, [finishTest]);
  if (splash) {
    return <Loading />;
  } else if (goToResult) {
    return <Result />;
  }
  return (
    <main className={`flex flex-col min-w-full items-center p-4 `}>
      <Tools />
      <Lang />

      <TestText onClick={handleFocus} />
    </main>
  );
}
