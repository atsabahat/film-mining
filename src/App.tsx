import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PageContextProvider } from "./context/PageContext";
import { HomePage } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";
import { MovieList } from "./pages/MovieList";
import { Search } from "./pages/Search";
import { ScrollToTop } from "./components/helpers/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import GlobalStyle from "./assets/styles/global";
import {
  CustomToastContainer,
  Main,
  theme,
} from "./assets/styles/defaultStyles";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <ErrorBoundary>
        <PageContextProvider>
          <CustomToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            draggable={false}
            pauseOnHover={false}
          />
          <Main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movie/:movieId" element={<MovieDetails />} />
              {["/watchlist", "/favorite"].map((path) => (
                <Route
                  key={path}
                  path={path}
                  element={<MovieList type={path.slice(1)} />}
                />
              ))}
              <Route path="/search" element={<Search />} />
            </Routes>
          </Main>
        </PageContextProvider>
      </ErrorBoundary>
      <Footer />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
