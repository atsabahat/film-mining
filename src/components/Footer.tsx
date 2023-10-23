import React from "react";
import styled from "styled-components";
import { TextElement } from "./TextElement";
import { wrapperStyle } from "../assets/styles/defaultStyles";
import tmdbLogo from "../assets/images/tmdbLogoAltShort.svg";

export const Footer: React.FC = () => (
  <FooterFullWidth>
    <FooterWrapper>
      <Logo href="https://www.themoviedb.org/" target="_blank">
        <LogoImage src={tmdbLogo} alt="Film Mining" />
      </Logo>
      <TextElement tag="span">
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </TextElement>
    </FooterWrapper>
  </FooterFullWidth>
);

const FooterFullWidth = styled.footer`
  width: 100%;
  margin-top: 10px;
`;
const FooterWrapper = styled.div`
  ${wrapperStyle}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px 15px;
  text-align: center;

  span {
    color: ${(props) => props.theme.secondaryTextColor};
    font-size: 12px;
    margin-left: 10px;
    margin-top: 10px;
  }

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    span {
      margin-left: 0;
    }
  }
`;
const Logo = styled.a`
  margin-top: 10px;
`;
const LogoImage = styled.img`
  width: 80px;
`;
