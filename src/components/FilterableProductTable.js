import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable({ products }) {
  const [filter, setFilter] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <>
      <SearchBar
        filter={filter}
        setFilter={setFilter}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable
        products={products}
        filter={filter}
        setFilter={setFilter}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
      />
    </>
  );
}

export default FilterableProductTable;
