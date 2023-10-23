import React, { memo, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SearchInput } from "../SearchInput";
import { BackgroundCover } from "./styles";

export const SearchArea: React.FC = memo(() => {
  const searchInputElement = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const search = useCallback(() => {
    const query = searchInputElement.current?.value?.trim();
    if (query) navigate(`/search?query=${query}`);
  }, [navigate]);

  return (
    <BackgroundCover>
      <SearchInput ref={searchInputElement} search={search} />
    </BackgroundCover>
  );
});
