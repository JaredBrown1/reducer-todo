import React, { useReducer } from "react";
import "../App.css";

import { toDoReducer, initialState } from "../reducers/index";

const ToDoItem = props => {
  const [state, dispatch] = useReducer(toDoReducer, initialState);

  const toggleComplete = complete => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: props.item.id });
    console.log(props.item.completed, "from toggle complete handler");
  };
  console.log(props.item, "from item");
  return (
    <div>
      <h2
        className={`item${props.item.completed ? "task" : ""} noselect`}
        state={state}
        onClick={toggleComplete}
      >
        {props.item.item}
      </h2>
    </div>
  );
};

export default ToDoItem;
