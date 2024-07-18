interface SearchBarProps {
  setSearchInput: (input: string) => void;
}

const SearchBar = ({ setSearchInput }: SearchBarProps) => {
  return (
    <div className="">
      <div className="">
        <input
          type="text"
          className="input input-primary"
          placeholder="Search for a movie..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
