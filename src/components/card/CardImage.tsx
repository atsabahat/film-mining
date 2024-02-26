import React from "react";
import { Link } from "react-router-dom";
import { IMovieResult } from "../../interfaces/movie";
import { TMDB_LINK } from "../../constants/Links";
import { W200 } from "../../constants/ImageSize";
import { Image, CardImageWrapper } from "./styles";
import defaultImage from "../../assets/images/default-image.jpg";

export interface CardImageProps {
  item: IMovieResult;
}

export const CardImage: React.FC<CardImageProps> = (props) => (
  <Link to={`/movie/${props.item.id}`}>
    <CardImageWrapper>
      <Image
        src={
          props.item.poster_path
            ? `${TMDB_LINK}${W200}${props.item.poster_path}`
            : defaultImage
        }
        alt="Film Mining"
      />
    </CardImageWrapper>
  </Link>
);
