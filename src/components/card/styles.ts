import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  transition: all 0.3s;
  display: block;
`;
export const MovieCard = styled.article`
  margin: 5px 0;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    ${Image} {
      transform: scale(1.08);
    }
  }

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    margin: 10px 0;
  }
  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    margin: 5px 0;
  }
`;
export const CardImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 5px 5px 0 0;
  position: relative;
`;
export const CardActionsWrapper = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
export const ActionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(25, 20, 15, 60%);
  border-radius: 50px;
  width: 34px;
  height: 35px;
  margin-bottom: 5px;
  overflow: hidden;
  white-space: nowrap;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: rgba(25, 20, 15, 80%);
    width: auto;
    padding-right: 15px;
  }
`;
export const ActionIcon = styled.img`
  width: 24px;
  margin: 6px 5px 5px;
`;
export const ActionText = styled.div`
  margin-left: 0;
  color: ${(props) => props.theme.primaryTextColor};
`;
export const CardInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px 10px 15px;
  background: ${(props) => props.theme.secondary};
  flex-grow: 1;
  border-radius: 0 0 5px 5px;
  transition: all 0.3s;
  box-shadow: 0 4px 10px black;
  position: relative;

  button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s;
    z-index: -1;
  }
`;
export const CardInfoHolder = styled.div`
  transition: all 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;

  > a {
    color: ${(props) => props.theme.primaryTextColor};
  }
`;
export const CardTitle = styled.h2`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 5px 0;
  word-break: break-word;
  font-size: 16px;
  font-weight: normal;

  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    font-size: 14px;
  }
`;
export const CardDate = styled.div`
  color: ${(props) => props.theme.secondaryTextColor};
  font-size: 14px;

  @media (max-width: ${(props) => props.theme.devices.mobile}px) {
    font-size: 12px;
  }
`;
export const CardVote = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.theme.primary};
`;
export const StarIcon = styled.img`
  width: 20px;
  margin-right: 5px;
`;
