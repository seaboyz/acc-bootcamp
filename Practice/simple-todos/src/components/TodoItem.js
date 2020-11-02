import React from 'react'

function TodoItem({ text, isComplete, handleComplete, id, handleDelete }) {
  return (
    <li
      className={isComplete ? 'completed' : null}
      onClick={function (e) {
        //pass event with parameter
        return handleComplete(e, id)
      }}
      id={id}
    >
      {text}
      <span
        onClick={function (e) {
          //pass event with parameter
          return handleDelete(e, id)
        }}
        id={id}
      >
        X
      </span>
      {/* <span onClick={handleDelete}>X</span> */}
    </li>
  )
}

export default TodoItem
