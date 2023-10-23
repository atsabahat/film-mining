import styled, { css } from "styled-components";
import {
  GradientBackground,
  flexCenter,
  wrapperStyle,
} from "../../assets/styles/defaultStyles";

export const Backdrop = styled.section`
  position: relative;
  overflow: hidden;
  margin-top: -90px;
  max-height: 700px;
  min-height: 400px;

  &:after {
    ${GradientBackground}
    bottom: 0;
  }

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    margin-top: 0;
    min-height: 200px;
  }
`;
export const BackdropImage = styled.img`
  width: 100%;
`;
export const PosterBoxWrapper = styled.div`
  width: 30%;
  max-width: 280px;
  margin-right: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    width: 100%;
    max-width: 100%;
    margin-right: 0;
    flex-direction: row;
  }
  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
export const PosterImage = styled.img`
  width: 100%;
  border-radius: 5px;

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    display: none;
  }
`;
export const Actions = styled.div`
  width: 100%;

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    margin: 0;
  }

  button {
    width: 100%;
    height: 50px;
    margin-top: 15px;
    padding: 0 15px;
    justify-content: flex-start;
  }
`;
export const ButtonIcon = styled.img`
  width: 30px;
  margin-right: 10px;
`;
export const MovieTitle = styled.h2`
  font-size: 30px;
  margin-top: 50px;
  margin-bottom: 30px;
  line-height: 1.3;

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    margin-top: 10px;
  }
  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;
export const AdditionalInfo = styled.div`
  margin: 25px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;
export const Overview = styled.div`
  font-size: 18px;
  opacity: 0.9;

  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    font-size: 16px;
  }
`;
export const SecondaryInfoWrwpper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  span {
    font-size: 18px;
    padding: 0 15px;
    border-left: 1px solid gainsboro;
    line-height: 1;
    color: ${(props) => props.theme.secondaryTextColor};

    &:first-child {
      border: 0;
      padding-left: 0;
    }
    &:last-child {
      text-transform: uppercase;
    }

    @media (max-width: ${(props) => props.theme.devices.mobile}px) {
      font-size: 16px;
    }
  }
`;
export const VoteStar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const StarIcon = styled.img`
  width: 40px;
  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    width: 32px;
  }
`;
export const VoteNumbers = styled.div`
  margin-left: 5px;
  line-height: 1.2;

  span {
    display: block;
    :first-child {
      color: ${(props) => props.theme.primary};
      font-size: 22px;
      font-weight: bold;
      @media (max-width: ${(props) => props.theme.devices.mobile}px) {
        font-size: 18px;
      }
    }
    :last-child {
      color: ${(props) => props.theme.secondaryTextColor};
      font-size: 14px;
      @media (max-width: ${(props) => props.theme.devices.mobile}px) {
        font-size: 12px;
      }
    }
  }
`;
export const Trailer = styled.div`
  cursor: pointer;
  margin-left: 50px;
  position: relative;
  padding-left: 40px;

  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    font-size: 14px;
  }
`;
export const PlayTrailer = styled.div`
  transition: all 0.2s;
  &:before {
    content: "";
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 10px solid white;
    position: absolute;
    top: 9px;
    left: 15px;
    transition: all 0.2s;

    @media (max-width: ${(props) => props.theme.devices.mobile}px) {
      font-size: 14px;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 8px solid white;
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 3px;
    border: 3px solid white;
    border-radius: 50px;
    width: 24px;
    height: 24px;
    transition: all 0.2s;

    @media (max-width: ${(props) => props.theme.devices.mobile}px) {
      border: 2px solid white;
    }
  }
  &:hover {
    color: ${(props) => props.theme.primary};
    &:before {
      border-left-color: ${(props) => props.theme.primary};
    }
    &:after {
      border-color: ${(props) => props.theme.primary};
    }
  }
`;
export const CloseTrailer = styled.div`
  transition: all 0.2s;
  &:before {
    content: "";
    width: 3px;
    height: 20px;
    background-color: white;
    transform: rotate(45deg);
    position: absolute;
    top: 4px;
    left: 20px;
    transition: all 0.2s;
  }
  &:after {
    content: "";
    width: 3px;
    height: 20px;
    background-color: white;
    transform: rotate(-45deg);
    position: absolute;
    top: 4px;
    left: 20px;
    transition: all 0.2s;
  }
  &:hover {
    color: ${(props) => props.theme.primary};
    &:before {
      background-color: ${(props) => props.theme.primary};
    }
    &:after {
      background-color: ${(props) => props.theme.primary};
    }
  }
`;
export const TrailerLink = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  margin: 30px 0 0;
`;
export const TrailerFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 0;
`;
export const TrailerDefaultBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 25px 2px inset #564f4a;
  border-radius: 5px;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.secondaryTextColor};
    font-size: 22px;
  }
