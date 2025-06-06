import React, { useState } from 'react'
import axios from 'axios'
const MakeRequest=()=>{
    let url="https://fakestoreapi.com/products"
    const [products, setProducts] = useState([])

    const fetchProducts=()=>{
        axios.get(url)  //this line means axios shld make a get request from the URL (api endpoint of product) and thats make the process ASYNC
.then((response)=>{
    console.log(response.data); 
    setProducts(response.data)  //set products to the response data
})

.catch((err)=>{
    console.log(err);  
})

    }
    return(
        <>
        <h5 className='text-danger'>MakeRequest</h5>
       <button onClick={fetchProducts}>Fetch Product</button>
       {
        products.map((product,index)=>(
            <div>
                <h5>{product.title}</h5>
                <h6>${product.price}</h6>
                <h1><img width={100} height={100} src={product.image} alt="" />
                <button>{product.id}</button> 
                </h1>
                <p>{product.description}</p>
            </div>
        ))
       }
      
        </>
    )
}
export default MakeRequest