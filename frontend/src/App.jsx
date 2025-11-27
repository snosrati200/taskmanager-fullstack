import { useEffect, useState } from "react";
import Home from "./pages/Home";
import "./App.css";

import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "./api/taskApi";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const res = await getTasks();
    setTasks(res.data);
  }

  async function addTask(task) {
    const res = await createTask(task);
    setTasks([...tasks, res.data]);
  }

  async function removeTask(id) {
    await deleteTask(id);
    setTasks(tasks.filter((t) => t.id !== id));
  }
 
  async function toggleTask(id, completed) {
  const oldTask = tasks.find((t) => t.id === id);

  const updated = {
    title: oldTask.title,
    completed: completed
  };

  const res = await updateTask(id, updated);

  setTasks(
    tasks.map((t) =>
      t.id === id ? res.data : t
    )
  );
}

 

  return (
    <Home
      tasks={tasks}
      onAdd={addTask}
      onDelete={removeTask}
      onToggle={toggleTask}
    />
  );
}
