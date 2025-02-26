const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300"
        }
        alt={movie.Title}
      />
      <h3>{movie.Title || "No title available"}</h3>
      <p>{movie.Year || "Unknown year"}</p>
    </div>
  );
};

export default MovieCard;
