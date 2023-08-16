// src/components/TaskItem.js

import React from 'react';
import './TaskItem.css';

function TaskItem({ task }) {
  return (
    <div className="task-item">
      <h3 className="task-title">{task.title}</h3>
      <p className="task-description">{task.description}</p>
      <p className="task-due-date">Due Date: {task.due_date}</p>
      <div className="task-details">
        <p className={`task-priority priority-${task.priority}`}>
          Priority: {task.priority}
        </p>
        <p className={`task-status ${task.completed ? 'completed' : 'not-completed'}`}>
          {task.completed ? 'Completed' : 'Not Completed'}
        </p>
      </div>
    </div>
  );
}

export default TaskItem;
