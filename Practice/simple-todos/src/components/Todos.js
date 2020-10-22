import React from 'react'
import TodoItem from './TodoItem'

const Todos = props => {
  return (
    <div className='todo-content'>
      {props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          isComplete={todo.isComplete}
        />
      ))}
    </div>
  )
}

export default Todos
