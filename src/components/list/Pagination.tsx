import React, {
  useRef,
  memo,
  KeyboardEvent,
  useEffect,
  useContext,
} from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { fetchMovieList, searchMovies } from "../../store/movieActions";
import { PageContext } from "../../context/PageContext";
import { TextElement } from "../TextElement";
import { SecondaryButton } from "../../assets/styles/defaultStyles";
import { ChangePage, PageNumbers, PageInput } from "./styles";
import errorIcon from "../../assets/icons/close-circle-outline.svg";

export interface PaginationProps {
  totalPages: number;
}

export const Pagination: React.FC<PaginationProps> = memo((props) => {
  const FIRST_PAGE = 1;
  const pageInput = useRef<HTMLInputElement>(null);
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const globalPage = useContext(PageContext);
  const QUERY = searchParams.get("query");

  const changePageNumber = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      pageInput.current?.blur();
      changePageArrow(parseInt(pageInput.current?.value || ""));
    }
  };

  const changePageArrow = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    globalPage.setCurrentPage(FIRST_PAGE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const createApiData = (name: string, page: number) => ({
    listName: name,
    page,
  });

  const createSearchApiData = (query: string, page: number) => ({
    query,
    page,
  });

  const setPage = (page: number) => {
    const action = QUERY
      ? dispatch(searchMovies(createSearchApiData(QUERY || "", page)))
      : dispatch(fetchMovieList(createApiData(pathname.substring(1), page)));

    action
      .then(() => {
        globalPage.setCurrentPage(page);
      })
      .catch(() => {
        toast.error("Oops! Please try again.", {
          icon: <img src={errorIcon} alt="error" />,
        });
      });
  };

  return (
    <ChangePage>
      <SecondaryButton
        onClick={() => changePageArrow(globalPage.currentPage - 1)}
        disabled={globalPage.currentPage === 1}
        data-testid="prev"
      >
        ❮
      </SecondaryButton>

      <PageNumbers>
        <PageInput
          type="number"
          ref={pageInput}
          defaultValue={globalPage.currentPage}
          key={globalPage.currentPage}
          onKeyDown={(e) => changePageNumber(e)}
        />
        <TextElement tag="span">{`/ ${props.totalPages}`}</TextElement>
      </PageNumbers>

      <SecondaryButton
        onClick={() => changePageArrow(globalPage.currentPage + 1)}
        disabled={globalPage.currentPage === props.totalPages}
        data-testid="next"
      >
        ❯
      </SecondaryButton>
    </ChangePage>
  );
});
