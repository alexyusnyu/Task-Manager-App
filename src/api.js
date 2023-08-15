const BASE_URL = "http://localhost:3000/api/v1";

export const fetchTasks = async () => {
  const response = await fetch(`${BASE_URL}/tasks`);
  const data = await response.json();
  return data;
};