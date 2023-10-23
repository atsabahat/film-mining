import React, { Component } from "react";
import styled from "styled-components";
import { flexCenter } from "../assets/styles/defaultStyles";
import alertIcon from "../assets/icons/alert.svg";

interface IErrorBoundaryProps {
  children: React.ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <GeneralErrorArea>
          <GeneralErrorRow>
            <Image src={alertIcon} alt="Film Mining" />
            <Span>Something went wrong.</Span>
            <Span>Please try again in a few minutes.</Span>
          </GeneralErrorRow>
          <GeneralErrorLink
            className="generalErrorLink"
            onClick={() => window.location.reload()}
          >
            <Span>Refresh page</Span>
          </GeneralErrorLink>
        </GeneralErrorArea>
      );
    }
    return this.props.children;
  }
}

const GeneralErrorArea = styled.div`
  ${flexCenter}
  flex-direction: column;
  min-height: 250px;
  box-shadow: 0 4px 10px black;
  background: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.secondaryTextColor};
`;
const GeneralErrorRow = styled.div`
  ${flexCenter}
  flex-direction: column;
  font-size: 18px;
`;
const GeneralErrorLink = styled.div`
  ${flexCenter}
  cursor: pointer;
  color: ${(props) => props.theme.primary};
  margin-top: 10px;

  span {
    border-bottom: 1px solid ${(props) => props.theme.primary};
    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
const Image = styled.img`
  width: 36px;
  margin-bottom: 5px;
`;
const Span = styled.span`
  margin: 5px 0;
`;

export default ErrorBoundary;
