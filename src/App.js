import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './components/ItemList';
import products from './data/products';

function App() {
  return (
    <div className="App">
      <h1 className='text-center'>Product cards</h1>
      <ItemList products={products} />
    </div>
  );
}

export default App;
