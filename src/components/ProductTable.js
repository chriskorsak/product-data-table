import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable({ products }) {
  // sort products by category
  const sortedProductsByCategory = products
    .slice()
    .sort((a, b) => a.category.localeCompare(b.category));
  // create a 'last category' variable
  let lastCategory;
  // create a 'rows' array to hold category and product rows (made of components)
  const rows = [];
  // loop through products
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
    // add product
    rows.push(<ProductRow product={product} key={product.name} />);
    // update last category
    lastCategory = product.category;
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
