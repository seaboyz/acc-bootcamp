import React from 'react'

function TodoItem({ text, isComplete, handleComplete, id, handleDelete }) {
  return (
    <li
      className={isComplete ? 'completed' : null}
      onClick={handleComplete}
      id={id}
    >
      {text}
      <span onClick={handleDelete} id={id}>
        X
      </span>
      {/* <span onClick={handleDelete}>X</span> */}
    </li>
  )
}

export default TodoItem
