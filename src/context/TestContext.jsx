"use client";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createContext } from "react";
import { testText } from "../lib/text";
import { RiCharacterRecognitionFill } from "react-icons/ri";
import { IoIosTime } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";
import { TbAlertTriangleOff } from "react-icons/tb";
import { GiStarKey } from "react-icons/gi";
import { useRouter } from "next/navigation";

const TestCtx = createContext();

const TestProvider = ({ children }) => {
  const [userInput, setUserInput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [time, setTime] = useState(0);
  const [typo, setTypo] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [acc, setAcc] = useState(0);
  const [numWords, setNumWords] = useState(20);
  const [showCursor, setShowCursor] = useState(false);
  const [hold, setHold] = useState(false);
  const [typing, setTyping] = useState(false);
  const [timer, setTimer] = useState(
    (typeof window !== "undefined" &&
      window.localStorage &&
      localStorage.getItem("time")) ||
      30
  );
  const [isRunning, setIsRunning] = useState(false);
  const [goToResult, setGoToResult] = useState(false);
  const [lang, setLang] = useState(
    (typeof window !== "undefined" &&
      window.localStorage &&
      localStorage.getItem("lang")) ||
      "English"
  );
  const [supTools, setSubTools] = useState([]);
  const [activeTool, setActiveTool] = useState("time");
  const [activeSubTool, setActiveSubTool] = useState(15);
  const [testTime, settestTime] = useState(0);
  const [selectedTestText, setSelectedTestText] = useState({
    lang: "",
    text: "",
  });
  const router = useRouter();
  const hiddenInputRef = useRef(null);
  const timee = useMemo(() => {
    return [
      {
        id: 1,
        text: 15,
        clicked: () => {
          setActiveSubTool(15);
        },
      },
      {
        id: 2,
        text: 30,
        clicked: () => {
          setActiveSubTool(30);
        },
      },
      {
        id: 3,
        text: 60,
        clicked: () => {
          setActiveSubTool(60);
        },
      },
      {
        id: 4,
        text: 120,
        clicked: () => {
          setActiveSubTool(120);
        },
      },
    ];
  }, []);
  const words = useMemo(() => {
    return [
      {
        id: 1,
        text: 10,
        clicked: () => {
          setActiveSubTool(10);
        },
      },
      {
        id: 2,
        text: 25,
        clicked: () => {
          setActiveSubTool(25);
        },
      },
      {
        id: 3,
        text: 50,
        clicked: () => {
          setActiveSubTool(50);
        },
      },
      {
        id: 4,
        text: 100,
        clicked: () => {
          setActiveSubTool(100);
        },
      },
    ];
  }, []);
  const quote = useMemo(() => {
    return [
      {
        id: 1,
        type: 10,
        text: "all",
        clicked: () => {
          setActiveSubTool(10);
        },
      },
      {
        id: 2,
        type: 15,
        text: "short",
        clicked: () => {
          setActiveSubTool(15);
        },
      },
      {
        id: 3,
        type: 20,
        text: "medium",
        clicked: () => {
          setActiveSubTool(20);
        },
      },
      {
        id: 4,
        type: 25,
        text: "long",
        clicked: () => {
          setActiveSubTool(25);
        },
      },
      {
        id: 5,
        type: 30,
        text: "thicc",
        clicked: () => {
          setActiveSubTool(30);
        },
      },
    ];
  }, []);
  const costum = useMemo(() => {
    return [
      {
        id: 1,
        text: "change",
        clicked: () => {
          setActiveSubTool("change");
        },
      },
    ];
  }, []);
  const tabs = useMemo(() => {
    return [
      {
        id: 0,
        icon: "@",
        text: "punctuation",
        clicked: () => {
          setActiveTool("punctuation");
          setSubTools(null);
        },
      },
      {
        id: 1,
        icon: "#",
        text: "numbers",
        clicked: () => {
          setActiveTool("numbers");
          setSubTools(null);
        },
      },
      {
        id: 2,
        icon: <IoIosTime />,
        text: "time",
        clicked: () => {
          setSubTools(timee);
          setActiveTool("time");
        },
      },
      {
        id: 3,
        icon: <RiCharacterRecognitionFill />,
        text: "words",
        clicked: () => {
          setSubTools(words);
          setActiveTool("words");
        },
      },
      {
        id: 4,
        icon: <FaQuoteLeft />,
        text: "quote",
        clicked: () => {
          setSubTools(quote);
          setActiveTool("quote");
        },
      },
      {
        id: 5,
        icon: <TbAlertTriangleOff />,
        text: "zen",
        clicked: () => {
          setActiveTool("zen");
          setSubTools(null);
        },
      },
      {
        id: 6,
        icon: <GiStarKey />,
        text: "custom",
        clicked: () => {
          setSubTools(costum);
          setActiveTool("custom");
        },
      },
    ];
  }, []);
  const getNWordsFromString = useCallback((inputString, numberOfWords) => {
    const words = inputString.split(/\s+/);
    const selectedWords = words.slice(0, numberOfWords);
    const resultString = selectedWords.join(" ");
    return resultString;
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedLang = localStorage.getItem("lang");
      const storedTime = localStorage.getItem("time");
      const storedActiveTool = localStorage.getItem("activeTool");
      const storedActiveSubTool = localStorage.getItem("activeSubTool");

      if (storedLang) setLang(storedLang);
      if (storedTime) setTime(parseInt(storedTime, 10));
      if (storedActiveTool) setActiveTool(storedActiveTool);
      if (storedActiveSubTool)
        setActiveSubTool(parseInt(storedActiveSubTool, 10));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("lang", lang);
      localStorage.setItem("time", testTime);
      localStorage.setItem("activeTool", activeTool);
      localStorage.setItem("activeSubTool", activeSubTool);
    }
  }, [lang, time, activeTool, activeSubTool]);

  useEffect(() => {
    const languageData = testText.find((item) => item.lang === lang);

    if (languageData) {
      const selectedText = languageData.data?.find(
        (item) => item.type === activeTool && item.text
      );

      if (selectedText) {
        const result = getNWordsFromString(selectedText.text, numWords);
        setSelectedTestText(result);
        reset();
      } else {
        const exText = getNWordsFromString(languageData.text, numWords);
        setSelectedTestText(exText);
      }
    }
  }, [lang, activeTool, numWords]);

  useEffect(() => {
    if (activeTool === "time") {
      setTimer(activeSubTool);
      settestTime(activeSubTool);
    } else if (activeTool === "words" || activeTool === "quote") {
      setNumWords(activeSubTool);
    } else {
      setIsRunning(false);
      setTimer(timer);
    }
  }, [activeSubTool, activeTool]);

  const finishTest = useCallback(
    timer === 0 ||
      (selectedTestText && currentIndex === selectedTestText.length),
    [selectedTestText, currentIndex, timer]
  );

  const reset = useCallback(() => {
    setCurrentIndex(0);
    setCorrectCount(0);
    setUserInput("");
    setTimer(testTime);
    setWpm(0);
    setTypo(0);
    setShowCursor(true);
    setHold(false);
    setGoToResult(false);
  });
  useEffect(() => {
    let interval;

    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timer]);

  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  const stopTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  const calculateWPM = useCallback(() => {
    if (testTime) {
      const wordsPassed = correctCount / 5;
      const wordsPerMinute = (wordsPassed / testTime) * 60;
      setWpm(Math.round(wordsPerMinute));
    }
  }, [finishTest]);
  const calculateAcc = useCallback(() => {
    const acc = Math.round((correctCount * 100) / currentIndex);
    setAcc(acc);
  }, [finishTest]);
  const handleInputChange = useCallback(
    (event) => {
      const input = event.target.value;

      if (
        event.nativeEvent.inputType === "deleteContentBackward" &&
        currentIndex > 0
      ) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        setCorrectCount((prevCount) => prevCount - 1);
        setTypo((prevTypo) => prevTypo - 1);
        setUserInput(input);
      } else {
        setUserInput(input);

        if (currentIndex < selectedTestText.length) {
          const lastTypedChar = input.charAt(input.length - 1);
          if (selectedTestText[currentIndex] === lastTypedChar) {
            setCorrectCount((prevCount) => prevCount + 1);
          } else {
            setTypo((prevTypo) => prevTypo + 1);
          }
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      }
    },
    [currentIndex, selectedTestText]
  );

  const getSpanStyle = useCallback(
    (index) => {
      if (index < currentIndex) {
        return selectedTestText[index] === userInput[index]
          ? "text-lightText"
          : "text-typoColor";
      }
      return "text-softText ";
    },
    [currentIndex, userInput]
  );

  useEffect(() => {
    calculateWPM();
    calculateAcc();
  }, [correctCount, time, currentIndex]);

  const restartTest = useCallback(() => {
    router.push("/");
    setIsRunning(false);
    reset();
    if (hiddenInputRef.current !== null) {
      handleFocus();
    }
  });
  const handleFocus = useCallback(() => {
    setHold(false);
    hiddenInputRef.current.focus();
  }, [currentIndex, userInput]);
  const handleInputFocus = () => {
    setHold(false);
  };

  const handleInputBlur = useCallback(() => {
    setHold(false);
  }, [currentIndex, userInput]);
  useEffect(() => {
    const inputElement = hiddenInputRef.current;

    if (inputElement) {
      const focusHandler = () => {
        handleInputFocus();
      };

      const blurHandler = () => {
        handleInputBlur();
      };

      inputElement.addEventListener("focus", focusHandler);
      inputElement.addEventListener("blur", blurHandler);

      return () => {
        inputElement.removeEventListener("focus", focusHandler);
        inputElement.removeEventListener("blur", blurHandler);
      };
    }
  }, [hiddenInputRef.current]);

  useEffect(() => {
    const inputElement = hiddenInputRef.current;

    if (inputElement && !inputElement.matches(":focus")) {
      setHold(true);
    }
  }, [hiddenInputRef.current]);

  const values = useMemo(() => {
    return {
      userInput,
      hiddenInputRef,
      currentIndex,
      correctCount,
      time,
      timer,
      isRunning,
      wpm,
      showCursor,
      finishTest,
      typo,
      hold,
      acc,
      goToResult,
      typing,
      selectedTestText,
      lang,
      tabs,
      activeTool,
      numWords,
      testTime,
      activeSubTool,
      supTools,
      setActiveTool,
      setActiveSubTool,
      setSubTools,
      setLang,
      setSelectedTestText,
      setGoToResult,
      setTyping,
      handleFocus,
      setAcc,
      calculateAcc,
      setHold,
      setIsRunning,
      setTime,
      setCorrectCount,
      setTimer,
      setShowCursor,
      setCurrentIndex,
      setWpm,
      setTypo,
      setUserInput,
      calculateWPM,
      startTimer,
      stopTimer,
      handleInputChange,
      getSpanStyle,
      restartTest,
    };
  });

  return <TestCtx.Provider value={values}>{children}</TestCtx.Provider>;
};

export default React.memo(TestProvider);
export const useTestCtx = () => useContext(TestCtx);
