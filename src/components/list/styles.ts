import styled from "styled-components";
import {
  GradientBackground,
  InputStyles,
  flexCenter,
  wrapperStyle,
} from "../../assets/styles/defaultStyles";

export const BackgroundCover = styled.section`
  position: relative;
  margin: -90px 0 0;
  background-color: #453b29;
  min-height: 240px;

  &:after {
    ${GradientBackground}
  }

  > div {
    width: 100%;
    position: absolute;
    top: 90px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    margin-top: -125px;

    > div {
      top: 125px;
    }
  }
`;
export const ListSection = styled.section`
  ${wrapperStyle}
  position: relative;
  margin-top: -110px;

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    margin-top: -70px;
  }
`;
export const ListPageSubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  min-height: 36px;
  margin-bottom: 10px;

  > span {
    color: ${(props) => props.theme.secondaryTextColor};
  }

  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    font-size: 14px;
  }
`;
export const Title = styled.h2`
  padding: 0 10px;
  margin-bottom: 0;

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    margin-top: 10px;
  }
  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    font-size: 20px;
  }
`;
export const PageInput = styled.input`
  ${InputStyles}
  background-color: #2a27238a;
  padding: 7px 5px;
  color: ${(props) => props.theme.primaryTextColor};
  width: 40px;
  border-color: #636363;
  text-align: center;
  margin-right: 7px;

  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    width: 38px;
    padding-top: 6px;
    font-size: 14px;
  }
`;
export const ChangePage = styled.div`
  ${flexCenter}
  gap: 15px;
  white-space: nowrap;

  button {
    width: 36px;
    padding: 2px 5px;
    background-color: #40382f;

    @media (max-width: ${(props) => props.theme.devices.mobile}px) {
      width: 32px;
      height: 32px;
    }
  }
`;
export const PageNumbers = styled.div`
  ${flexCenter}
`;
export const MovieResult = styled.div`
  ${wrapperStyle}
  display: grid;
  grid-template-columns: repeat(auto-fill, 18%);
  justify-content: space-between;
  grid-gap: 15px;
  padding: 0 10px;
  position: relative;

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    grid-template-columns: repeat(auto-fill, 23%);
    grid-gap: 10px;
  }
  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    grid-template-columns: repeat(auto-fill, 48%);
  }
`;
export const ListCover = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #181410a8;
  z-index: 1;
  backdrop-filter: blur(3px);
`;
export const EmptyListWrapper = styled.div`
  ${wrapperStyle}
  margin: 0 auto;
`;
export const InnerWrap = styled.div`
  margin: 30px 10px;
  position: relative;
  z-index: 1;
  border: 3px dashed #352d24;
  padding: 0 10px;
  border-radius: 3px;
  text-align: center;
  min-height: 150px;
  padding-bottom: 20px;
  background-color: #221d17;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const SadFace = styled.span`
  font-size: 36px;
  transform: rotate(90deg);
  font-weight: bold;
`;
export const Label = styled.h2`
  font-size: 20px;
  margin: 0;
`;
