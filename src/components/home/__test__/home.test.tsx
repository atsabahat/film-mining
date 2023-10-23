import { screen, render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../assets/styles/defaultStyles";
import { MemoryRouter } from "react-router-dom";
import { SearchArea } from "../SearchArea";

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedNavigator,
}));

describe("Home", () => {
  it("Should be able to change the URL with the appropriate query for searching.", async () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <SearchArea />
        </MemoryRouter>
      </ThemeProvider>
    );

    const searchInput = screen.getByTestId("search");
    fireEvent.change(searchInput, { target: { value: "hi" } });
    fireEvent.keyDown(searchInput, { key: "Enter", code: "Enter" });
    expect(mockedNavigator).toHaveBeenCalledWith("/search?query=hi");
  });
});
