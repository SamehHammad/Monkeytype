import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useTestCtx } from "../../context/TestContext";
import { useAppCtx } from "../../context/AppContext";

const LangSearch = ({data}) => {
  const { closePopup } = useAppCtx();
  const { setLang } = useTestCtx();
  const [searchText, setSearchText] = useState("");
  const [searchLang, setSearchLang] = useState([]);
  useEffect(() => {
    const searhedLang = data.filter((l) =>
      l.toLowerCase().includes(searchText)
    );
    setSearchLang(searhedLang);
  }, [searchText]);
  return (
    <div className="w-full flex flex-col">
      <div className="bg-bgColor xs:w-[80%] md:w-[60%] lg:w-[48%] xl:w-[40%] flex items-center justify-start fixed overflow-hidden ">
        <IoSearch className="text-2xl ms-3 text-softText" />
        <input
          type="text"
          className="bg-transparent w-[99%] p-5 placeholder-softText outline-none  text-md font-bold "
          placeholder="Type to  search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>
      <div className="mt-14 ">
        {!searchText && searchLang
          ? data.map((language) => (
              <div
                className="flex hover:text-[#302d2d] text-softText ps-8 font-bold py-1 hover:bg-lightText mt-1 "
                onClick={() => {
                  setLang(language);
                  closePopup();
                }}
              >
                <span className="">{language}</span>
              </div>
            ))
          : searchText && searchLang
          ? searchLang.map((language) => (
              <div
                className="flex hover:text-[#302d2d] ps-8 font-bold py-1 hover:bg-lightText mt-1 "
                onClick={() => {
                  setLang(language);
                  closePopup();
                }}
              >
                <span className="">{language}</span>
              </div>
            ))
          : searchText && !searchLang
          ? "Sorry, this language is not available..."
          : ""}
      </div>
    </div>
  );
};

export default LangSearch;
