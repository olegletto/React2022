import CreateProduct from './components/CreateProduct';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import Modal from './components/Modal';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';

function App() {
  const {products, error, loading} = useProducts()

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader/>}
      {error && <ErrorMessage error={error}/>}
      {products.map(item => <Product product={item} key={item.id} />)}
      <Modal title="Create new product">
        <CreateProduct/>
      </Modal>
    </div>
  );
}

export default App;
