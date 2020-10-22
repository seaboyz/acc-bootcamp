import React from 'react'

const TodoInput = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          className='todo-input'
          autoComplete='off'
          type='text'
          name='newTodo'
          placeholder='What needs to be done?'
          onChange={props.handleChange}
          value={props.newTodo}
        />
        <button type='submit' className='save-button'>
          SAVE
        </button>
      </form>
    </div>
  )
}

export default TodoInput
