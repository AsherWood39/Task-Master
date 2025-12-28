import { useEffect, useState } from "react";
import { InboxCard } from "../../../components/cards/inbox-card";
import { API_BASE_URL } from "../../../api";

const formatDate = (value) => {
  if (!value) return "";
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? "" : d.toLocaleDateString();
};

export const InboxView = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInbox = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/tasks/`);
        if (!res.ok) throw new Error("Failed to load inbox items");
        const data = await res.json();
        const mapped = data.map((t) => ({
          title: t.details?.slice(0, 50) || "Task",
          sender:
            Array.isArray(t.members) && t.members.length
              ? `User ${t.members[0]}`
              : "Unassigned",
          dateAdded: formatDate(t.deadline),
          priority: t.priority || "medium",
          description: t.details || "",
        }));
        setItems(mapped);
      } catch (err) {
        setError(err.message || "Could not load inbox");
      } finally {
        setLoading(false);
      }
    };

    fetchInbox();
  }, []);

  if (loading) return <div className="p-10">Loading inbox…</div>;
  if (error) return <div className="p-10 text-red-600">{error}</div>;

  return (
    <div className="p-6 flex flex-col gap-4 h-full overflow-auto">
      {items.length === 0 && <div>No inbox items found.</div>}
      {items.map((item, idx) => (
        <InboxCard key={idx} item={item} />
      ))}
    </div>
  );
};
