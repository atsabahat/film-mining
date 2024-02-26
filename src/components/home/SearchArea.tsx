import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SearchInput } from "../SearchInput";
import { SearchWrapper, SearchTitle } from "./styles";

export const SearchArea: React.FC = () => {
  const searchInputElement = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const search = () => {
    if (!searchInputElement.current?.value.trim()) return;
    navigate(`/search?query=${searchInputElement.current?.value}`);
  };

  return (
    <SearchWrapper>
      <SearchTitle>Search for the best movies!</SearchTitle>
      <SearchInput ref={searchInputElement} search={search} />
    </SearchWrapper>
  );
};
