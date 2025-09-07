import React  from "react"
import { Link } from "react-router-dom"

const Navbar = () => {

  return (
      <header className="Navbar">
        <div className="logo">
      
        </div>
      <Link to="/" id="Nav" >Home</Link> 
        <Link to="/About" id="Nav">About</Link>
        <Link to="/Contact" id="Nav">Contact</Link>
        <Link to ="/Info" id="Nav">Info</Link>
        <Link to ="/Blog" id="Nav">Blog</Link>
        <Link to="/effect"id="Nav">  Effect</Link>
         <Link to="/Notfound"id="Nav">  ERROR404</Link>
       <a href="/Notfound" id="Nav">ERROR</a>
      </header>       
  )
}
export default Navbar