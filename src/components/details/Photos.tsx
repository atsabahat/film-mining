import React, { useState, memo } from "react";
import { IPhotos } from "../../interfaces/movie";
import { TMDB_LINK } from "../../constants/Links";
import { ORIGINAL, W300 } from "../../constants/ImageSize";
import { TextElement } from "../TextElement";
import {
  MoviePhotos,
  MediaHeader,
  MediaTitle,
  ShowAll,
  ImageWrapper,
  EyeIcon,
  ImageBox,
} from "./styles";
import eyeIcon from "../../assets/icons/eye-outline.svg";

export interface MoviePhotosProps {
  images: IPhotos[];
  type: string;
}

export const Photos: React.FC<MoviePhotosProps> = memo((props) => {
  const NUMBER_OF_IMAGES = 6;
  const [numberOfImages, setNumberOfImages] =
    useState<number>(NUMBER_OF_IMAGES);

  const showAllImages = () => {
    if (numberOfImages > NUMBER_OF_IMAGES) setNumberOfImages(NUMBER_OF_IMAGES);
    else setNumberOfImages(props.images.length);
  };

  return (
    <MoviePhotos type={props.type}>
      <MediaHeader>
        <MediaTitle>{props.type}</MediaTitle>
        {props.images.length > NUMBER_OF_IMAGES && (
          <ShowAll onClick={showAllImages} data-testid="show-all">
            <TextElement tag="span">{`${
              props.images.length > numberOfImages
                ? `Show all ( ${props.images.length} )`
                : "Show less"
            }`}</TextElement>
          </ShowAll>
        )}
      </MediaHeader>
      {props.images.slice(0, numberOfImages).map((item, index) => (
        <ImageWrapper
          href={`${TMDB_LINK}${ORIGINAL}${item.file_path}`}
          target="_blank"
          key={index}
          data-testid="image"
        >
          <EyeIcon src={eyeIcon} alt="Film Mining" />
          <ImageBox
            key={index}
            src={`${TMDB_LINK}${W300}${item.file_path}`}
            alt="Film Mining"
          />
        </ImageWrapper>
      ))}
    </MoviePhotos>
  );
});
