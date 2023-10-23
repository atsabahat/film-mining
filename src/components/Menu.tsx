import React from "react";
import styled from "styled-components";
import { CustomNavLink } from "./MenuNavLink";

export const Menu: React.FC = () => (
  <MenuNav>
    <CustomNavLink to="/">Home</CustomNavLink>
    <CustomNavLink to="watchlist">Watch List</CustomNavLink>
    <CustomNavLink to="favorite">Favorite</CustomNavLink>
  </MenuNav>
);

const MenuNav = styled.nav`
  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    margin-top: 15px;
  }

  a {
    color: ${(props) => props.theme.primaryTextColor};
    padding: 5px 15px 7px;
    transition: all 0.2s;
    text-shadow: 2px 2px 5px #000000;
    position: relative;

    @media (max-width: ${(props) => props.theme.devices.mobile}px) {
      font-size: 14px;
    }

    :hover {
      text-shadow: none;
      background-color: #00000087;
      border-radius: 50px;
      color: #f1920f;
    }

    &.active {
      color: #f1920f;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 40%;
        height: 2px;
        background-color: #f1920f;
        box-shadow: 2px 2px 5px black;
      }
    }
  }
`;
