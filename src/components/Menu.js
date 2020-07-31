import React from 'react'

const Menu = (props) => {
  return (
    <div className='Ingredients'>
      <img onClick={props.addClick} src={props.icon} alt="Logo" width='50px'/>
      <p>{props.name}</p>
      <p>x{props.counter}</p>
      <div className='Btn'>
        <button className='btn' onClick={props.removeClick}>X</button>
      </div>
    </div>
  )
}

export default Menu