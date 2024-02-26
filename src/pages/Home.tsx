import React, { useEffect, useState, useCallback, Fragment, memo } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { fetchPopularList } from "../store/movieActions";
import { MainBanner } from "../components/home/MainBanner";
import { ListItems } from "../components/list/ListItems";
import { RefreshData } from "../components/RefreshData";
import { Title } from "../components/home/Title";
import { EmptyList } from "../components/list/EmptyList";
import { Loading } from "../components/Loading";
import { setPageTitle } from "../components/helpers/setPageTitle";
import { wrapperStyle } from "../assets/styles/defaultStyles";

export const HomePage: React.FC = memo(() => {
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const movie = useAppSelector((state) => state.movie);
  const dispatch = useAppDispatch();

  const fetchData = useCallback(() => {
    dispatch(fetchPopularList());
  }, [dispatch]);

  useEffect(() => {
    setPageTitle("Home");
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const randomImage = () => {
      if (movie.movieList?.results.length > 0) {
        const random = Math.floor(
          Math.random() * movie.movieList?.results.length
        );
        if (movie.movieList?.results[random].backdrop_path)
          setBackgroundImage(movie.movieList?.results[random].backdrop_path);
        else randomImage();
      }
    };

    randomImage();
  }, [movie.movieList.results]);

  return (
    <Fragment>
      {backgroundImage && <MainBanner backgroundImage={backgroundImage} />}
      {movie.error ? (
        <RefreshData resetFetch={fetchData} error={movie.error} />
      ) : !movie.movieList.results.length && !movie.loading ? (
        <EmptyList />
      ) : (
        <PopularSection>
          <Title />
          {movie.loading ? (
            <Loading />
          ) : (
            <ListItems results={movie.movieList.results} />
          )}
        </PopularSection>
      )}
    </Fragment>
  );
});

const PopularSection = styled.section`
  ${wrapperStyle}
  position: relative;
`;
