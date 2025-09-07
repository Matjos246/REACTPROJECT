import React from 'react'

const Buttton = ({title,color,allStudents,sayHelloFromparent}) => {
  console.log(allStudents);
  
  return (
    <>
      <button className={color} onClick={sayHelloFromparent}>{title}</button>
    </>
  )
}

export default Buttton
