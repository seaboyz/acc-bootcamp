import React, { Component } from 'react'
import './App.css'

const TodoItem = ({ text }) => <li>{text}</li>

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      newTodo: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const todos = [...this.state.todos, this.state.newTodo]
    this.setState({ todos, newTodo: '' })
  }

  render() {
    const todoslist = this.state.todos.map((todo, index) => (
      <TodoItem key={index} text={todo} />
    ))

    return (
      <div className='App'>
        <h1>Simple Todo App</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            className='todo-input'
            autoComplete='off'
            type='text'
            name='newTodo'
            placeholder='What needs to be done?'
            onChange={this.handleChange}
            value={this.state.newTodo}
          />
          <button type='submit' className='save-button'>
            SAVE
          </button>
        </form>
        <div className='todo-content'>
          <ol>{todoslist}</ol>
        </div>
      </div>
    )
  }
}

export default App
