import React from 'react'

function Box(props) {
  return (
    <div
      style={{
        height: 100,
        width: 100,
        background: props.backgroundColor,
        border: 10,
        borderStyle: props.borderStyle,
        borderColor: props.borderColor,
        display: 'inline-block',
      }}
    ></div>
  )
}

export default Box
