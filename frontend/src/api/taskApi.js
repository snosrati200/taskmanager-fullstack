// src/api/taskApi.js
import axios from "axios";

const API_URL = "http://localhost:8080/tasks";

// GET all tasks
export const getTasks = () => axios.get(API_URL);

// POST create new task
export const createTask = (task) => axios.post(API_URL, task);

// PUT update with partial object (Spring akzeptiert DTO)
export const updateTask = (id, task) =>
  axios.put(`${API_URL}/${id}`, task);

// DELETE task
export const deleteTask = (id) =>
  axios.delete(`${API_URL}/${id}`);
