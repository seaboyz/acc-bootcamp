import React, { Component } from 'react'
import './App.css'
import Navbar from './Navbar'
import RecipeList from './RecipeList'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <RecipeList />
      </div>
    )
  }
}

export default App
