import React from "react";
import GptsearchBar from "./GptsearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import {BACKGROUND_IMG} from "../utils/constants"

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BACKGROUND_IMG}
          alt="background_img"
        />
      </div>
      <GptsearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
