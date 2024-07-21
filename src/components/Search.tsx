interface SearchBarProps {
  setSearchInput: (input: string) => void;
  handleSearch: () => void;
}

const Search = ({ setSearchInput, handleSearch }: SearchBarProps) => {
  return (
    <form className="flex justify-center items-center pt-10">
      <input
        type="text"
        className="input input-primary"
        placeholder="Search for a movie..."
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="btn btn-primary mx-1" onClick={handleSearch}>
        Search
      </button>
    </form>
  );
};

export default Search;
