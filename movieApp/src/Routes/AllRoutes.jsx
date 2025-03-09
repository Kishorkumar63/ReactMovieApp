import React from "react";
import { Route, Routes } from "react-router-dom";
import { MovieList } from "../pages/MovieList";
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<MovieList title="Your Guide to Great Movies" />}
        />
        <Route
          path="/movies/popular"
          element={<MovieList title="Popular Movies" />}
        />
        <Route
          path="/movies/top"
          element={<MovieList title="Top Rated Movies" />}
        />
        <Route
          path="/movies/upcoming"
          element={<MovieList title="Upcoming Movies" />}
        />
      </Routes>
    </>
  );
};
