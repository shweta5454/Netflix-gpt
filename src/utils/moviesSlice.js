const { createSlice } = require("@reduxjs/toolkit");

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingmovies: null, 
    popularmovies:null,
    trailorVideo:null,
    topratedvideos:null,
    upcomingvideos:null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingmovies = action.payload;
    },
    addPopularMovies:(state,action)=>{
      state.popularmovies=action.payload;
    }
,
addTopratedMovie:(state,action)=>{
  state.topratedvideos=action.payload;
},
addUpcomingMovies:(state,action)=>{
state.upcomingvideos=action.payload
},
    addTrailerVideo:(state,action)=>{
      state.trailorVideo=action.payload;
    }
  },
});
export const {addNowPlayingMovies, addPopularMovies, addTrailerVideo,addTopratedMovie,addUpcomingMovies  } = movieSlice.actions;
export default movieSlice.reducer;
