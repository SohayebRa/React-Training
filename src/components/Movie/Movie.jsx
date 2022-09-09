import "./Movie.css";

const Movie = ({ movie }) => {
  const { title, poster_path, release_date } = movie;
  let posterUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path;

  return (
    <div className="card">
      <img src={posterUrl} alt={title} />
      <h3>{title}</h3>
      <p>{release_date}</p>
    </div>
  );
};
export default Movie;
