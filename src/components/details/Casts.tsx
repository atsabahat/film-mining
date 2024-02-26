import React, { Fragment, memo, useRef } from "react";
import { ICast } from "../../interfaces/movie";
import { TextElement } from "../TextElement";
import { ScrollArrows } from "./ScrollArrows";
import { W185 } from "../../constants/ImageSize";
import { TMDB_LINK } from "../../constants/Links";
import {
  CastDetails,
  Label,
  AllCastsArea,
  CastItem,
  CastImage,
} from "./styles";
import defaultImageProfile from "../../assets/images/default-image-profile.jpg";

export interface CastsProps {
  movieCasts: ICast[];
}

export const Casts: React.FC<CastsProps> = memo((props) => {
  const AllCastsElement = useRef<HTMLDivElement>(null);
  const slideLeft = () => {
    if (AllCastsElement.current) AllCastsElement.current.scrollLeft -= 200;
  };
  const slideRight = () => {
    if (AllCastsElement.current) AllCastsElement.current.scrollLeft += 200;
  };
  const slideFirst = () => {
    if (AllCastsElement.current) AllCastsElement.current.scrollLeft = 0;
  };
  const slideLast = () => {
    if (AllCastsElement.current)
      AllCastsElement.current.scrollLeft = AllCastsElement.current.scrollWidth;
  };

  return (
    <Fragment>
      {props.movieCasts.length > 0 && (
        <CastDetails>
          <Label>Casts:</Label>
          <ScrollArrows
            slideFirst={slideFirst}
            slideLeft={slideLeft}
            slideRight={slideRight}
            slideLast={slideLast}
          />

          <AllCastsArea ref={AllCastsElement}>
            {props.movieCasts.map((item, index) => (
              <CastItem key={index}>
                <CastImage
                  src={
                    item.profile_path
                      ? `${TMDB_LINK}${W185}${item.profile_path}`
                      : defaultImageProfile
                  }
                  alt="Film Mining"
                />
                <TextElement tag="span" key={index}>
                  {item.name}
                </TextElement>
              </CastItem>
            ))}
          </AllCastsArea>
        </CastDetails>
      )}
    </Fragment>
  );
});
