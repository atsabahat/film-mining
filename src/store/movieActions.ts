import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../service/Api";
import { IListPage, IMedia, ISearch } from "../interfaces/movie";

export const fetchPopularList = createAsyncThunk(
  "movies/fetchPopularMovies",
  async () => {
    const response = await Api.get("movie/popular");
    return response.data;
  }
);

export const searchMovies = createAsyncThunk(
  "movies/searchMovies",
  async (params: ISearch) => {
    const { query, page } = params;
    const response = await Api.get(`search/movie`, {
      params: {
        query,
        page,
      },
    });
    return response.data;
  }
);

export const addOrRemoveCard = createAsyncThunk(
  "movies/addOrRemoveCard",
  async (media: IMedia) => {
    const { media_type, media_id, toggle, listName } = media;
    const response = await Api.post(
      `account/${process.env.REACT_APP_ACCOUNT_ID}/${listName}`,
      {
        media_type,
        media_id,
        [listName]: toggle,
      },
      {
        params: {
          session_id: process.env.REACT_APP_SESSION_ID,
        },
      }
    );
    return response.data;
  }
);

export const fetchMovieList = createAsyncThunk(
  "movies/fetchMovieList",
  async (listPage: IListPage) => {
    const { listName, page } = listPage;
    const response = await Api.get(
      `account/${process.env.REACT_APP_ACCOUNT_ID}/${listName}/movies`,
      {
        params: {
          session_id: process.env.REACT_APP_SESSION_ID,
          page,
        },
      }
    );
    return response.data;
  }
);

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (id: string) => {
    const response = await Api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos,images",
        include_image_language: "en,null",
      },
    });
    return response.data;
  }
);

export const fetchMovieCredits = createAsyncThunk(
  "movies/fetchMovieCredits",
  async (id: string) => {
    const response = await Api.get(`movie/${id}/credits`);
    return response.data;
  }
);
