import { useState } from "react";
import axios from "axios";
import SearchResults from "../Templates/SearchResults";

const URL = import.meta.env.VITE_OMDBAPI_URL;
const API_KEY = import.meta.env.VITE_OMDBAPI_KEY;

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `${URL}?apikey=${API_KEY}&s=${searchTerm}`
      );

      setMovies(response.data.Search);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <>
      <form className="flex justify-center items-center pt-8  bg-gray-800">
        <input
          type="text"
          className="input input-primary"
          placeholder="Search for a movie..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="btn btn-primary mx-1"
          onClick={searchMovies}
          type="button"
        >
          Search
        </button>
      </form>
      <SearchResults movies={movies} />
    </>
  );
};

export default Search;
