// src/components/TaskApp.js

import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './TaskApp.css';

function TaskApp() {
  return (
    <div className="task-app">
      <header>
        <h1>Task Manager App</h1>
      </header>
      <main>
        <TaskForm />
        <TaskList />
      </main>
    </div>
  );
}

export default TaskApp;
