import React, { useState } from 'react'
 import AddProduct from './component/AddProduct'
import {Route, Routes, Navigate} from 'react-router-dom';
import Home from './pages.jsx/Home';
import Contact from './pages.jsx/Contact';
import Notfound from './pages.jsx/Notfound';
import About from './pages.jsx/About';
import Navbar from './pages.jsx/Navbar';
import Buttton from './component/Buttton';
import Info from './pages.jsx/Info';
import Admin from './pages.jsx/Admin';
import Student from './pages.jsx/Student';
import UserProfile from './pages.jsx/userProfile';
import Effect from './Effect';
import Blog from './pages.jsx/Blog';
import MakeRequest from './pages.jsx/MakeRequest';
import Footer from './component/Footer';
// const [allProducts, setallProducts] = useState([]);
//if a piece of state is needed in more than one component will simply perform state lifting
const App = () => {
  //    const [allProducts, setallProducts] = useState([]);
  // const addProducts = (product) => {
  //   // Now to push into addProducts willfirst create and obj of product
  //   console.log(product);
  //   setallProducts([...allProducts, product]);
  //   console.log(allProducts);
  // };
  // const delProduct=(index)=>{
  //   let newAllproducts= [...allProducts]
  //   newAllproducts.splice(index,1)
  //   setallProducts(newAllproducts)
  //   console.log(index);   
  // }
  // const editProduct=(index,product)=>{
  //       console.log(index,product);
  //       let newAllproducts= [...allProducts]
  //       newAllproducts.splice(index,1,product)
  //       setallProducts(newAllproducts)
  // }
  const sayHello=()=>{
    alert('Myworld')
  };
  const sayHi=()=>{
    alert("My world of possibilities")
  }
  const sayHey=()=>{
    alert("Congratulations")
  }
  return (
    <>
   <Navbar/>
<Routes>
  <Route path='/addproduct' element={<AddProduct/>}/>
 <Route path='/' element={<Home/>}/>
 <Route path='/home' element={<Home/>}/>
 <Route path='/sp-contact' element={<Contact/>}/>
 <Route path='/contact' element={<Navigate to="/sp-contact"/>}/>
 <Route path='/about' element= {<About/>}/>
 <Route path='/about/:username' element={<UserProfile/>}/>
 <Route path='/Effect' element={<Navigate to='/sp-Effect'/>}/>
 <Route path='/sp-Effect' element={<Effect/>}/>
 <Route path='/info' element={<Info/>}/>
 <Route path='/admin' element={<Admin/>}/>
 <Route path='/admin/student' element={<Student/>}/>
 <Route path='/Blog' element={<Blog/>} />
 <Route path='/Request' element={<MakeRequest/>}/>
 <Route path="*" element= {<Notfound/>}/>
 <Route path='/student' element={<Student/>}/>
</Routes>

<marquee behavior="" direction=""><Buttton title="Antidote" color='btn btn-warning' allStudents={["sola","dayo","ade",'bimbo']} alPlayers={{firstName:"sola"}}sayHelloFromparent={sayHey}/>
<Buttton title='chronicle' color='btn btn-primary' sayHelloFromparent={sayHello}/>
<Buttton title='Genesis' color='btn btn-secondary'sayHelloFromparent={sayHi}/>
</marquee>
<br />
<Footer/>

    </>
  );
};
export default App