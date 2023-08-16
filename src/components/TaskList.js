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

  const handleTaskUpdated = (taskId, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));
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
          <TaskItem
            key={task.id}
            task={task}
            onTaskUpdated={handleTaskUpdated}
            onTaskDeleted={handleTaskDeleted}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;