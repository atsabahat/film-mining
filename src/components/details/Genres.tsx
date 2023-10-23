import React from "react";
import { IGeners } from "../../interfaces/movie";
import { TextElement } from "../TextElement";
import { ExtraDetails, Label } from "./styles";

export interface MovieGenersProps {
  movieGeners: IGeners[];
}

export const Geners: React.FC<MovieGenersProps> = (props) => (
  <ExtraDetails>
    <Label>Geners:</Label>
    {props.movieGeners.map((item, index) => (
      <TextElement tag="span" key={index}>
        {item.name}
      </TextElement>
    ))}
  </ExtraDetails>
);
