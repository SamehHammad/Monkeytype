import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const Themes = ({ closePopup, setTheme }) => {
  const [searchText, setSearchText] = useState("");
  const [searchLang, setSearchLang] = useState([]);
  const [data, setData] = useState([
    { theme: "midnight", colors: ["#1F1C70", "#456AE1", "#4582B4"] },
    { theme: "mocha", colors: ["#8B4513", "#D2B48C", "#A0522D"] },
    { theme: "forest", colors: ["#228B22", "#8F9779", "#013220"] },
    { theme: "dark", colors: ["#323437", "#D1D0C5", "#646669"] },
    { theme: "sunrise", colors: ["#FFD700", "#FFA500", "#FF6347"] },
    { theme: "lavender", colors: ["#E6E6FA", "#9370DB", "#8A2BE2"] },
    { theme: "fire", colors: ["#FF4500", "#FFA07A", "#CD5C5C"] },
    { theme: "rose", colors: ["#FF007F", "#FF69B4", "#FFC0CB"] },
    { theme: "ocean", colors: ["#0077B6", "#00B4D8", "#90E0EF"] },
    { theme: "light", colors: ["#FFFFFF", "#323437", "red"] },
    { theme: "twilight", colors: ["#554E5E", "#8575A7", "#6A5ACD"] },
    { theme: "dusk", colors: ["#757575", "#999999", "#BFBFBF"] },
    { theme: "coral", colors: ["#FF7F50", "#FF6347", "#FF4500"] },
    { theme: "sky", colors: ["#87CEEB", "#4682B4", "#1E90FF"] },
    { theme: "earth", colors: ["#645452", "#645452", "#645452"] },
  ]);

  useEffect(() => {
    const searchedLang = data.filter((d) =>
      d.theme.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchLang(searchedLang);
  }, [searchText, data]);

  return (
    <div className="w-full flex flex-col z-99">
      <div className="bg-bgColor xs:w-[80%] md:w-[60%] lg:w-[48%] xl:w-[40%] flex items-center justify-start fixed overflow-hidden ">
        <IoSearch className="text-2xl ms-3 text-softText" />
        <input
          type="text"
          className="bg-transparent w-[99%] p-5 placeholder-softText outline-none text-md font-bold "
          placeholder="Type to search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>
      <div className="mt-16 ">
        {!searchText && data
          ? data.map((t) => (
              <div
                key={t.theme}
                className="flex hover:text-[#302d2d] text-softText ps-8 font-bold py-1 cursor-pointer hover:bg-lightText mt-1 justify-between px-12"
                onClick={() => {
                  setTheme(t);
                  closePopup();
                }}
              >
                <span>{t.theme}</span>
                <div
                  className={`flex w-[70px] h-[25px] rounded-xl justify-between items-center p-1 gap-1`}
                  style={{ backgroundColor: "lightblue" }}
                >
                  {t.colors.map((color, index) => (
                    <div
                      key={index}
                      className={` w-4 h-4 rounded-full shadow-xl border-teal-950`}
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
            ))
          : searchText && searchLang.length > 0
          ? searchLang.map((t) => (
              <div
                key={t.theme}
                className="flex hover:text-[#302d2d] ps-8 font-bold py-1 hover:bg-lightText mt-1 "
                onClick={() => {
                  setTheme(t);
                  closePopup();
                }}
              >
                <span>{t.theme}</span>
              </div>
            ))
          : searchText && searchLang.length === 0
          ? "Sorry, this theme is not available..."
          : ""}
      </div>
    </div>
  );
};

export default Themes;
