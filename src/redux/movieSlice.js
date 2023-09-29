// actions/moviesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    movieReviews: [],
  },
  reducers: {
    getPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    getTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    getUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    getMovieReviews: (state, action) => {
      state.movieReviews = action.payload;
    },
  },
});

export const {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getMovieReviews,
} = moviesSlice.actions;

export default moviesSlice.reducer;
