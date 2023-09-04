const { createSlice } = require("@reduxjs/toolkit");

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingmovies: null, 
    popularmovies:null,
    trailorVideo:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingmovies = action.payload;
    },
    addPopularMovies:(state,action)=>{
      state.popularmovies=action.payload;
    }
,
    addTrailerVideo:(state,action)=>{
      state.trailorVideo=action.payload;
    }
  },
});
export const {addNowPlayingMovies, addPopularMovies, addTrailerVideo  } = movieSlice.actions;
export default movieSlice.reducer;
