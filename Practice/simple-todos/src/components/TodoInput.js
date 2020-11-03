import React from 'react'

function TodoInput(props) {
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

// function TodoInput(props) {
//   return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
//     onSubmit: props.handleSubmit
//   }, /*#__PURE__*/React.createElement("input", {
//     className: "todo-input",
//     autoComplete: "off",
//     type: "text",
//     name: "newTodo",
//     placeholder: "What needs to be done?",
//     onChange: props.handleChange,
//     value: props.newTodo
//   }), /*#__PURE__*/React.createElement("button", {
//     type: "submit",
//     className: "save-button"
//   }, "SAVE")));
// }

export default TodoInput
