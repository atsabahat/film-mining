import React, { useEffect, useRef, Fragment, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { searchMovies } from "../store/movieActions";
import { movieActions } from "../store/movieSlice";
import { ListPageTemplate } from "../components/list/ListPageTemplate";
import { SearchInput } from "../components/SearchInput";
import { RefreshData } from "../components/RefreshData";
import { BackgroundCover } from "../components/list/styles";

export const Search: React.FC = () => {
  const searchInputElement = useRef<HTMLInputElement>(null);
  const movie = useAppSelector((state) => state.movie);
  const dispatch = useAppDispatch();
  const FIRST_PAGE = 1;

  const [searchParams, setSearchParams] = useSearchParams();

  const createSearchApiData = (query: string, page: number) => ({
    query,
    page,
  });

  const changeURLQuery = useCallback(() => {
    const inputValue = searchInputElement.current?.value;
    if (inputValue && searchParams.get("query") !== inputValue)
      setSearchParams({ query: inputValue });
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    const search = () => {
      const searchValue = searchInputElement.current?.value;
      dispatch(movieActions.reset());
      if (searchValue) {
        dispatch(
          searchMovies(createSearchApiData(searchValue, FIRST_PAGE))
        ).then(() => changeURLQuery());
      }
    };
    if (searchInputElement?.current) {
      searchInputElement.current.value = searchParams.get("query") || "";
      search();
    }
  }, [dispatch, changeURLQuery, searchParams]);

  return movie.error ? (
    <RefreshData
      resetFetch={() => window.location.reload()}
      error={movie.error}
    />
  ) : (
    <Fragment>
      <BackgroundCover>
        <SearchInput ref={searchInputElement} search={changeURLQuery} />
      </BackgroundCover>

      <ListPageTemplate
        movieList={movie.movieList}
        loading={movie.loading}
        title={`Search results for “${
          searchInputElement.current?.value || ""
        }”`}
      />
    </Fragment>
  );
};
