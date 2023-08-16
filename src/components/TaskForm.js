// src/components/TaskForm.js

import React, { useState } from 'react';
import { createTask } from '../api';
import './TaskForm.css';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      return;
    }

    const newTask = {
      title,
      description,
    };

    createTask(newTask)
      .then(() => {
        setTitle('');
        setDescription('');
      })
      .catch((error) => {
        console.error('Error creating task:', error);
      });
  };

  return (
    <div className="task-form">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
