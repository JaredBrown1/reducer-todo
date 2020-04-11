import React from "react";
import ToDoItem from "./toDoItem";
import "../App.css";

const ToDoList = (props) => {
  console.log(props, "coming from todolist");
  //const newArray = Object.keys(props.state);
  return (
    <div>
      {props.state.map((item) => {
        return <ToDoItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ToDoList;
