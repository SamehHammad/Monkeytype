import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useThemeCtx } from "../../context/ThemeContext";
const Themes = ({ closePopup }) => {
  const { data, theme, setTheme, handleChangeTheme } = useThemeCtx();
  const [searchText, setSearchText] = useState("");
  const [searchLang, setSearchLang] = useState([]);

  useEffect(() => {
    const searchedLang = data.filter((d) =>
      d.theme.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchLang(searchedLang);
  }, [searchText, data]);

  const handleThemeClick = (selectedTheme) => {
    if (selectedTheme) {
      handleChangeTheme(selectedTheme);
    }
  };
  return (
    <div className="w-full flex flex-col">
      <div className="xs:w-[80%] md:w-[60%] lg:w-[48%] xl:w-[40%] flex items-center justify-start fixed overflow-hidden">
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
      <div className="mt-16">
        {!searchText && data
          ? data.map((t) => (
              <div
                key={t.theme}
                className={`flex hover:text-[#302d2d] text-softText ps-8 font-bold py-1 cursor-pointer hover:bg-lightText mt-1 justify-between px-12`}
                onClick={() => {
                  handleThemeClick(t.theme);
                  closePopup();
                }}
                onMouseOver={() => handleThemeClick(t.theme)}
              >
                <span>{t.theme}</span>
                <div
                  className="flex w-[70px] h-[25px] rounded-xl justify-between items-center border border-slate-500 p-1 gap-1"
                  style={{ backgroundColor: t.colors[0] }}
                >
                  {t.colors.slice(1, 4).map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full shadow-xl border border-lightText"
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
                className="flex hover:text-[#302d2d] text-softText ps-8 font-bold py-1 cursor-pointer hover:bg-lightText mt-1 justify-between px-12"
                onClick={() => {
                  handleThemeClick(t.theme);
                  closePopup();
                }}
                onMouseOver={() => handleThemeClick(t.theme)}
              >
                <span>{t.theme}</span>
                <div
                  className="flex w-[70px] h-[25px] rounded-xl justify-between items-center border border-slate-500 p-1 gap-1 bg-[lightblue]"
                  style={{ backgroundColor: t.colors[0] }}
                >
                  {t.colors.slice(1, 4).map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full shadow-xl border border-lightText"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
            ))
          : searchText && searchLang.length === 0
          ? "Sorry, this theme is not available..."
          : ""}
      </div>
    </div>
  );
};

export default React.memo(Themes);
