import React from 'react'

function Box(props) {
  return (
    <div
      style={{
        width: 150,
        height: 150,
        margin: '10px auto',
        background: props.color,
      }}
    ></div>
  )
}

export default Box
