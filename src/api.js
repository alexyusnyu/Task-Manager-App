const API_BASE_URL = "http://localhost:3001/api/v1"; // Adjust the URL accordingly

export async function fetchTasks() {
  const response = await fetch(`${API_BASE_URL}/tasks`);
  const data = await response.json();
  return data;
}

export async function createTask(task) {
  const response = await fetch(`${API_BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return data;
}

export async function updateTask(task) {
  const response = await fetch(`${API_BASE_URL}/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return data;
}

export async function deleteTask(taskId) {
  const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
    method: "DELETE",
  });
  return response.ok;
}
