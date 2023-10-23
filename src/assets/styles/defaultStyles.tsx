import { ToastContainer } from "react-toastify";
import styled, { css, DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  devices: {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
  },
  primary: "#d58312",
  secondary: "#2b2723",
  primaryTextColor: "white",
  secondaryTextColor: "#a5a09d",
};
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  ${flexCenter}
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 3px;
  font-size: 14px;
  height: 36px;
  cursor: pointer;
  user-select: none;
  padding: 2px 12px 2px 7px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primary};
  border-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primaryTextColor};
  transition: all 0.2s;
  position: relative;

  &:hover {
    background-color: #c37100;
    border-color: #c37100;
  }
`;
export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.secondary};
  border-color: #403c37;
  color: ${(props) => props.theme.primaryTextColor};
  transition: all 0.2s;

  &:hover {
    background-color: #42362d;
    border-color: #42362d;
  }
`;
export const InputStyles = css`
  background-color: white;
  border: 1px solid #cecece;
  font-size: 16px;
  border-radius: 3px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.primary};
  }
`;
export const wrapperStyle = css`
  max-width: 1000px;
  margin: 0 auto;
`;
export const Main = styled.main`
  position: relative;
  min-height: 93vh;

  @media (max-width: ${(props) => props.theme.devices.tablet - 1}px) {
    min-height: 90vh;
  }
`;
export const GradientBackground = css`
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -40px;
  left: 0;
  background: linear-gradient(
    transparent 0%,
    #19140f1f 15%,
    #19140f59 30%,
    #19140f8a 46%,
    #19140f 85%
  );
`;
export const CustomToastContainer = styled((props) => (
  <ToastContainer {...props} />
))`
  .Toastify__toast {
    background: linear-gradient(
      90deg,
      rgb(43, 39, 35) 0%,
      rgb(43, 39, 35) 100%
    );
    box-shadow: rgb(22, 20, 18) 0px 0px 10px 2px;
    align-items: center;
    border-radius: 10px;
  }
  .Toastify__toast-body {
    color: white;
  }
  .Toastify__close-button {
    color: ${(props) => props.theme.secondaryTextColor};
    align-self: normal;
    padding-right: 6px;
  }
  .Toastify__toast-icon {
    width: 30px;
    img {
      width: 30px;
    }
  }
`;
