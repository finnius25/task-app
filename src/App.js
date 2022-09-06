import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import TasksList from "./components/TasksList";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskEdit, setTaskEdit] = useState("")
  const [textEdit, setTextEdit ] = useState("")

  return (
    <div>
      <header>
        <h1>Task App</h1>
        <Form
          task={task}
          setTask={setTask}
          tasks={tasks}
          setTasks={setTasks}
        ></Form>
        <TasksList
          task={task}
          setTask={setTask}
          tasks={tasks}
          setTasks={setTasks}
          taskEdit={taskEdit}
          setTaskEdit={setTaskEdit}
          textEdit={textEdit}
          setTextEdit={setTextEdit}
        />
      </header>
    </div>
  );
};

export default App;
