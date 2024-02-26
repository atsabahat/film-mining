import { screen, render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../assets/styles/defaultStyles";
import { movieState } from "../../../utils/tests.data";
import { Photos } from "../Photos";

describe("Movie Details", () => {
  it("Should be able to show all posters for more than 6 posters.", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Photos images={movieState.movieDetails.images.posters} type="posters" />
      </ThemeProvider>
    );

    if (movieState.movieDetails.images.posters.length > 6) {
      const showAllButton = screen.getByTestId("show-all");
      fireEvent.click(showAllButton);

      expect(screen.getAllByTestId("image").length).toBe(
        movieState.movieDetails.images.posters.length
      );
      expect(screen.getByText("Show less")).toBeInTheDocument();
    } else {
      const showAllButton = screen.queryByTestId("show-all");
      expect(showAllButton).toBeNull();
    }
  });
});
