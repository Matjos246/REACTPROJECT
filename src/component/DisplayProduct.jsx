import React, { useState } from 'react'
const DisplayProduct = () => {
  const [allProducts, setallProducts] = useState([]);

  const [productName, setproductName] = useState("");
  const [productPrice, setproductPrice] = useState(0);
        const [productQuantity, setproductQuantity] = useState(0);
        const [productImage, setproductImage] = useState("");
        const [productBrand, setproductBrand] = useState("");
      const [currentIndex, setcurrentIndex] = useState(0)
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
          <h3>All products</h3>
           <hr />
          {allProducts.map((product, index) => (
        <div key={index}>
          <h1>Product Brand: {product.productBrand}</h1>
          <h1>{product.productName }</h1>
          <h1>
            <img width={100} height={100} src={product.productImage} alt="" />
          </h1> 
          <h5>ProductQty</h5>
          <button> {product.productQuantity}</button>
          <button onClick={()=>delProduct(index)}>Delete item</button>
          <button data-toggle="modal" data-target="#exampleModal" onClick={()=>setcurrentIndex(index)} >Edit item</button>
        </div>
      ))}
      <hr />
    
{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
    <input
        type="text"
        placeholder={"newProduct name"}
        onChange={(event) => setproductName(event.target.value)}
      />
      <input
        type="text"
        placeholder="newProduct price"
        onChange={(e) => setproductPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="newProduct Quantity"
        onChange={(e) => setproductQuantity(e.target.value)}
      />
      <input
        type="text"
        placeholder="newProduct image"
        onChange={(e) => setproductImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="newProduct brand"
        onChange={(e) => setproductBrand(e.target.value)}
      />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={()=>editProduct(currentIndex,{
          productName,
          productPrice,
          productImage,
          productQuantity,
          productBrand,
        })}data-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
export default DisplayProduct