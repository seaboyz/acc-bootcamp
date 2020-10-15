import React, { Component } from 'react'
import './Recipe.css'

class Recipe extends Component {
  render() {
    const { title, img, instructions } = this.props
    const ingredients = this.props.ingredients.map((ingredient, index) => (
      <li key={index}>{ingredient}</li>
    ))
    return (
      <div className='recipe-card'>
        <div className='recipe-card-image'>
          <img src={img} alt={title}></img>
        </div>
        <div className='recipe-card-content'>
          <h3 className='recipe-title'>{title}</h3>
          <h4>Ingredients:</h4>
        </div>
        <ul>{ingredients}</ul>
        <h4>instructions:</h4>
        <p>{instructions}</p>
      </div>
    )
  }
}

export default Recipe
