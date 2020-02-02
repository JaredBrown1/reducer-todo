import React, { useReducer, useState } from "react";
import { initialState, toDoReducer } from "../reducers/index";

const ToDo = () => {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  const [newTaskText, setNewTaskText] = useState("");

  const handleAdd = e => {
    dispatch({ type: "TOGGLE_ADD" });
  };

  const handleChanges = e => {
    setNewTaskText(e.target.value);
  };

  const handleUpdateItem = e => {
    dispatch({ type: "ADD_TASK", payload: newTaskText });
  };

  return (
    <div>
      <h1>To Do List</h1>
      <button style={{ cursor: "pointer" }} onClick={handleAdd}>
        Add item
      </button>
      {!state.completed ? (
        <h1>{state.item}</h1>
      ) : (
        <div>
          <h1>{state.item}</h1>
          <input
            type="text"
            name="newTaskText"
            value={newTaskText}
            onChange={handleChanges}
          />
          <button onClick={handleUpdateItem}>Add Task</button>
        </div>
      )}
    </div>
  );
};

export default ToDo;
