import React, { useState, useEffect } from "react";
import { fetchTasks, createTask, updateTask, deleteTask } from "../api"; // Make sure to import the required functions
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm"; // Import the TaskForm component
import "./TaskList.css"; // Import the CSS file

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((data) => setTasks(data));
  }, []);

  const handleTaskAdded = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskUpdated = async (taskId, updatedTask) => {
    // Update task on the UI
    setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));

    // Update task on the API
    await updateTask(updatedTask);
  };

  const handleTaskDeleted = async (taskId) => {
    // Remove task from UI
    setTasks(tasks.filter((task) => task.id !== taskId));

    // Delete task from API
    await deleteTask(taskId);
  };

  return (
    <div className="task-list-container">
      <h1 className="task-list-header">Task List</h1>
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
