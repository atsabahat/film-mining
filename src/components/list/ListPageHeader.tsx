import React, { Fragment, useEffect, memo } from "react";
import { IMovieList } from "../../interfaces/movie";
import { setPageTitle } from "../helpers/setPageTitle";
import { ListPageTitle } from "./ListPageTitle";
import { Pagination } from "./Pagination";
import { TextElement } from "../TextElement";
import { ListPageSubTitle } from "./styles";

export interface ListPageHeaderProps {
  movieList: IMovieList;
  title: string;
}

export const ListPageHeader: React.FC<ListPageHeaderProps> = memo((props) => {
  useEffect(() => {
    setPageTitle(props.title);
  }, [props.title]);

  return (
    <Fragment>
      <ListPageTitle title={props.title} />
      <ListPageSubTitle>
        <TextElement tag="span">{`${props.movieList.total_results} movie${
          props.movieList.total_results > 1 ? "s" : ""
        } found`}</TextElement>

        {props.movieList.total_pages > 1 && (
          <Pagination totalPages={props.movieList.total_pages} />
        )}
      </ListPageSubTitle>
    </Fragment>
  );
});