`;
export const ExtraDetails = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    font-size: 14px;
  }

  span {
    color: ${(props) => props.theme.secondaryTextColor};
    padding: 5px 10px;
    position: relative;
    text-align: center;
    line-height: 1.2;

    &:before {
      content: "";
      position: absolute;
      right: 0;
      top: 10px;
      height: 15px;
      width: 1px;
      background-color: ${(props) => props.theme.secondaryTextColor};
    }

    &:last-child:before {
      width: 0;
    }
  }
`;
export const Label = styled.h3`
  font-weight: normal;
  margin-right: 5px;
  margin: 0;
`;
export const CastDetails = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 25px;
`;
export const AllCastsArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  overflow: auto;
  background-color: ${(props) => props.theme.secondary};
  margin-top: 20px;
  scroll-behavior: smooth;

  span {
    color: ${(props) => props.theme.secondaryTextColor};
    padding: 5px 3px;
    text-align: center;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const CastItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  font-size: 14px;
  line-height: 1.2;
`;
export const CastImage = styled.img`
  max-width: 80px;
  border-radius: 3px;
  margin: 0 10px;
`;
export const ScrollArrowsWrapper = styled.div`
  ${flexCenter}

  button {
    padding: 0 10px;
    margin-left: 10px;
    height: 30px;
  }
`;
export const MoviePhotos = styled.section<{ type: string }>`
  ${wrapperStyle}
  margin-bottom: 30px;
  display: grid;
  ${(props) =>
    props.type === "posters"
      ? css`
          grid-template-columns: repeat(auto-fill, 15%);
          @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
            grid-template-columns: repeat(auto-fill, 31%);
          }
        `
      : css`
          grid-template-columns: repeat(auto-fill, 30%);
          @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
            grid-template-columns: repeat(auto-fill, 48%);
          }
        `}

  justify-content: space-between;
  grid-gap: 10px;
  padding: 0 10px;

  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    margin-bottom: 0;
  }
`;
export const MovieVideos = styled.section`
  ${wrapperStyle}
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 31%);
  justify-content: space-between;
  grid-gap: 10px;
  padding: 0 10px;

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    grid-template-columns: repeat(auto-fill, 48%);
  }
  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`;
export const MediaHeader = styled.div`
  grid-column: 1 / -1;
  margin-left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  span {
    color: ${(props) => props.theme.secondaryTextColor};
    margin: 15px;
    padding-top: 5px;
    border-bottom: 1px solid;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme.primary};
      border-color: transparent;
    }

    @media (max-width: ${(props) => props.theme.devices.mobile}px) {
      font-size: 14px;
    }
  }
`;
export const MediaTitle = styled.h2`
  text-transform: capitalize;

  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    font-size: 22px;
  }
`;
export const ShowAll = styled.div``;
export const EyeIcon = styled.img`
  width: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
`;
export const ImageWrapper = styled.a`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 70%);
    opacity: 0;
    transition: all 0.2s;
  }

  &:hover {
    &:before {
      opacity: 1;
    }
    ${EyeIcon} {
      opacity: 1;
    }
  }
`;
export const ImageBox = styled.img`
  width: 100%;
  border-radius: 3px;
`;
export const VideoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  span {
    margin: 10px 0;
    color: ${(props) => props.theme.secondaryTextColor};
  }
`;
export const VideoFrame = styled.iframe`
  height: 168px;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 5px;
  width: 100%;
  border: 0;

  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    height: 200px;
  }
`;
