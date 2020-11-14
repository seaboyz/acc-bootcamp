import React, { Component } from 'react'

import Child from './Child'

class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <Child handleChange={this.handleChange} name={this.state.name} />
      </div>
    )
  }
}

export default Parent
