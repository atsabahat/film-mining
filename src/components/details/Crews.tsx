import React, { memo } from "react";
import { ICrew } from "../../interfaces/movie";
import { TextElement } from "../TextElement";
import { ExtraDetails, Label } from "./styles";

export interface CrewsProps {
  movieCrews: ICrew[];
  job: string;
}

export const Crews: React.FC<CrewsProps> = memo((props) => {
  const filteredCrews = props.movieCrews.filter(
    (crew) => crew.job === props.job
  );
  return (
    <ExtraDetails>
      <Label>
        {props.job}
        {filteredCrews.length > 1 ? "s:" : ":"}
      </Label>
      {filteredCrews.map((item, index) => (
        <TextElement tag="span" key={index}>
          {item.name}
        </TextElement>
      ))}
    </ExtraDetails>
  );
});
