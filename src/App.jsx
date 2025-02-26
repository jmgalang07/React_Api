import { useState } from "react";
import SearchForm from "./components/SearchForm";
import MovieCard from "./components/MovieCard";
import useFetchMovies from "./hooks/useFetchMovies";
import "./App.css";

const App = () => {
  const [searchParams, setSearchParams] = useState({ query: "", year: "", type: "" });
  const { movies } = useFetchMovies(searchParams);

  return (
    <div className="app">
      <h1>Movie Search</h1>
      <SearchForm onSearch={setSearchParams} />
      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default App;
