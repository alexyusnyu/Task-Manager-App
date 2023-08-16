import React, { useState } from "react";
import { createTask } from "../api";
import "./TaskForm.css";

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleTaskSubmit = async (e) => {
    e.preventDefault();

    if (!title) return;

    const newTask = {
      title,
      description,
      dueDate,
    };

    const createdTask = await createTask(newTask);
    onTaskAdded(createdTask);

    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <div className="task-form">
      <h2 className="task-form-title">Add New Task</h2>
      <form onSubmit={handleTaskSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="task-form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="task-form-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          className="task-form-input"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit" className="task-form-button">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
