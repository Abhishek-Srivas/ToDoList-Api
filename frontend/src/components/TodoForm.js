import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  });

  const submitHandler = (e) => {
    e.preventDefault(); // Stops the refreshing while submitting

    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });

    setInput("");
  };

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={submitHandler}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update Task"
            value={input}
            name="text"
            className="todo-input"
            onChange={changeHandler}
            ref={inputFocus}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a Task"
            value={input}
            name="text"
            className="todo-input"
            onChange={changeHandler}
            ref={inputFocus}
          />
          <button className="todo-button">Add Todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
