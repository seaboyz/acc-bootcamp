import React from 'react'

const Child = props => {
  return (
    <div>
      <input
        type='text'
        placeholder='Please Enter Your Name'
        name='name'
        onChange={props.handleChange}
      />
    </div>
  )
}

export default Child
