import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTasks, createTask, deleteTask, updateTask } from '../api/taskApi';
import { logout } from '../api/authApi';
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            const res = await getTasks();
            setTasks(res.data);
        } catch (err) {
            console.error("Failed to load tasks", err);
            // If token is invalid, force logout
            if (err.response && err.response.status === 403) {
                handleLogout();
            }
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const addTask = async (task) => {
        try {
            const res = await createTask(task);
            setTasks([...tasks, res.data]);
        } catch (err) {
            console.error("Error adding task", err);
        }
    };

    const removeTask = async (id) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter((t) => t.id !== id));
        } catch (err) {
            console.error("Error deleting task", err);
        }
    };

    const toggleTask = async (id, completed) => {
        try {
            const oldTask = tasks.find((t) => t.id === id);
            const updated = {
                title: oldTask.title,
                completed: completed
            };
            const res = await updateTask(id, updated);
            setTasks(tasks.map((t) => t.id === id ? res.data : t));
        } catch (err) {
            console.error("Error updating task", err);
        }
    };

    return (
        <div className="home-container">
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Task Manager</h1>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </header>

            <TaskForm onAdd={addTask} />

            <TaskList
                tasks={tasks}
                onDelete={removeTask}
                onToggle={toggleTask}
            />
        </div>
    );
}