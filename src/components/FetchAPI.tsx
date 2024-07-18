import axios from "axios";

interface SearchInputProps {
  searchInput: string;
}

const URL = import.meta.env.VITE_OMDBAPI_URL;
const API_KEY = import.meta.env.VITE_OMDBAPI_KEY;

const FetchAPI = ({ searchInput }: SearchInputProps) => {
  const fetchMovie = async () => {
    try {
      const response = await axios.get(
        `${URL}?apikey=${API_KEY}&t=${searchInput}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mx-2">
      <button className="btn btn-primary" onClick={fetchMovie}>
        Search
      </button>
    </div>
  );
};

export default FetchAPI;
