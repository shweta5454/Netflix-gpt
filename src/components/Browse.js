import React, { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowplayingMovies";

import Header from "../components/Header";
import Maincontainer from "./Maincontainer";
import { Secondarycontainer } from "./Secondarycontainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <Maincontainer/>
      <Secondarycontainer/>
      {/*
      MainContainer
        -VideoBackground
        -videoTitle
      SecondaryContainer
        -MovieList * n
          -cards * n
          
      */}
    </div>
  );
};

export default Browse;
