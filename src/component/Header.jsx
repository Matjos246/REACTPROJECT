import React from 'react'

const Header = ({color,title,allStudents}) => {
  console.log(allStudents);
  
  return (
    <div className={color}> {title} </div>
    
  )
}

export default Header