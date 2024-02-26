import React, { memo } from "react";
import { SectionTitle, TitleIcon } from "./styles";
import fireIcon from "../../assets/icons/fire.svg";

export const Title: React.FC = memo(() => (
  <SectionTitle>
    <TitleIcon src={fireIcon} alt="Film Mining" />
    Top Popular Movies
  </SectionTitle>
));
