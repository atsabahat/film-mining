import React from "react";
import styled from "styled-components";
import loadingImage from "../assets/icons/loadingCircle.svg";

export const Loading: React.FC = () => (
  <LoadingArea>
    <LoadingImage src={loadingImage} alt="loading" className="loadingImage" />
  </LoadingArea>
);

const LoadingArea = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  text-align: center;
  z-index: 2;
  grid-column: 1/6;
  position: absolute;
  top: 80px;
  left: 0;
  background-color: #181410a8;
  backdrop-filter: blur(3px);

  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    height: calc(100% - 50px);
    top: 65px;
  }
`;
const LoadingImage = styled.img`
  width: 50px;
  margin-top: 40px;
`;
