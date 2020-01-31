import React, { useReducer } from "react";
import { initialState, toDoReducer } from "../reducers/index";

const ToDo = () => {
  const [state, dispatch] = useReducer(toDoReducer, initialState);

  return <div>{state.item}</div>;
};

export default ToDo;
