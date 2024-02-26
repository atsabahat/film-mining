import React from "react";
import { IMovieResult } from "../../interfaces/movie";
import { CardActions } from "./CardActions";
import { CardImage } from "./CardImage";
import { CardInfo } from "./CardInfo";
import { MovieCard } from "./styles";

export interface CardProps {
  item: IMovieResult;
}

export const Card: React.FC<CardProps> = (props) => (
  <MovieCard>
    <CardImage item={props.item} />
    <CardActions item={props.item} />
    <CardInfo item={props.item} />
  </MovieCard>
);
