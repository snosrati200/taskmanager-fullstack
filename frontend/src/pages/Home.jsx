import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Home({ tasks, onAdd, onDelete, onToggle }) {
  return (
    <div className="home-container">
      <h1>Task Manager</h1>

      <TaskForm onAdd={onAdd} />

      <TaskList
        tasks={tasks}
        onDelete={onDelete}
        onToggle={onToggle}
      />
    </div>
  );
}
