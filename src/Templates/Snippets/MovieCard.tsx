interface MovieCardProps {
  movie: {
    Title: string;
    Poster: string;
    Plot: string;
  };
}

const MovieCard = ({ movie }: MovieCardProps) => {
  if (!movie) {
    return null;
  }

  return (
    <div className="text-white p-10">
      <h2 className="text-4xl">{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p className="font-thin">{movie.Plot}</p>
    </div>
  );
};

export default MovieCard;
