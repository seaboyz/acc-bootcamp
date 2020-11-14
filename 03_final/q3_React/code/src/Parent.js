import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {

  const [name, setName] = useState('')

  return (
    <div>
      <h1>Hello {name}</h1>
      <Child />
    </div>
  )
}

export default Parent