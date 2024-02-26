import React from "react";
import { VoteStar, StarIcon, VoteNumbers } from "./styles";
import { TextElement } from "../TextElement";
import starIcon from "../../assets/icons/star.svg";

export interface VoteProps {
  voteAverage: number;
  voteCount: number;
}

export const Vote: React.FC<VoteProps> = (props) => (
  <VoteStar>
    <StarIcon src={starIcon} alt="Film Mining" />
    <VoteNumbers>
      <TextElement tag="span">
        {props.voteAverage.toString().substring(0, 3)}
      </TextElement>
      <TextElement tag="span">
        {`${props.voteCount} Vote${props.voteCount > 1 ? "s" : ""}`}
      </TextElement>
    </VoteNumbers>
  </VoteStar>
);
