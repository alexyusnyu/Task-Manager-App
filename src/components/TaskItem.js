import React, { useState } from "react";
import { updateTask, deleteTask } from "../api";
import "./TaskItem.css";

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
      {isEditing ? (
        <div className="task-item-edit-form">
          <input
            type="text"
            className="task-item-input"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            className="task-item-textarea"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <div className="task-item-actions">
            <button className="task-item-save-button" onClick={handleTaskUpdate}>
              Save
            </button>
            <button className="task-item-cancel-button" onClick={handleEditToggle}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="task-item-content">
          <div className="task-item-title">{task.title}</div>
          <div className="task-item-description">{task.description}</div>
          <div className="task-item-due-date">Due: {task.dueDate}</div>
          <div className="task-item-actions">
            <button className="task-item-edit-button" onClick={handleEditToggle}>
              Edit
            </button>
            <button className="task-item-delete-button" onClick={handleTaskDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default TaskItem;
