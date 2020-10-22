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

  handleComplete(id) {
    // use setState to change the state
    // pass a callback function to copy the state and change it and
    // return it
    this.setState(function (state) {
      let indexOfTodo = this.state.todos.findIndex(todo => {
        return todo.id === id
      })
      let foundTodo = this.state.todos[indexOfTodo]
      foundTodo.isComplete = !foundTodo.isComplete
      return state
    })
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
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App
