import React, { useState, memo } from "react";
import { IVideo } from "../../interfaces/movie";
import { YOUTUBE, YOUTUBE_LINK, VIMEO_LINK } from "../../constants/Links";
import {
  MovieVideos,
  MediaHeader,
  MediaTitle,
  ShowAll,
  VideoBox,
  VideoFrame,
} from "./styles";
import { TextElement } from "../TextElement";

export interface VideoResultsProps {
  videoResults: IVideo[];
}

export const Videos: React.FC<VideoResultsProps> = memo((props) => {
  const NUMBER_OF_VIDEOS = 3;
  const [numberOfVideos, setNumberOfVideos] =
    useState<number>(NUMBER_OF_VIDEOS);

  const showAllVideos = () => {
    if (numberOfVideos > NUMBER_OF_VIDEOS) {
      setNumberOfVideos(NUMBER_OF_VIDEOS);
    } else {
      setNumberOfVideos(props.videoResults.length);
    }
  };

  return (
    <MovieVideos>
      <MediaHeader>
        <MediaTitle>Trailers & Clips</MediaTitle>
        <ShowAll onClick={showAllVideos}>
          <TextElement tag="span">{`${
            props.videoResults.length <= NUMBER_OF_VIDEOS
              ? ""
              : props.videoResults.length > numberOfVideos
              ? `Show all ( ${props.videoResults.length} )`
              : "Show less"
          }`}</TextElement>
        </ShowAll>
      </MediaHeader>
      {props.videoResults?.slice(0, numberOfVideos).map((item) => (
        <VideoBox key={item.key}>
          <VideoFrame
            allow="fullscreen;"
            // width="300"
            // height="168"
            src={`${item.site === YOUTUBE ? YOUTUBE_LINK : VIMEO_LINK}${
              item.key
            }`}
          ></VideoFrame>
          <TextElement tag="span">{item.name}</TextElement>
        </VideoBox>
      ))}
    </MovieVideos>
  );
});
