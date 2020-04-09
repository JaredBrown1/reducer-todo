import React, { useState } from "react";

const ToDoForm = (props) => {
  const [newToDo, setNewToDo] = useState("");

  const handleChanges = (e) => {
    setNewToDo(e.target.value);
  };

  const handleItem = (e) => {
    e.preventDefault();
    props.addToDo(newToDo);
  };

  return (
    <div>
      <form onSubmit={handleItem}>
        <input onChange={handleChanges} value={newToDo} type="text" />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default ToDoForm;
