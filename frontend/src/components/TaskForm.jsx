import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, completed: false });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Neue Aufgabe eingeben..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="add-btn">
        Hinzufügen
      </button>
    </form>
  );
}
