import React from 'react'
import uniqid from "uniqid";

function Form({ task, setTask, tasks, setTasks }) {

    const handleChange = (e) => {
        setTask(e.target.value)
      };
    
      const onSubmitTask = (e) => {
        e.preventDefault();
        setTasks([...tasks, { text : task, id : uniqid() }])
        setTask("")
        };

  return (
    <div>
        <form onSubmit={onSubmitTask}>
          <label htmlFor="taskInput">Add Task : </label>
          <input
            type="text"
            id="taskInput"
            value={task}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form