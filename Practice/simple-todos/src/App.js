import React, { Component } from 'react'
import './App.css'

import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import Todos from './components/Todos'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      newTodo: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleComplete = this.handleComplete.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const todos = [
      ...this.state.todos,
      {
        id: Date.now(),
        text: this.state.newTodo,
        isComplete: false,
      },
    ]
    this.setState({ todos, newTodo: '' })
  }

  // handleComplete(event) {
  //   // use setState to change the state
  //   // pass a callback function to copy the state and change it and
  //   // return it
  //   let id = event.target.id
  //   this.setState(function (cloneOfState) {
  //     let indexOfTodo = cloneOfState.todos.findIndex(
  //       todo => todo.id === parseInt(id)
  //     )
  //     let foundTodo = cloneOfState.todos[indexOfTodo]
  //     foundTodo.isComplete = !foundTodo.isComplete
  //     return foundTodo
  //   })
  // }
  handleComplete(event) {
    // use setState to change the state
    // pass updated object to update the state
    let id = event.target.id
    let indexOfTodo = this.state.todos.findIndex(
      todo => todo.id === parseInt(id)
    )
    let foundTodo = this.state.todos[indexOfTodo]
    foundTodo.isComplete = !foundTodo.isComplete
    console.log(foundTodo)
    this.setState(foundTodo)
  }

  render() {
    return (
      <div className='App'>
        <TodoHeader />
        <TodoInput
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTodo={this.state.newTodo}
        />
        <Todos todos={this.state.todos} handleComplete={this.handleComplete} />
      </div>
    )
  }
}

export default App
