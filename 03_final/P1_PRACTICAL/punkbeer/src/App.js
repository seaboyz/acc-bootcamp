import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import NavigationBar from './components/NavigationBar'
import SearchBar from './components/SearchBar'
import BeerList from './components/BeerList'

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <SearchBar />
        <BeerList />
      </div>
    )
  }
}

export default App
