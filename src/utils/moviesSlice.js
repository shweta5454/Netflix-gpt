const { createSlice } = require("@reduxjs/toolkit");

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingmovies: null, 
    trailorVideo:null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingmovies = action.payload;
    },
    removeMovie: (state, action) => {},
    addTrailerVideo:(state,action)=>{
      state.trailorVideo=action.payload;
    }
  },
});
export const {addNowPlayingMovies, removeMovie, addTrailerVideo  } = movieSlice.actions;
export default movieSlice.reducer;
