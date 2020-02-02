import React from "react";

const ToDoItem = props => {
  const handleToggle = e => {
    props.toggleCompleted(props.item);
  };

  //   if (props.item.completed) {
  //     className = +"task/completed";
  //   }

  return (
    <div onClick={handleToggle}>
      <h2>{props.item.item}</h2>
    </div>
  );
};

export default ToDoItem;
