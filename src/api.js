const BASE_URL = "http://localhost:3000/api/v1";

export const fetchTasks = async () => {
  const response = await fetch(`${BASE_URL}/tasks`);
  const data = await response.json();
  return data;
};

export const createTask = async (task) => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task }),
  });
  const data = await response.json();
  return data;
};