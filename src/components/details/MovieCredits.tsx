import React, { Fragment } from "react";
import { IMovieCredits } from "../../interfaces/movie";
import { Crews } from "./Crews";
import { Casts } from "./Casts";

export interface CreditsProps {
  movieCredits: IMovieCredits;
}

export const MovieCredits: React.FC<CreditsProps> = (props) => (
  <Fragment>
    {props.movieCredits.crew.some((crew) => crew.job === "Director") && (
      <Crews movieCrews={props.movieCredits.crew} job="Director"></Crews>
    )}
    {props.movieCredits.crew.some((crew) => crew.job === "Writer") && (
      <Crews movieCrews={props.movieCredits.crew} job="Writer"></Crews>
    )}
    {props.movieCredits.cast.length > 0 && (
      <Casts movieCasts={props.movieCredits.cast}></Casts>
    )}
  </Fragment>
);
