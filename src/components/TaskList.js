import React, { useState, useEffect } from "react";
import { fetchTasks } from "../api";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((data) => setTasks(data));
  }, []);

  const handleTaskAdded = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskDeleted = async (taskId) => {
    // Remove task from UI
    setTasks(tasks.filter((task) => task.id !== taskId));

    // Delete task from API
    // Implement the deleteTask function in api.js
  };

  return (
    <div>
      <h1>Task List</h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => handleTaskDeleted(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;