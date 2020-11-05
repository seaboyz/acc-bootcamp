import React from 'react'
import './Child1.css'

const divStyle = {
  border: 'solid blue 5px',
}

const pStyle = { color: 'blue' }

function Child1() {
  return (
    <div style={divStyle}>
      <p style={pStyle}>I am the Child1 component</p>
    </div>
  )
}

export default Child1
