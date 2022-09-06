import React from "react";
import Task from "./Task";

const TasksList = ({ tasks, setTasks, taskEdit, setTaskEdit, textEdit, setTextEdit }) => {
  return (
    <div>
      {tasks.map((todo) => (
        <Task
          key={todo.id}
          text={todo.text}
          todo={todo}
          tasks={tasks}
          setTasks={setTasks}
          taskEdit={taskEdit}
          setTaskEdit={setTaskEdit}
          textEdit={textEdit}
          setTextEdit={setTextEdit}
        />
      ))}
    </div>
  );
};

export default TasksList;
