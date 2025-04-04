import React, { useState } from 'react'
import AddProduct from './component/AddProduct'
import DisplayProduct from './component/DisplayProduct'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
// const [allProducts, setallProducts] = useState([]);
//if a piece of state is needed in more than one component will simply perform state lifting
const App = () => {
   const [allProducts, setallProducts] = useState([]);
  const addProducts = (product) => {
    // Now to push into addProducts willfirst create and obj of product
    console.log(product);
    setallProducts([...allProducts, product]);
    console.log(allProducts);
  };
  const delProduct=(index)=>{
    let newAllproducts= [...allProducts]
    newAllproducts.splice(index,1)
    setallProducts(newAllproducts)
    console.log(index);   
  }
  const editProduct=(index,product)=>{
        console.log(index,product);
        let newAllproducts= [...allProducts]
        newAllproducts.splice(index,1,product)
        setallProducts(newAllproducts)
  }
  return (
    <>
<Routes>
  <Route path='/addproduct' element={<AddProduct/>}/>
 <Route path='/home' element={<Home/>}/>
 <Route path='/contact' element={<Contact/>}/>
 {/* <Route path="*" element= {<Notfound/>}/> */}
</Routes>
<AddProduct addProducts={addProducts}/>
<DisplayProduct allProducts={allProducts} delProduct={delProduct} editProduct={editProduct}/>

    </>
  );
};
export default 