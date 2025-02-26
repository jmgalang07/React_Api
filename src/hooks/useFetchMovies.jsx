import { useState, useEffect } from "react";

const API_KEY = "61386f7e"; 
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const useFetchMovies = (searchParams) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searchParams.query) return;
    fetch(
      `${API_URL}&s=${searchParams.query}&y=${searchParams.year}&type=${searchParams.type}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Data received:", data);
        setMovies(data.Search || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [searchParams]);
  return { movies };
};

export default useFetchMovies;
