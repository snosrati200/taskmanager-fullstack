import axios from "axios";

const API_URL = "/api/tasks";

const getAuthHeader = () => {
  const token = localStorage.getItem("jwt_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getTasks = () => 
  axios.get(API_URL, { headers: getAuthHeader() });

export const createTask = (task) => 
  axios.post(API_URL, task, { headers: getAuthHeader() });

export const updateTask = (id, task) =>
  axios.put(`${API_URL}/${id}`, task, { headers: getAuthHeader() });

export const deleteTask = (id) =>
  axios.delete(`${API_URL}/${id}`, { headers: getAuthHeader() });