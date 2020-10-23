import React from 'react'

function TodoItem({ text, isComplete, handleComplete, id }) {
  return (
    <li
      className={isComplete ? 'completed' : null}
      onClick={handleComplete}
      id={id}
    >
      {text}
    </li>
  )
}

export default TodoItem
