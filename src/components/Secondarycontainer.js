import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export const Secondarycontainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className=" bg-black ">
        <div className="-mt-52  pl-12 relative z-20">

        <MovieList title={"Now Playing"} movies={movies?.nowPlayingmovies} />
        <MovieList title={"Popular"} movies={movies?.popularmovies} />
        <MovieList title={"Popular"} movies={movies?.nowPlayingmovies} />
        <MovieList title={"Comedy"} movies={movies?.nowPlayingmovies} />
        </div>
        {/**
         * MovieList-Popular
         *  -MovieCards * n
         * MovieList-NowPlaying
         * MovieList-Trending
         * MovieList-Comedy
         *
         */}
      </div>
    )
  );
};
