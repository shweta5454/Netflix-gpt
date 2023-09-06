import React, { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowplayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopratedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "../components/Header";
import Maincontainer from "./Maincontainer";
import { Secondarycontainer } from "./Secondarycontainer";
import GptSearch from "../components/GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          {" "}
          <Maincontainer />
          <Secondarycontainer />
        </>
      )}

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
