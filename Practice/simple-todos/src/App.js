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
    this.handleDelete = this.handleDelete.bind(this)
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

  /* ****************************************** */
  // no copy
  // using updater funtion
  handleComplete(event) {
    let id = event.target.id
    this.setState(
      // state is a reference to the component state at the time the change is being applied. It should not be directly mutated. Instead, changes should be represented by building a new object based on the input from state and props.
      // without building a new object, updater funtion at the strict mode will run twice, cause boolean toggle back to what it was.
      // updater funtion should be pure. without side effect.
      function (copyOfState) {
        let indexOfTodo = copyOfState.todos.findIndex(
          todo => todo.id === parseInt(id)
        )
        console.log('previous state', copyOfState)
        let foundTodo = copyOfState.todos[indexOfTodo]
        console.log('foundTodo', foundTodo)
        foundTodo.isComplete = !foundTodo.isComplete
        console.log('current state', copyOfState)
        console.log(this.state)
        return copyOfState
      },
      () => {
        console.log('this.state', this.state)
      }
    )
  }

  /* ****************************************** */
  /*   // shallow copy changing the original state(change todo array )
  // using updater funtion
  handleComplete(event) {
    let id = event.target.id
    this.setState(
      function (state) {
        // let cloneOfState = { ...this.state }
        let cloneOfState = Object.assign({}, state)
        let indexOfTodo = cloneOfState.todos.findIndex(
          todo => todo.id === parseInt(id)
        )
        let foundTodo = cloneOfState.todos[indexOfTodo]
        console.log('state', state)
        foundTodo.isComplete = !foundTodo.isComplete
        console.log('state', state)
        console.log('cloneOfState', cloneOfState)
        return cloneOfState
      },
      () => {
        console.log('current state', this.state)
      }
    )
  } */

  /* ****************************************** */
  /*  // deep copy changing the original state(change todo array )
  // using updater funtion
  handleComplete(event) {
    let id = event.target.id
    this.setState(
      function (state) {
        // let cloneOfState = { ...this.state }
        let cloneOfState = JSON.parse(JSON.stringify(this.state))
        let indexOfTodo = cloneOfState.todos.findIndex(
          todo => todo.id === parseInt(id)
        )
        let foundTodo = cloneOfState.todos[indexOfTodo]
        foundTodo.isComplete = !foundTodo.isComplete
        console.log('previous state', state)
        console.log('cloneOfState', cloneOfState)
        return cloneOfState
      },
      () => {
        console.log('current state', this.state)
      }
    )
  } */

  /* ****************************************** */
  /*   // shallow copy changing the original state(change todo array )
  // using updater funtion
  handleComplete(event) {
    let id = event.target.id
    this.setState(function (state) {
      // let cloneOfState = { ...this.state }
      let cloneOfState = Object.assign({}, state)//this is just a shawlow copy
      let indexOfTodo = cloneOfState.todos.findIndex(
        todo => todo.id === parseInt(id)
      )
      let foundTodo = cloneOfState.todos[indexOfTodo]
      foundTodo.isComplete = !foundTodo.isComplete
      console.log('previous state', state)
      console.log('cloneOfState', cloneOfState)
      return cloneOfState
    },() => {
        console.log('current state', this.state)
      })
  } */

  /* ****************************************** */
  /*  // shallow copy changing the original state(change todo array )
  // use updater object
  handleComplete(event) {
    // use setState to change the state
    // pass updated object to update the state
    let id = event.target.id
    // let cloneOfState = { ...this.state }
    let cloneOfState = Object.assign({}, this.state)
    let indexOfTodo = cloneOfState.todos.findIndex(
      todo => todo.id === parseInt(id)
    )
    let foundTodo = cloneOfState.todos[indexOfTodo]
    foundTodo.isComplete = !foundTodo.isComplete
    console.log('previous state', this.state)
    console.log('cloneOfState', cloneOfState)
    this.setState(cloneOfState, () => {
      console.log('current state', this.state)
    })
  } */
  /* ****************************************** */
  /* // deep copy to clone of state
// without changing the original state
  handleComplete(event) {
    // use setState to change the state
    // pass updated object to update the state
    let id = event.target.id
    let cloneOfState = JSON.parse(JSON.stringify(this.state))
    let indexOfTodo = cloneOfState.todos.findIndex(
      todo => todo.id === parseInt(id)
    )
    let foundTodo = cloneOfState.todos[indexOfTodo]
    foundTodo.isComplete = !foundTodo.isComplete
    console.log('previous state', this.state)
    console.log('cloneOfState', cloneOfState)
    this.setState(cloneOfState, () => console.log("current state",this.state))
  } */

  handleDelete = event => {
    event.stopPropagation()
    let id = event.target.id
    this.setState(
      state => {
        // filter through current todos and return everything that is not equal
        // to id
        let newTodos = state.todos.filter(todo => {
          return todo.id != id
        })
        console.log(state)
        console.log(newTodos)
        // overwrites the todos property
        // equivelent let newState = {}
        // newState.todos = {id:123, text:"xxx", isComplete:false}
        // newState.todos = newTodos
        // overWrite the first newState.todos
        let newState = { ...state, todos: newTodos }
        console.log(this.state)
        return newState
      },
      () => {
        console.log(this.state)
      }
    )
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
        <Todos
          todos={this.state.todos}
          handleComplete={this.handleComplete}
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}

export default App
