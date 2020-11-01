import React from 'react'

function Box({ backgroundColor, borderColor, borderStyle, size }) {
  return (
    <div
      style={{
        height: size,
        width: size,
        background: backgroundColor,
        border: 10,
        borderStyle: borderStyle,
        borderColor: borderColor,
        display: 'inline-block',
      }}
    ></div>
  )
}

export default Box
