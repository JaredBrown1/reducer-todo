import React, { useReducer } from "react";
import "./App.css";

import { toDoReducer, initialState } from "./reducers/index";
import ToDoList from "./components/toDoList";
import ToDoForm from "./components/toDoForm";

function App() {
  const [state, dispatch] = useReducer(toDoReducer, initialState);

  const addToDo = item => {
    dispatch({ type: "ADD_TASK", payload: item });
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoForm addToDo={addToDo} />
      <ToDoList state={state} />
    </div>
  );
}

export default App;
