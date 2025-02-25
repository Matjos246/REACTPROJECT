import React from 'react'

const Button = (props) => {
  return (
    <div className={props.color}>{props.title}</div>
  )
}

export default Button