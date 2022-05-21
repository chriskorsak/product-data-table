function SearchBar() {
  return (
    <div className="search-bar">
      <div className="form-group">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="form-group">
        <input type="checkbox" /> Only show products in stock
      </div>
    </div>
  );
}

export default SearchBar;
