import { memo } from "react";

export const BoardCard = memo(function BoardCard({ item }) {
  const {
    title = "",
    participant = "",
    dateAdded = "",
    priority = "",
  } = item || {};

  const priorityColor =
    priority === "high"
      ? "bg-red-700"
      : priority === "medium"
      ? "bg-amber-500"
      : "bg-green-600";

  return (
    <div className="rounded-2xl bg-gray-100 px-4 py-3 shadow-sm">
      <div className="flex items-start justify-between gap-2 text-sm font-semibold text-gray-800">
        <span className="truncate">{title}</span>
        {priority && (
          <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold text-white ${priorityColor}`}>
            {priority}
          </span>
        )}
      </div>
      <div className="mt-2 grid grid-cols-[95px_1fr] gap-y-1 text-xs text-gray-700">
        <span className="font-semibold">Participant:</span>
        <span className="truncate">{participant || ""}</span>
        <span className="font-semibold">Date added:</span>
        <span className="truncate">{dateAdded || ""}</span>
      </div>
    </div>
  );
});
