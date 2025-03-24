import React  from "react"
import { Link } from "react-router-dom"
const Navbar = () => {
  
  return (
  
    <div className="Nbar">
      <header className="Navbar">
      <Link to="/" id="Nav" >Home</Link> 
        <Link to="/About" id="Nav">About</Link>
        <Link to="/Contact" id="Nav">Contact</Link>
        <Link to ="/Info" id="Nav">Info</Link>
        <Link to ="/Blog" id="Nav">Blog</Link>
      

      </header>
    </div>
       
        
  
  )
}

export default Navbar