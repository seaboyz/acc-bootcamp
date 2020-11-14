import React from 'react'
import { Card } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BeerCard(props) {
  return (
    <Card className='mx-auto'>
      <Card.Img
        className='mt-4'
        variant='top'
        src={props.img}
        style={{ width: '10rem', height: '15rem' }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default BeerCard
