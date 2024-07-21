import { useState } from "react";
import Movies from "./components/Movies";
import Search from "./components/Search";
import Footer from "./Templates/Snippets/Footer";
import Navigation from "./Templates/Snippets/Navigation";

const App = () => {
  const [searchInput, setSearchInput] = useState("Terminator");
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    setQuery(searchInput);
  };

  return (
    <div className="  h-screen  bg-slate-800">
      <Navigation />
      <Search setSearchInput={setSearchInput} handleSearch={handleSearch} />
      <Movies searchInput={query} />
      <Footer />
    </div>
  );
};

export default App;
