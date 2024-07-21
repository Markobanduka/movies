import MovieCard from "./Snippets/MovieCard";

interface Movie {
  Title: string;
  Poster: string;
  Plot: string;
  Year: string;
}

interface SearchResultsProps {
  movies: Movie[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ movies }) => {
  console.log(movies);

  return (
    <div className="flex flex-wrap  bg-gray-800">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default SearchResults;
