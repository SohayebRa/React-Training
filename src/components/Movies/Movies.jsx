import { Fragment, useState, useEffect, Suspense } from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (search.length > 0) {
      fetch(
        "https://api.themoviedb.org/3/search/movie?api_key=f43d35a1eef997efb796523ca6808ffb&language=en-US&query=" +
          search +
          "&page=1&include_adult=false"
      )
        .then((response) => response.json())
        .then((result) => setMovies(result.results));
    } else {
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=f43d35a1eef997efb796523ca6808ffb&language=en-US&page=1"
      )
        .then((response) => response.json())
        .then((result) => setMovies(result.results));
    }
  }, [search]);

  return (
    <Fragment>
      <div className="input">
        <input
          type="search"
          placeholder="Search a movie"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <Suspense fallback={<h1>LOADING...</h1>}>
        <div className="movies">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </Suspense>
    </Fragment>
  );
};
export default Movies;
