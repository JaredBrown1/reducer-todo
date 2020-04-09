import React, { useState, useReducer } from "react";

import { initialState, toDoReducer } from "../reducers/reducer";

const ToDoList = () => {
  const { toDoState, dispatch } = useReducer(toDoReducer, initialState);
  const [newToDo, setNewToDo] = useState("");

  const handleChanges = (e) => {
    setNewToDo(e.target.value);
  };
};
