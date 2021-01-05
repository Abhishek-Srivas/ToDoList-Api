import React, { useState } from "react";

function TodoForm(props) {
  const [input,setInput] = useState('');

    const submitHandler = (e) => {
        e.preventDefault(); // Stops the refreshing while submitting
        
        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text:input
        });

        setInput('');
    }

    
    const changeHandler = e => {
      setInput(e.target.value);
    };

  return (
    <form className="todo-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Add a Task"
        value={input}
        name="text"
        className="todo-input"
        onChange={changeHandler}
      />
      <button className="todo-button">Add Todo</button>
    </form>
    
  );
}

export default TodoForm;
