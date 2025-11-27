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
        }}
      >
        {task.title}
      </span>

      <button onClick={() => onDelete(task.id)}>Löschen</button>
    </div>
  );
}
