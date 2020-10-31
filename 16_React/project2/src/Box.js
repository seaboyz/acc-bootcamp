import React from 'react'

function Box(props) {
  return (
    <div
      style={{
        height: 100,
        width: 100,
        background: props.background,
        border: '10px solid',
        borderColor: props.border,
        display: 'inline-block',
      }}
    ></div>
  )
}

export default Box
