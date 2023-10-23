import React from "react";
import styled from "styled-components";
import { Menu } from "./Menu";
import { wrapperStyle, flexCenter } from "../assets/styles/defaultStyles";
import logo from "../assets/logo.png";
import logoType from "../assets/logoType.png";

export const Header: React.FC = () => (
  <HeaderWrapper>
    <Logo href="/">
      <LogoImage src={logo} alt="Film Mining" />
      <LogoType src={logoType} alt="Film Mining" />
    </Logo>
    <Menu />
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  ${wrapperStyle}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: relative;
  z-index: 2;

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    flex-direction: column;
  }
  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    padding-top: 20px;
  }
`;
const Logo = styled.a`
  ${flexCenter}
`;
const LogoImage = styled.img`
  width: 40px;
  padding-left: 5px;

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    width: 35px;
    padding-left: 0;
  }
`;
const LogoType = styled.img`
  width: 185px;
  margin-left: 10px;

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    width: 165px;
  }
`;
