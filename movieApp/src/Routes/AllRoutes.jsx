import React from "react";
import { Route, Routes } from "react-router-dom";
import { MovieList } from "../pages/MovieList";
import { MovieDetials } from "../pages/MovieDetials";
import { Search } from "../pages/Search";
import { PageNotFound } from "../pages/PageNotFound";
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              title="Your Guide to Great Movies"
              apiPath="movie/now_playing"
            />
          }
        />
        <Route
          path="/movies/popular"
          element={<MovieList title="Popular Movies" apiPath="movie/popular" />}
        />
        <Route
          path="/movies/top"
          element={
            <MovieList title="Top Rated Movies" apiPath="movie/top_rated" />
          }
        />
        <Route
          path="/movies/upcoming"
          element={
            <MovieList title="Upcoming Movies" apiPath="movie/upcoming" />
          }
        />
        <Route path="/movie/:id" element={<MovieDetials />} />
        <Route path="/search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
