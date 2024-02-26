import React from "react";
import { Link } from "react-router-dom";
import { IMovieResult } from "../../interfaces/movie";
import {
  CardInfoWrapper,
  CardInfoHolder,
  CardVote,
  StarIcon,
  CardTitle,
  CardDate,
} from "./styles";
import starIcon from "../../assets/icons/star.svg";

export interface CardInfoProps {
  item: IMovieResult;
}

export const CardInfo: React.FC<CardInfoProps> = (props) => {
  const dateConvertor = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };

  return (
    <CardInfoWrapper>
      <CardInfoHolder>
        <CardVote>
          <StarIcon src={starIcon} alt="Film Mining" />
          {props.item.vote_average.toString().substring(0, 3)}
        </CardVote>
        <Link to={`/movie/${props.item.id}`}>
          <CardTitle>{props.item.title}</CardTitle>
        </Link>
        <CardDate>
          {props.item.release_date
            ? dateConvertor(props.item.release_date)
            : "--"}
        </CardDate>
      </CardInfoHolder>
    </CardInfoWrapper>
  );
};
