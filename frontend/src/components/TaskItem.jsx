export default function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id, !task.completed)}
      />

      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          marginLeft: "10px",
          flexGrow: 1
        }}
      >
        {task.title}
      </span>

      <button 
        className="delete-btn" 
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </div>
  );
}