import React from "react";
import GptsearchBar from "./GptsearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img
          className=" h-screen object-cover md:h-auto"
          src={BACKGROUND_IMG}
          alt="background_img"
        />
      </div>
      <div >
        <GptsearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
