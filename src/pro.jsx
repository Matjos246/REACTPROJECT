import React from 'react'

const product = () => {
  return (
    <div>
import React, { useState } from "react";
// To create ecomm website
// 1. create  the input and the variable
// 2. Binding input with the variable
// 3. Store data into the array
// 4. Display the data from the Array

const App = () => {
  //const[nameOfVariable,functionToChangeVariable] = useState(initialValue)
  // and this is usestate snippet
  
  const [productName, setproductName] = useState("");
  const [productPrice, setproductPrice] = useState(0);
  const [productQuantity, setproductQuantity] = useState(0);
  const [productImage, setproductImage] = useState("");
const [productBrand, setproductBrand] = useState('')
  const [allProducts, setallProducts] = useState([]);
  
 
  
  //  const test=(e)=>{
  //   console.log(e)
  //event.target == document.getElementById('') and thats what the user type
  // }
  const addProducts=()=>{
    // Now to push into addProducts willfirst create and obj of product
let product={
  productName,
  productPrice,    
  productQuantity,
  productImage,
  productBrand
}
console.log(product);
setallProducts([...allProducts,product])
console.log(allProducts);

  }
  return (
    <>
      <h2>Akinola Store</h2>
      {/* introduce onChange that anythn type in productName will be save/update in its function "setproductName" and for others respectively and the process is called binding */}

      <input
        type="text"
        placeholder="Enter the productName"
        onChange={(event) => setproductName(event.target.value)}
      />

      <input
        type="text"
        placeholder="Price of the Product"
        onChange={(e) => setproductPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Quantity of the product"
        onChange={(e) => setproductQuantity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image of the product"
        onChange={(e)=>setproductImage(e.target.value)}
        
      />
      <input type="text" placeholder="Brand of the product" onChange={(e)=>setproductBrand(e.target.value)}/>
      <button onClick={addProducts}> Add Product</button>
     <hr />
      <h3>All products</h3>
        {allProducts.map((product,index)=>(
          <div>
              <h1>{product.productName}</h1>
              <h1>{product.productQuantity}</h1>
              <h1>{product.productPrice}</h1>
            <h1><img width={100} height={100} src={product.productImage} alt="" /></h1>
            <button>Delete item</button>
            <button>Edit item</button>
          </div>
            
            
        ))}
      <hr />
    </>
  );
};

export default App;


    </div>
  )
}

export default product