import products from './data/data';
import FilterableProductTable from './components/FilterableProductTable';

function App() {
  return (
    <div className="container">
      <FilterableProductTable products={products} />
    </div>
  );
}

export default App;
