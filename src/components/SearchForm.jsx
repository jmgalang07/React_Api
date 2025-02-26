import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, year, type });
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Search for movies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="game">Game</option>
        <option value="series">Series</option>
      </select>
      <button type="submit" disabled={query.trim() === ""}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
