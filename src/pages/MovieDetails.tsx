import React, { useEffect, Fragment, memo } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { fetchMovieCredits, fetchMovieDetails } from "../store/movieActions";
import { PosterBox } from "../components/details/PosterBox";
import { Photos } from "../components/details/Photos";
import { Videos } from "../components/details/Videos";
import { MainInfo } from "../components/details/MainInfo";
import { Banner } from "../components/details/Banner";
import { MovieCredits } from "../components/details/MovieCredits";
import { RefreshData } from "../components/RefreshData";
import { Loading } from "../components/Loading";
import { EmptyList } from "../components/list/EmptyList";
import { wrapperStyle } from "../assets/styles/defaultStyles";

export const MovieDetails: React.FC = memo(() => {
  const params = useParams();
  const movie = useAppSelector((state) => state.movie);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails(params.movieId || ""));
    dispatch(fetchMovieCredits(params.movieId || ""));
  }, [dispatch, params.movieId]);

  return movie.error ? (
    <RefreshData
      resetFetch={() => window.location.reload()}
      error={movie.error}
    />
  ) : movie.loading ? (
    <Loading />
  ) : !movie.movieDetails.id && !movie.loading ? (
    <EmptyList />
  ) : (
    <Fragment>
      <Banner path={movie.movieDetails.backdrop_path} />

      <MovieDetailsBox>
        <PosterBox poster={movie.movieDetails.poster_path} />
        <MainInfoWrapper>
          <MainInfo movieDetails={movie.movieDetails} />
          <MovieCredits movieCredits={movie.movieCredits} />
        </MainInfoWrapper>
      </MovieDetailsBox>

      {movie.movieDetails.images.backdrops.length > 0 && (
        <Photos
          images={movie.movieDetails?.images.backdrops}
          type="backdrops"
        />
      )}

      {movie.movieDetails.images.posters.length > 0 && (
        <Photos images={movie.movieDetails?.images.posters} type="posters" />
      )}

      {movie.movieDetails?.videos.results.length > 0 && (
        <Videos videoResults={movie.movieDetails?.videos.results} />
      )}
    </Fragment>
  );
});

const MovieDetailsBox = styled.div`
  ${wrapperStyle}
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: -285px;
  z-index: 1;
  position: relative;
  padding: 0 10px;

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    flex-direction: column-reverse;
    margin-top: -100px;
  }
`;
const MainInfoWrapper = styled.article`
  width: 70%;
  line-height: 1.8;
  margin-bottom: 30px;

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;
