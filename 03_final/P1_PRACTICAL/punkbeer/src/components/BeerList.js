import React from 'react'
import shortid from 'shortid'
import { CardColumns } from 'react-bootstrap'
import BeerCard from './BeerCard'
import beers from '../beers.js'

function BeerList() {
  return (
    <CardColumns>
      {beers.map(beer => (
        <BeerCard
          key={shortid.generate()}
          img={beer.image_url}
          title={beer.name}
          description={beer.description}
        />
      ))}
    </CardColumns>
  )
}

export default BeerList
