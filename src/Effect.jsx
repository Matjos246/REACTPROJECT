import React, { useEffect } from 'react'
import { useState } from 'react'
const Effect =()=>{
    const [num, setnum] = useState(0)
    const [name, setname] = useState("Ayobami")
    const [nam, setnam] = useState("Joasync")
    const [numb, setnumb] = useState(0)
    useEffect(()=>{
        console.log("THis is running");
        // return()=>{
        //     alert('Are you sure you want to exit')
        // }
        
    })

return(
    <>
    
    <h2 onClick={()=>setnum(num+5)} style={{color:'brown', backgroundColor:'blue'}}>{num}</h2>

        <h2 style={{background:"brown", color:'gainsboro'}} onClick={()=>setname("Joasync")}>{name}</h2>
        <h3 style={{color:'blue'}}>{num}</h3>
        <h1 onClick={()=>setnumb(numb+2)}>{numb}</h1>
    
        <p>The Effect used during the program was very thrilled</p>
       
    </>
)
}
export default Effect