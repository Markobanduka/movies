import { useState } from "react";
import FetchAPI from "../FetchAPI";
import SearchBar from "../SearchBar";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="flex">
      <SearchBar setSearchInput={setSearchInput} />
      <FetchAPI searchInput={searchInput} />
    </div>
  );
};

export default Home;
