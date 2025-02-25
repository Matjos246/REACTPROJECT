import React, { useState } from 'react';
import AddProduct from './component/AddProduct';
import DisplayProduct from './component/DisplayProduct';

const App = () => {
  const [allProducts, setAllProducts] = useState([]);

  const addProducts = (product) => {
    console.log('New Product:', product);
    setAllProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <>
      <AddProduct addProducts={addProducts} />
      <DisplayProduct allProducts={allProducts} />
    </>
  );
};

export default;
