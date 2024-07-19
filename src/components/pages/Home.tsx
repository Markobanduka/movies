import { useState } from "react";
import SearchBar from "../SearchBar";
import Movies from "../Movies";

const Home = () => {
  const [searchInput, setSearchInput] = useState("Terminator");
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    setQuery(searchInput);
  };

  return (
    <div className="flex">
      <SearchBar setSearchInput={setSearchInput} />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
      <Movies searchInput={query} />
    </div>
  );
};

export default Home;
