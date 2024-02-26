import React, { useEffect, memo, Fragment } from "react";
import { IMovieDetails } from "../../interfaces/movie";
import { SecondaryInfo } from "./SecondaryInfo";
import { Vote } from "./Vote";
import { Geners } from "./Genres";
import { TrailerBox } from "./TrailerBox";
import { TextElement } from "../TextElement";
import { setPageTitle } from "../helpers/setPageTitle";
import { MovieTitle, AdditionalInfo, Overview } from "./styles";

export interface MainInfoProps {
  movieDetails: IMovieDetails;
}

export const MainInfo: React.FC<MainInfoProps> = memo((props) => {
  useEffect(() => {
    setPageTitle(props.movieDetails.title);
  }, [props.movieDetails.title]);

  return (
    <Fragment>
      <MovieTitle>{props.movieDetails.title}</MovieTitle>

      <SecondaryInfo movieDetails={props.movieDetails}></SecondaryInfo>

      <AdditionalInfo>
        <Vote
          voteAverage={props.movieDetails.vote_average}
          voteCount={props.movieDetails.vote_count}
        />
        <TrailerBox videoResult={props.movieDetails.videos.results} />
      </AdditionalInfo>

      <Overview>
        <TextElement tag="paragraph">{props.movieDetails.overview}</TextElement>
      </Overview>

      {props.movieDetails.genres.length > 0 && (
        <Geners movieGeners={props.movieDetails.genres}></Geners>
      )}
    </Fragment>
  );
});
