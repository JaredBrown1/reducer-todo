import React, { useReducer } from "react";
import "./App.css";

import { toDoReducer, initialState } from "./reducers/reducer";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/toDoForm";

function App() {
  const [state, dispatch] = useReducer(toDoReducer, initialState);

  const addToDo = (item) => {
    dispatch({ type: "ADD_TASK", payload: item });
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <ToDoForm addToDo={addToDo} />
      <ToDoList state={[state]} />
    </div>
  );
}

export default App;
