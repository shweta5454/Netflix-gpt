import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDN + posterPath} alt="posterImg" />
    </div>
  );
};

export default MovieCards;
