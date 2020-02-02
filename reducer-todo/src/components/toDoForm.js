import React, { useState, useReducer } from "react";

const ToDoForm = props => {
  const [newTodo, setNewToDo] = useState("");

  const handleChanges = e => {
    setNewToDo(e.target.value);
  };

  const handleItem = e => {
    e.preventDefault();
    props.addToDo(newTodo);
  };

  return (
    <div>
      <form onSubmit={handleItem}>
        <input onChange={handleChanges} value={newTodo} type="text" />
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default ToDoForm;
