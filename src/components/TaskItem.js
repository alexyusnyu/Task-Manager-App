import React, { useState } from "react";
import { updateTask } from "../api";

function TaskItem({ task, onTaskUpdated, onTaskDeleted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  const handleUpdate = async () => {
    const updatedTask = { id: task.id, title: updatedTitle, description: updatedDescription };
    const updated = await updateTask(updatedTask);
    if (updated) {
      onTaskUpdated(task.id, updatedTask);
      setIsEditing(false);
    }
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <div>
            {task.title}
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onTaskDeleted(task.id)}>Delete</button>
          </div>
          <div>{task.description}</div>
        </div>
      )}
    </li>
  );
}

export default TaskItem;
