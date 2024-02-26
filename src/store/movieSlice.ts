import {
  createSlice,
  PayloadAction,
  isRejected,
  isAnyOf,
} from "@reduxjs/toolkit";
import {
  fetchPopularList,
  searchMovies,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieList,
  addOrRemoveCard,
} from "./movieActions";
import {
  initialState,
  initialMovieDetails,
  initialMovieCredits,
} from "./initialValues";
import { IMovieList, IMovieDetails, IMovieCredits } from "../interfaces/movie";

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchMovieDetails.fulfilled,
      (state, action: PayloadAction<IMovieDetails>) => {
        state.loading = false;
        state.movieDetails = action.payload;
        state.error = "";
      }
    );
    builder.addCase(
      fetchMovieCredits.fulfilled,
      (state, action: PayloadAction<IMovieCredits>) => {
        state.movieCredits = action.payload;
        state.error = "";
      }
    );
    builder.addCase(addOrRemoveCard.fulfilled, (state) => {
      state.error = "";
    });
    builder.addMatcher(
      isAnyOf(
        fetchPopularList.fulfilled,
        searchMovies.fulfilled,
        fetchMovieList.fulfilled
      ),
      (state, action: PayloadAction<IMovieList>) => {
        state.loading = false;
        state.movieList = action.payload;
        state.movieDetails = initialMovieDetails;
        state.movieCredits = initialMovieCredits;
        state.error = "";
      }
    );
    builder.addMatcher(
      isAnyOf(
        fetchPopularList.pending,
        searchMovies.pending,
        fetchMovieList.pending,
        fetchMovieDetails.pending
      ),
      (state) => {
        state.loading = true;
        state.error = "";
      }
    );
    builder.addMatcher(isRejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
