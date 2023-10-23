import {
  IMovieStateType,
  IMovieList,
  IAddToListResult,
} from "../interfaces/movie";
import movieResult from "./fixtures/movieResult.json";
import movieDetails from "./fixtures/movieDetails.json";
import movieCredits from "./fixtures/movieCredits.json";

const movieId = 363676;

const list: IMovieList = {
  page: 1,
  results: movieResult,
  total_pages: 2,
  total_results: 22,
};

const emptylist: IMovieList = {
  page: 1,
  results: [],
  total_pages: 1,
  total_results: 0,
};

const movieState: IMovieStateType = {
  loading: false,
  movieList: list,
  movieDetails: movieDetails,
  movieCredits: movieCredits,
  error: "",
};

const addToListResult: IAddToListResult = {
  status_code: 1,
  status_message: "Success.",
  success: true,
};

export { movieId, list, emptylist, movieState, addToListResult };
