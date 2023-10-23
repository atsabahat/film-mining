import React, { memo } from "react";
import { IMovieResult } from "../../interfaces/movie";
import { Card } from "../card/Card";
import { MovieResult } from "./styles";

export interface ListItemsProps {
  results: IMovieResult[];
}

export const ListItems: React.FC<ListItemsProps> = memo((props) => (
  <MovieResult>
    {props.results.length > 0 &&
      props.results.map((item) => <Card key={item.id} item={item} />)}
  </MovieResult>
));
