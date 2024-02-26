import React from "react";
import styled from "styled-components";
import { TextElement } from "./TextElement";
import { SecondaryButton, wrapperStyle } from "../assets/styles/defaultStyles";

export interface RefreshDataProps {
  resetFetch: React.MouseEventHandler<HTMLButtonElement>;
  error: string;
}

export const RefreshData: React.FC<RefreshDataProps> = (props) => (
  <RefreshBody>
    <Header>Oops!</Header>
    <TextElement tag="span">{props.error}</TextElement>
    <SecondaryButton onClick={props.resetFetch}>Try again</SecondaryButton>
  </RefreshBody>
);

export const RefreshBody = styled.div`
  ${wrapperStyle}
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 20px;
  margin-top: 40px;

  span {
    font-size: 18px;
    color: ${(props) => props.theme.secondaryTextColor};
    border-top: 1px solid ${(props) => props.theme.primary};
    padding-top: 10px;
  }

  button {
    padding: 10px 20px;
    margin-top: 20px;
    font-size: 16px;
  }
`;
export const Header = styled.h1`
  margin: 0 0 10px;
  font-size: 40px;
  border-bottom: 1px solid ${(props) => props.theme.primary};
  padding-bottom: 10px;
  color: ${(props) => props.theme.primary};
`;
