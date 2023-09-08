import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";

const GptsearchBar = () => {
  const langKey = useSelector((store) => store.appconfig.lang);
  const searchText = useRef(null);
  //search movie in TMDB
  const searchMovieTMDB = async (moviename) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        moviename +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  //gpt search function
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //Make an API call to GPT API and get movie results
    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query" +
    //   searchText.current.value +
    //   ". only give me names of 5 movies,comma separated leke the example result given ahead.Example Result:Gadar,sholey,Don,golmaal,koi mill gaya";
    // const getResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // console.log(getResults.choices);
    const getMovies = [
      "Andaaz apna apna",
      "hera-pheri",
      "golmala",
      "Padosan",
      "chupke chupke",
    ];

    //For each movie i will search TMDB API call
    const promiseArray = getMovies.map((movie) => searchMovieTMDB(movie));
    //[Promise,Promise,Promise,Promise,Promise]===>to resolve this

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
  };
  return (
    <div className="pt-[10%] ">
      <form
        className="w-1/2 mx-auto bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearcgPlaceholder}
        />
        <button
          className="py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptsearchBar;
