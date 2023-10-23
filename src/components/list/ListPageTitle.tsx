import React, { memo } from "react";
import { Title } from "./styles";

export interface ListPageTitleProps {
  title: string;
}

export const ListPageTitle: React.FC<ListPageTitleProps> = memo((props) => (
  <Title>{props.title}</Title>
));
