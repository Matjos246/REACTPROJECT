import React from 'react'
import { Link,useNavigate} from 'react-router-dom';

const Notfound = () => {
  let routine=useNavigate()
  const bankTransfer=()=>{
    alert('Successful')
    routine('/')
  }
  return (
    <div>
        <h1 className='text-danger'>Error 404 - NotFound</h1>
      <p>The page you're looking for doesn't exist.</p>
      Lost your way? 
      {/* <h3>Sorry we cant find that page. You will find lots to explore on the homepage</h3> */}
      <Link to="/">Home</Link> <br />
      <button onClick={()=>bankTransfer('/')} className='text-success'>HomePage</button>
    </div>
  )
}

export default Notfound