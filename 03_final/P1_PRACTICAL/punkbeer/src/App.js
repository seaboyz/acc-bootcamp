import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import NavigationBar from './components/NavigationBar'
import SearchBar from './components/SearchBar'
import BeerList from './components/BeerList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: [],
      favorites: [],
      search: '',
    }
    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          beers: data,
        })
      })
      .catch(err => {
        console.log('Issue with fetching data from api', err)
      })
  }
  render() {
    return (
      <div>
        <NavigationBar />
        <SearchBar
          search={this.state.search}
          handleChange={this.handleChange}
        />
        <BeerList beers={this.state.beers} />
      </div>
    )
  }
}

export default App
