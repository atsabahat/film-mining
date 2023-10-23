import React from "react";
import { SecondaryButton } from "../../assets/styles/defaultStyles";

interface ScrollArrowButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}
export const ScrollArrowButton: React.FC<ScrollArrowButtonProps> = (props) => (
  <SecondaryButton onClick={props.onClick}>{props.children}</SecondaryButton>
);
