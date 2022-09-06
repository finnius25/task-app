import React, { useEffect } from "react";

function Task({
  text,
  todo,
  tasks,
  setTasks,
  taskEdit,
  setTaskEdit,
  textEdit,
  setTextEdit,
}) {
  const editTextHandler = (e) => {
    setTextEdit(e.target.value);
  };
  
  const deleteHandler = () => {
    setTasks(tasks.filter((el) => el.id !== todo.id));
  };

  const editHandler = () => {
    setTaskEdit(todo.id);
  };

  return (
    <div>
      {taskEdit.id === todo.id ? (
        <div>
          <input type="text" onChange={editTextHandler} />
          <button type="button"></button>
        </div>
      ) : (
        <div>
          <li>{text}</li>
          <button type="button" onClick={editHandler}>
            Edit
          </button>
          <button type="button" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default Task;
