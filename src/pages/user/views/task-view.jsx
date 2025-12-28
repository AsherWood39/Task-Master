import { memo, useEffect, useState } from "react";
import { TaskCard } from "../../../components/cards/task-card";
import { API_BASE_URL } from "../../../api";

const formatDate = (value) => {
  if (!value) return "";
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? "" : d.toLocaleDateString();
};

export const TaskView = memo(function TaskView() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/tasks/`);
        if (!res.ok) throw new Error("Failed to load tasks");
        const data = await res.json();
        // Map backend shape to card props
        const mapped = data.map((t) => ({
          title: t.details?.slice(0, 60) || "Task",
          assignedBy: Array.isArray(t.members) && t.members.length
            ? `User ${t.members[0]}`
            : "Unassigned",
          dateAdded: "", // backend has no created_at; leaving blank
          dueDate: formatDate(t.deadline),
          description: t.details || "",
          priority: t.priority || "medium",
        }));
        setTasks(mapped);
      } catch (err) {
        setError(err.message || "Could not load tasks");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <div className="p-10">Loading tasks…</div>;
  if (error) return <div className="p-10 text-red-600">{error}</div>;

  return (
    <div className="fixed p-10 h-full flex flex-wrap gap-10 overflow-scroll justify-center-safe">
      {tasks.length === 0 && <div>No tasks found.</div>}
      {tasks.map((task, idx) => (
        <TaskCard key={idx} task={task} />
      ))}
    </div>
  );
});
