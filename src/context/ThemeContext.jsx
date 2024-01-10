"use client";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createContext } from "react";
const ThemeCtx = createContext();
const ThemeProvider = ({ children }) => {
  const [bgc, setBgc] = useState("");
  const [bgc2, setBgc2] = useState("");
  const [scoreColor, setscoreColor] = useState("");
  const [lightText, setLightText] = useState("");
  const [softText, setSoftText] = useState("");
  const [themePopup, setThemePopup] = useState(false);
  const [theme, setTheme] = useState("red");
  const [themeName, setThemeName] = useState("");
  const data = useMemo(() => {
    return [
      {
        theme: "dark",
        colors: ["#323437", "#2C2E31", "#E2B714", "#D1D0C5", "#646669"],
      },
      {
        theme: "midnight",
        colors: ["#1E1E32", "#181829", "#7851C8", "#A3A3CC", "#595995"],
      },
      {
        theme: "vscode",
        colors: ["#1e1e1e", "#191919", "#007acc", "#d4d4d4", "#4d4d4d"],
      },
      {
        theme: "mint",
        colors: ["#05385b", "#07324e", "#5cdb95", "#edf5e1", "#20688a"],
      },
      {
        theme: "rgb",
        colors: ["#111111", "#2C2E31", "#E7EEEE", "#E7EEEE", "#646669"],
      },
      {
        theme: "red dragon",
        colors: ["#1A0B0C", "#0E0506", "#FF3A32", "#4A4D4E", "#D39926"],
      },
      {
        theme: "watermelon",
        colors: ["#1f4437", "#244d3f", "#d6686f", "#cdc6bc", "#3e7a65"],
      },
      {
        theme: "night runner",
        colors: ["#212121", "#1a1a1a", "#feff04", "#e8e8e8", "#5c4a9c"],
      },
      {
        theme: "blue dolphin",
        colors: ["#003950", "#014961", "#ffcefb", "#82eaff", "#00e4ff"],
      },
      {
        theme: "breeze",
        colors: ["#e8d5c4", "#f6e6da", "#7d67a9", "#1b4c5e", "#3a98b9"],
      },
      {
        theme: "cafe",
        colors: ["#ceb18d", "#bba180", "#14120f", "#14120f", "#d4d2d1"],
      },
    ];
  }, []);

  const handleChangeTheme = useCallback(
    (selectedTheme) => {
      const selectedThemeData = data.find(
        (item) => item.theme === selectedTheme
      );
      if (selectedThemeData) {
        const colorsArray = selectedThemeData.colors;
        if (colorsArray && colorsArray.length >= 5) {
          const [color1, color2, color3, color4, color5] = colorsArray;
          setBgc(color1);
          setBgc2(color2);
          setscoreColor(color3);
          setLightText(color4);
          setSoftText(color5);
          setTheme(selectedTheme);
          localStorage.setItem("theme", selectedTheme);
        }
      }
      setThemeName(selectedTheme);
    },
    [theme, themePopup]
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      handleChangeTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--bg-color", bgc);
    document.documentElement.style.setProperty("--bg-color2", bgc2);
    document.documentElement.style.setProperty("--score-color", scoreColor);
    document.documentElement.style.setProperty("--light-text", lightText);
    document.documentElement.style.setProperty("--soft-text", softText);
  }, [bgc, bgc2, scoreColor, lightText, softText]);
  const values =  {
      themePopup,
      theme,
      data,
      bgc,
      bgc2,
      themeName,
      scoreColor,
      lightText,
      softText,
      handleChangeTheme,
      setTheme,
      setThemePopup,
    };
  
  return <ThemeCtx.Provider value={values}>{children}</ThemeCtx.Provider>;
};

export default ThemeProvider;
export const useThemeCtx = () => {
  return useContext(ThemeCtx);
};
