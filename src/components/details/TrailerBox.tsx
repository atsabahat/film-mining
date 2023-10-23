import React, { Fragment, useState } from "react";
import { IVideo } from "../../interfaces/movie";
import { VIMEO_LINK, YOUTUBE, YOUTUBE_LINK } from "../../constants/Links";
import {
  Trailer,
  PlayTrailer,
  CloseTrailer,
  TrailerLink,
  TrailerDefaultBg,
  TrailerFrame,
} from "./styles";
import { TextElement } from "../TextElement";

export interface TrailerBoxProps {
  videoResult: IVideo[];
}

export const TrailerBox: React.FC<TrailerBoxProps> = (props) => {
  const [trailerBox, setTrailerBox] = useState<boolean>(false);
  const [trailerSource, setTrailerSource] = useState<string>("");
  const TRAILER_OBJECT = props.videoResult.find(
    ({ type }) => type === "Trailer"
  );

  const showTrailer = () => {
    if (TRAILER_OBJECT?.site === YOUTUBE)
      setTrailerSource(`${YOUTUBE_LINK}${TRAILER_OBJECT.key}`);
    else setTrailerSource(`${VIMEO_LINK}${TRAILER_OBJECT?.key}`);

    setTrailerBox(!trailerBox);
  };

  return (
    <Fragment>
      {TRAILER_OBJECT && (
        <Trailer onClick={showTrailer}>
          {!trailerBox ? (
            <PlayTrailer>Play Trailer</PlayTrailer>
          ) : (
            <CloseTrailer>Close Trailer</CloseTrailer>
          )}
        </Trailer>
      )}

      {trailerBox && (
        <TrailerLink>
          <TrailerDefaultBg>
            <TextElement tag="span">Loading Trailer...</TextElement>
          </TrailerDefaultBg>
          <TrailerFrame
            allow="fullscreen;"
            width="560"
            height="315"
            src={trailerSource}
          ></TrailerFrame>
        </TrailerLink>
      )}
    </Fragment>
  );
};
