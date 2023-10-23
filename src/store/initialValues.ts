import {
  IMovieCredits,
  IMovieDetails,
  IMovieList,
  IMovieStateType,
} from "../interfaces/movie";

const initialMovielist: IMovieList = {
  page: 1,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const initialMovieDetails: IMovieDetails = {
  id: 0,
  title: "",
  overview: "",
  genres: [],
  backdrop_path: "",
  poster_path: "",
  original_language: "",
  release_date: "",
  runtime: 0,
  images: { backdrops: [], posters: [] },
  videos: { results: [] },
  vote_average: 0,
  vote_count: 0,
};

export const initialMovieCredits: IMovieCredits = {
  cast: [],
  crew: [],
};

export const initialState: IMovieStateType = {
  loading: false,
  movieList: initialMovielist,
  movieDetails: initialMovieDetails,
  movieCredits: initialMovieCredits,
  error: "",
};
