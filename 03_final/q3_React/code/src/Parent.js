import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
  const [name, setName] = useState('')

  const handleChange = event => {
    setName({ [event.target.name]: event.target.value })
  }

  return (
    <div>
      <h1>Hello {name}</h1>
      <Child handleChange={handleChange} />
    </div>
  )
}

export default Parent
