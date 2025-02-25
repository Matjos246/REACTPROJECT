import React, { useState } from 'react'
const AddProduct = ({addProducts}) => {
     const [productName, setproductName] = useState("");
      const [productPrice, setproductPrice] = useState(0);
      const [productQuantity, setproductQuantity] = useState(0);
      const [productImage, setproductImage] = useState("");
      const [productBrand, setproductBrand] = useState("");
       
  return (
    <>
          <h2>Akinola Store</h2>
      {/* introduce onChange that anythn type in productName will be save/update in its function "setproductName" and for others respectively and the process is called binding */}

      <input
        type="text"
        placeholder="Name of the Product"
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
        onChange={(e) => setproductImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Brand of the product"
        onChange={(e) => setproductBrand(e.target.value)}
      />
      <button onClick={()=>addProducts({productName, productPrice,productQuantity,productImage,productBrand,})}> Add Product</button>
      <hr />
    </>
  )
}

export default AddProduct
