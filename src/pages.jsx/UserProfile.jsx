import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile=()=>{
    let {username} = useParams()
    // console.log(useParams());
    
    return(
        <>
            <h5 className='text-danger'>
            I'm {username}, a Software and Hardware Engineer I believe in technology. A MERN stack web developer, owning a startup Called JOASYNC Hardware and Software Solution</h5>
        </>
        )
}
export default UserProfile