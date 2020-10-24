import React from 'react'
import TodoItem from './TodoItem'

function Todos(props) {
  return (
    <div className='todo-content'>
      {props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          isComplete={todo.isComplete}
          handleComplete={props.handleComplete}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  )
}

export default Todos
