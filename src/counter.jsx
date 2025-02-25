import React, { useState } from "react";

import Header from "./component/Header";
import Footer from "./component/Footer";

const App = () => {
  //const[nameOfVariable,functionToChangeVariable] = useState(initialValue)
  //const [first, setfirst] = useState(second) ... DEFAULT FORMAT FOR useState
  //using line 15 (as my variable for line 10)
   const [myNum, setmyNum] = useState(25)
  
  let myStyle = { color: "gray", backgroundColor: "brown" };
  let myGry = { color: 'yellow', backgroundColor: "red"}
  let myDesign = { color: "brown" };
  const myName = "Akinola";
  //let myNum = 40;
   const incre = (inc) => {
     //myNum += inc;
     //now that myNum has been passed and declared using useState , call on setmyNum function
     setmyNum(myNum+inc)
    console.log(myNum);
    displayInc.innerHTML+=  `<p >${myNum}</p>`
    // increment()  //this automatically trigger the function by consistently adding up
 };
  return (
    <>
     
      <Header />
      <h4 style={myGry}>My world of possibilities </h4>
      <h1 className="text-danger bg-primary">HELLO</h1>
      <h2 style={myStyle}>my is {myName}</h2>
      
      
      <h3 className="text-info bg-success">my num is {myNum}</h3>
      <div id='displayInc'></div>
      <h3 >my num is {myNum}</h3>
      <button onClick={()=>incre(5)}>increase</button>
      <Footer />
    </>
  );
};

export default App;
