import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../assets/styles/defaultStyles";
import { Provider } from "react-redux";
import store from "../../../store/index";
import { MemoryRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { movieId } from "../../../utils/tests.data";
import { mockNetWorkResponse } from "../../../utils/mocks";
import { WATCH_LIST } from "../../../constants/ListName";
import { AddAction } from "../../card/AddAction";

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
  },
}));

describe("Card Actions", () => {
  beforeAll(() => {
    mockNetWorkResponse();
  });

  it("Should be able to show toast after adding to list.", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <MemoryRouter>
            <AddAction id={movieId} type={WATCH_LIST} />
          </MemoryRouter>
        </Provider>
      </ThemeProvider>
    );

    const addButton = screen.getByTestId("add");
    fireEvent.click(addButton);

    await waitFor(() => {
      const expectedMessage = "Added to Watch List";
      const expectedOptions = {
        icon: expect.any(Object),
      };
      expect(toast.success).toHaveBeenCalledWith(
        expectedMessage,
        expectedOptions
      );
    });
  });
});
