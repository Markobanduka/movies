import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../Templates/Snippets/MovieCard";

interface SearchInputProps {
  searchInput: string;
}

const URL = import.meta.env.VITE_OMDBAPI_URL;
const API_KEY = import.meta.env.VITE_OMDBAPI_KEY;

const Movies = ({ searchInput }: SearchInputProps) => {
  const [movieData, setMovieData] = useState<any>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `${URL}?apikey=${API_KEY}&t=${searchInput}`
        );
        setMovieData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (searchInput) {
      fetchMovie();
    }
  }, [searchInput]);

  return (
    <div className="mx-2">{movieData && <MovieCard movie={movieData} />}</div>
  );
};

export default Movies;
