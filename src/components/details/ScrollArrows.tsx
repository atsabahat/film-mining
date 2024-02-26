import React from "react";
import { ScrollArrowButton } from "./ScrollArrowButton";
import { ScrollArrowsWrapper } from "./styles";

interface ScrollArrowsProps {
  slideFirst: () => void;
  slideLeft: () => void;
  slideRight: () => void;
  slideLast: () => void;
}

export const ScrollArrows: React.FC<ScrollArrowsProps> = (props) => (
  <ScrollArrowsWrapper>
    <ScrollArrowButton onClick={props.slideFirst}>❮❮</ScrollArrowButton>
    <ScrollArrowButton onClick={props.slideLeft}>❮</ScrollArrowButton>
    <ScrollArrowButton onClick={props.slideRight}>❯</ScrollArrowButton>
    <ScrollArrowButton onClick={props.slideLast}>❯❯</ScrollArrowButton>
  </ScrollArrowsWrapper>
);
