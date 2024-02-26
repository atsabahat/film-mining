import React, { memo } from "react";
import { W1280 } from "../../constants/ImageSize";
import { TMDB_LINK } from "../../constants/Links";
import { Backdrop, BackdropImage } from "./styles";

export interface BannerProps {
  path: string;
}

export const Banner: React.FC<BannerProps> = memo((props) => (
  <Backdrop>
    {props.path && (
      <BackdropImage
        src={`${TMDB_LINK}${W1280}${props.path}`}
        alt="Film Mining"
      />
    )}
  </Backdrop>
));
