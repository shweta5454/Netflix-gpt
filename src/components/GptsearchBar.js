import React from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptsearchBar = () => {
  const langKey = useSelector((store) => store.appconfig.lang);
  // console.log(lang);
  return (
    <div className="pt-[10%] ">
      <form className="w-1/2 mx-auto bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearcgPlaceholder}
        />
        <button className="py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptsearchBar;
