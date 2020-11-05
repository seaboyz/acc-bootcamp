import React from 'react'
import styled from 'styled-components'

const StyleDiv = styled.div`
  border: yellow solid 5px;
  p {
    color: yellow;
  }
`

function Child3() {
  return (
    <StyleDiv>
      <p>I am the Child3 component</p>
    </StyleDiv>
  )
}

export default Child3
