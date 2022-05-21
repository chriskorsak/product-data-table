function ProductCategoryRow({ category }) {
  return (
    <tr>
      <td className="bold text-center" colSpan="2">
        {category}
      </td>
    </tr>
  );
}

export default ProductCategoryRow;
