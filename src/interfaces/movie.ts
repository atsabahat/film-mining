export interface IMovieResult {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}
export interface IGeners {
  name: string;
}
export interface IVideo {
  key: string;
  site: string;
  name: string;
  type: string;
}
export interface IVideoResults {
  results: IVideo[];
}
export interface IPhotos {
  file_path: string;
}
export interface IPhotoResults {
  backdrops: IPhotos[];
  posters: IPhotos[];
}
export interface ICast {
  name: string;
  profile_path: string;
  order: number;
}
export interface ICrew {
  name: string;
  profile_path: string;
  job: string;
}
export interface IMovieList {
  page: number;
  results: IMovieResult[];
  total_pages: number;
  total_results: number;
}
export interface IMovieDetails {
  id: number;
  title: string;
  overview: string;
  genres: IGeners[];
  backdrop_path: string;
  poster_path: string;
  original_language: string;
  release_date: string;
  runtime: number;
  images: IPhotoResults;
  videos: IVideoResults;
  vote_average: number;
  vote_count: number;
}
export interface IMovieCredits {
  cast: ICast[];
  crew: ICrew[];
}
export interface IMovieStateType {
  loading: boolean;
  movieList: IMovieList;
  movieDetails: IMovieDetails;
  movieCredits: IMovieCredits;
  error: string;
}
export interface IMedia {
  media_type: string;
  media_id: number;
  toggle: boolean;
  listName: string;
}
export interface ISearch {
  query: string;
  page: number;
}
export interface IListPage {
  listName: string;
  page: number;
}
export interface IAddToListResult {
  status_code: number;
  status_message: string;
  success: boolean;
}
