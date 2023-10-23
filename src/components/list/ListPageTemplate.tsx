import React, { Fragment } from "react";
import { IMovieList } from "../../interfaces/movie";
import { ListItems } from "./ListItems";
import { ListPageHeader } from "./ListPageHeader";
import { Loading } from "../Loading";
import { EmptyList } from "./EmptyList";
import { ListSection } from "./styles";

export interface ListPageTemplateProps {
  movieList: IMovieList;
  title: string;
  loading: boolean;
}

export const ListPageTemplate: React.FC<ListPageTemplateProps> = (props) => (
  <ListSection>
    <ListPageHeader movieList={props.movieList} title={props.title} />
    {!props.movieList.results.length && !props.loading ? (
      <EmptyList />
    ) : (
      <Fragment>
        {props.loading && <Loading />}
        <ListItems results={props.movieList.results} />
      </Fragment>
    )}
  </ListSection>
);
