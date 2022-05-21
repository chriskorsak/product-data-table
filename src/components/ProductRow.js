function ProductRow({ product }) {
  return (
    <tr>
      <td className={!product.stocked ? 'out-of-stock' : 'undefined'}>
        {product.name}
      </td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
