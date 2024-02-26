import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../assets/styles/defaultStyles";
import { Provider } from "react-redux";
import store from "../../../store/index";
import { MemoryRouter } from "react-router-dom";
import { emptylist, list } from "../../../utils/tests.data";
import { mockNetWorkResponse } from "../../../utils/mocks";
import { PageContextProvider } from "../../../context/PageContext";
import { WATCH_LIST } from "../../../constants/ListName";
import { Pagination } from "../Pagination";
import { ListPageTemplate } from "../ListPageTemplate";

describe("List", () => {
  beforeAll(() => {
    mockNetWorkResponse();
  });

  it("Should be able to disable pagination buttons for first and last pages.", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PageContextProvider>
            <MemoryRouter initialEntries={[{ pathname: "/watchlist" }]}>
              <Pagination totalPages={list.total_pages} />
            </MemoryRouter>
          </PageContextProvider>
        </Provider>
      </ThemeProvider>
    );

    const prevButton = screen.getByTestId("prev");
    const nextButton = screen.getByTestId("next");

    expect(prevButton).toBeDisabled();
    fireEvent.click(nextButton);
    
    await waitFor(() => {
      expect(prevButton).not.toBeDisabled();
      expect(nextButton).toBeDisabled();
    });
  });

  it("Should be able to show the Empty list if the movie list is empty.", async () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[{ pathname: "/watchlist" }]}>
          <ListPageTemplate
            movieList={emptylist}
            loading={false}
            title={WATCH_LIST}
          />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getByTestId("empty")).toBeInTheDocument();
  });
});
