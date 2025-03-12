const Search = (props) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search for a movie"
          value={props.searchTerm}
          onChange={(e) => props.setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};
export default Search;
