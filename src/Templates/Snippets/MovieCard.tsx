interface MovieCardProps {
  movie: {
    Title: string;
    Poster: string;
    Plot: string;
    Year: string;
  };
}

const MovieCard = ({ movie }: MovieCardProps) => {
  if (!movie) {
    return null;
  }

  return (
    <div className="text-white bg-gray-800 mx-auto p-4 mt-2">
      <div className="flex flex-col items-center">
        <h5
          className="text-3xl w-full text-center truncate"
          title={movie.Title}
          style={{ maxWidth: "220px" }}
        >
          {movie.Title.length > 18
            ? movie.Title.substring(0, 18) + "..."
            : movie.Title}
        </h5>
        <img
          src={movie.Poster}
          alt="image of movie"
          className="h-80 rounded-md"
          title={movie.Title}
        />
        <p className="font-mono text-2xl">{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
