import React from "react";

import ToDoItem from "./toDoItem";

const ToDoList = props => {
  console.log(props, "coming from todolist");
  //const newArray = Object.keys(props.state);
  return (
    <div>
      {props.state.map(item => {
        return <ToDoItem toggleCompleted={props.toggleCompleted} item={item} />;
      })}
    </div>
  );
};

export default ToDoList;
