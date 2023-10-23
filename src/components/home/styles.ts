import styled from "styled-components";

export const Banner = styled.section`
  position: relative;
  height: 295px;

  &:before {
    content: "";
    width: 100%;
    height: 30px;
    background-color: #19140f;
    position: absolute;
    bottom: -25px;
    left: 0;
    z-index: 1;
  }

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    height: 130px;
    &:before {
      bottom: -10px;
    }
  }
  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    height: 75px;
    &:before {
      bottom: -25px;
    }
  }
`;
export const BannerImage = styled.img`
  width: 100%;
  height: 400px;
  margin-top: -110px;
  object-fit: cover;
  object-position: top;
  filter: sepia(0.5) brightness(0.3) blur(5px);
  background-color: #564d42;

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    height: 250px;
    margin-top: -140px;
  }
  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    height: 210px;
  }
`;
export const SearchWrapper = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;

  input {
    width: 500px;
    position: relative;

    @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
      width: 345px;
    }

    @media (max-width: ${(props) => props.theme.devices.mobile}px) {
      width: 320px;
    }
  }

  button {
    right: 10px;
  }
`;
export const SearchTitle = styled.h2`
  font-weight: normal;
  font-size: 30px;

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    display: none;
  }
`;
export const SectionTitle = styled.h2`
  padding: 10px 10px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    margin-top: 0;
  }
  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    font-size: 20px;
    padding-top: 0;
    margin-top: 10px;
  }
`;
export const TitleIcon = styled.img`
  width: 36px;
  margin-right: 5px;

  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    width: 28px;
  }
`;
