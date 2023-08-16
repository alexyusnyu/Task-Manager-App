import React, { useState } from "react";
import { updateTask, deleteTask } from "../api";
import "./TaskItem.css"; // Import the CSS file

function TaskItem({ task, onTaskUpdated, onTaskDeleted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleTaskUpdate = async () => {
    const updatedTask = {
      ...task,
      title: updatedTitle,
      description: updatedDescription,
    };

    await updateTask(updatedTask);
    onTaskUpdated(task.id, updatedTask);
    setIsEditing(false);
  };

  const handleTaskDelete = async () => {
    await deleteTask(task.id);
    onTaskDeleted(task.id);
  };

  return (
    <li className="task-item">
      {/* ... rest of your component */}
    </li>
  );
}

export default TaskItem;
