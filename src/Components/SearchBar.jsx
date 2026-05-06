const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      className="form-control mb-4"
      placeholder="Search by title or author..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;