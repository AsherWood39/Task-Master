import { useEffect, useState } from "react";
import { MeetingCard } from "../../../components/cards/meeting-card";
import { API_BASE_URL } from "../../../api";

export const MeetingView = () => {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/meetings/`);
        if (!res.ok) throw new Error("Failed to load meetings");
        const data = await res.json();
        const mapped = data.map((m) => ({
          status: "active", // backend has no status; defaulting
          title: m.name || "Meeting",
          description: m.type || "",
          date: m.date_and_time || "",
          admin: m.organizer || "", // organizer is id; name not provided
          priority: "medium", // backend lacks priority; defaulting
          participants: m.participants || [],
        }));
        setMeetings(mapped);
      } catch (err) {
        setError(err.message || "Could not load meetings");
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  if (loading) return <div className="p-10">Loading meetings…</div>;
  if (error) return <div className="p-10 text-red-600">{error}</div>;

  return (
    <div className="fixed p-10 h-full w-full overflow-scroll justify-center-safe">
      {meetings.length === 0 && <div>No meetings found.</div>}
      {meetings.map((meeting, idx) => (
        <MeetingCard key={idx} meeting={meeting} />
      ))}
    </div>
  );
};
