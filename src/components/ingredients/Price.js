import React from 'react'

const Price = (props) => {
  return (
    <div>
      <p style={{fontWeight: 'normal', paddingTop: '10px', textAlign: 'center'}}>Price: {props.price} soms</p>
    </div>
  )
}

export default Price