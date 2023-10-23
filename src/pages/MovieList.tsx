import React, { useEffect, useCallback, memo, Fragment } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { fetchMovieList } from "../store/movieActions";
import { movieActions } from "../store/movieSlice";
import { FAVORITE, WATCH_LIST, LIST } from "../constants/ListName";
import { ListPageTemplate } from "../components/list/ListPageTemplate";
import { RefreshData } from "../components/RefreshData";
import { SearchArea } from "../components/list/SearchArea";
import { cleanAndLowerCase } from "../components/helpers/cleanAndLowerCase";

export interface ListProps {
  type: string;
}

export const MovieList: React.FC<ListProps> = memo((props) => {
  const movie = useAppSelector((state) => state.movie);
  const dispatch = useAppDispatch();
  const FIRST_PAGE = 1;

  const fetchData = useCallback(() => {
    dispatch(movieActions.reset());
    if (props.type)
      dispatch(
        fetchMovieList({
          listName: props.type,
          page: FIRST_PAGE,
        })
      );
  }, [dispatch, props.type]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return movie.error ? (
    <RefreshData resetFetch={fetchData} error={movie.error} />
  ) : (
    <Fragment>
      <SearchArea />
      <ListPageTemplate
        movieList={movie.movieList}
        loading={movie.loading}
        title={
          props.type === cleanAndLowerCase(WATCH_LIST)
            ? WATCH_LIST
            : props.type === cleanAndLowerCase(FAVORITE)
            ? FAVORITE
            : LIST
        }
      />
    </Fragment>
  );
});
