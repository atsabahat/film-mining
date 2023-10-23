import React from "react";
import { useLocation } from "react-router-dom";
import { IMovieResult } from "../../interfaces/movie";
import { FAVORITE, WATCH_LIST } from "../../constants/ListName";
import { cleanAndLowerCase } from "../../components/helpers/cleanAndLowerCase";
import { AddAction } from "./AddAction";
import { RemoveAction } from "./RemoveAction";
import { CardActionsWrapper } from "./styles";

export interface CardActionsProps {
  item: IMovieResult;
}

export const CardActions: React.FC<CardActionsProps> = (props) => {
  const { pathname } = useLocation();
  const shouldDisplayRemove = [FAVORITE, WATCH_LIST].some((type) =>
    pathname.includes(cleanAndLowerCase(type))
  );

  return (
    <CardActionsWrapper>
      <AddAction id={props.item.id} type={WATCH_LIST} />
      <AddAction id={props.item.id} type={FAVORITE} />
      {shouldDisplayRemove && <RemoveAction id={props.item.id} />}
    </CardActionsWrapper>
  );
};
