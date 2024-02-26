import { KeyboardEvent, forwardRef, memo } from "react";
import styled from "styled-components";
import {
  InputStyles,
  Button,
  wrapperStyle,
} from "../assets/styles/defaultStyles";
import searchIcon from "../assets/icons/magnify.svg";

export interface SearchProps {
  search: () => void;
}

export const SearchInput = memo(
  forwardRef<HTMLInputElement, SearchProps>((props, ref) => {
    const enterSearch = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        props.search();
      }
    };

    return (
      <SearchInputWrapper>
        <SearchInputElement
          type="text"
          ref={ref}
          placeholder="Type the name of the movie"
          onKeyDown={(e) => enterSearch(e)}
          data-testid="search"
        />
        <SearchButton onClick={props.search}>
          <SearchIcon src={searchIcon} alt="Film Mining" />
        </SearchButton>
      </SearchInputWrapper>
    );
  })
);

const SearchInputWrapper = styled.div`
  ${wrapperStyle}
  position: relative;
  z-index: 1;
`;
const SearchInputElement = styled.input`
  ${InputStyles}
  width: calc(100% - 20px);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #2a27238a;
  padding: 10px 15px;
  color: ${(props) => props.theme.primaryTextColor};
  border-color: #636363;
`;
const SearchButton = styled(Button)`
  background-color: transparent;
  border: 0;
  padding: 0;
  position: absolute;
  right: 20px;
  top: 2px;
`;
const SearchIcon = styled.img`
  width: 30px;
  opacity: 0.4;
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
`;
