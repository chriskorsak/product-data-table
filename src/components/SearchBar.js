function SearchBar({ filter, setFilter, inStockOnly, setInStockOnly }) {
  return (
    <div className="search-bar">
      <div className="form-group">
        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={() => setInStockOnly(previous => !previous)}
        />{' '}
        Only show products in stock
      </div>
    </div>
  );
}

export default SearchBar;
