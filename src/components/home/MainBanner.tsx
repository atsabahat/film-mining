import React from "react";
import { TMDB_LINK } from "../../constants/Links";
import { W500 } from "../../constants/ImageSize";
import { SearchArea } from "./SearchArea";
import { Banner, BannerImage } from "./styles";

export interface MainBannerProps {
  backgroundImage: string;
}

export const MainBanner: React.FC<MainBannerProps> = (props) => (
  <Banner>
    <SearchArea />
    {props.backgroundImage && (
      <BannerImage
        src={`${TMDB_LINK}${W500}${props.backgroundImage}`}
        alt="Film Mining"
      />
    )}
  </Banner>
);
