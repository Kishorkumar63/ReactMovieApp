import React, { useEffect } from "react";
import { data, useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ title, apiPath }) => {
  const { data: movies } = useFetch(apiPath);
  console.log(movies);

  useEffect(() => {
    document.title = title;
  }, []);
  const navigatetor = useNavigate();
  return (
    <div>
      <main className="container">
        {title == "Your Guide to Great Movies" ? (
          <div className="bg-body-teritiary p-5 border mb-5">
            <h3 className="text-primary">Welcome to MovieHunt</h3>

            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              mollitia explicabo eligendi culpa neque minus ea suscipit illum,
              ipsum nesciunt.
            </p>
            <button
              onClick={() => navigatetor("/movies/upcoming")}
              className=" btn btn-primary"
            >
              Explore now{" "}
            </button>
          </div>
        ) : (
          ""
        )}

        <h5 className="text-danger" py-2>
          {title}
        </h5>
        <div className="row row-cols-1  row-cols-md-2  row-cols-lg-3 g-3 py-2">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </main>
    </div>
  );
};
