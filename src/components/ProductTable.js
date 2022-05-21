import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable({
  products,
  filter,
  setFilter,
  inStockOnly,
  setInStockOnly,
}) {
  // sort products by category
  const sortedProductsByCategory = products
    .slice()
    .sort((a, b) => a.category.localeCompare(b.category));
  // create a 'last category' variable
  let lastCategory;
  // create a 'rows' array to hold category and product rows (made of components)
  const rows = [];
  // loop through products, add category row or product row to rows array based on below logic
  sortedProductsByCategory.forEach(product => {
    // add category row if 'last category' is not same as current product category
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    // update last category
    lastCategory = product.category;
    // conditional rendering based on in stock status
    if (inStockOnly && !product.stocked) return;
    // conditional rendering based on filter/search
    if (!product.name.toLowerCase().includes(filter.toLowerCase())) return;
    rows.push(<ProductRow product={product} key={product.name} />);
  });

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th className="bold text-center">Name</th>
          <th className="bold text-center">Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
