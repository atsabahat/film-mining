import React from "react";
import { TMDB_LINK } from "../../constants/Links";
import { W300 } from "../../constants/ImageSize";
import { FAVORITE, WATCH_LIST } from "../../constants/ListName";
import { AddAction } from "./AddAction";
import { PosterBoxWrapper, PosterImage } from "./styles";
import heartIcon from "../../assets/icons/heart-outline.svg";
import bookmarkIcon from "../../assets/icons/bookmark-outline.svg";
import defaultImage from "../../assets/images/default-image.jpg";

export interface PosterBoxProps {
  poster: string;
}

export const PosterBox: React.FC<PosterBoxProps> = (props) => (
  <PosterBoxWrapper>
    <PosterImage
      src={props.poster ? `${TMDB_LINK}${W300}${props.poster}` : defaultImage}
      alt="Film Mining"
    />

    <AddAction type={WATCH_LIST} icon={bookmarkIcon} />
    <AddAction type={FAVORITE} icon={heartIcon} />
  </PosterBoxWrapper>
);
