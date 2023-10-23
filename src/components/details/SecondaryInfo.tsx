import React, { memo } from "react";
import { IMovieDetails } from "../../interfaces/movie";
import { TextElement } from "../TextElement";
import { SecondaryInfoWrwpper } from "./styles";

export interface SecondaryInfoProps {
  movieDetails: IMovieDetails;
}

export const SecondaryInfo: React.FC<SecondaryInfoProps> = memo((props) => {
  const timeConvertor = (time: number) => {
    const HOURS = Math.trunc(time / 60);
    const MINUTES = time % 60;
    return `${HOURS}h` + (MINUTES !== 0 ? ` ${MINUTES}min` : "");
  };

  return (
    <SecondaryInfoWrwpper>
      <TextElement tag="span">
        {props.movieDetails.release_date.substring(0, 4)}
      </TextElement>
      <TextElement tag="span">
        {timeConvertor(props.movieDetails.runtime)}
      </TextElement>
      <TextElement tag="span">
        {props.movieDetails.original_language}
      </TextElement>
    </SecondaryInfoWrwpper>
  );
});
