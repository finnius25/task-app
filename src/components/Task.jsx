import React from "react";

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
    setTaskEdit((prevTaskEdit) => !prevTaskEdit);
  };

  const updateHandler = () => {
    todo.text = textEdit
    setTaskEdit(prevState => !prevState)
  }



  return (
    <div>
      {taskEdit ? (
        <div>
          <input type="text" onChange={editTextHandler} />
        </div>
      ) : (
        <div>
          <li>{text}</li>
        </div>
      )}
      <button type="button" onClick={updateHandler}>Update</button>
      <button type="button" onClick={editHandler}>
        Edit
      </button>
      <button type="button" onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
}

export default Task;
