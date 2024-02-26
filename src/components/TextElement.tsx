import React, { memo } from "react";

interface TextElementProps {
  className?: string;
  children?: string | number;
  tag?: string;
}
export const TextElement: React.FC<TextElementProps> = memo((props) =>
  props.tag === "paragraph" ? (
    <p className={props.className}>{props.children}</p>
  ) : (
    <span className={props.className}>{props.children}</span>
  )
);
