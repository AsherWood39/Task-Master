import { memo } from "react";

export const InboxCard = memo(function InboxCard({ item }) {
  const {
    title = "",
    sender = "",
    dateAdded = "",
    priority = "",
    description = "",
  } = item || {};

  const priorityColor =
    priority === "high"
      ? "bg-red-700"
      : priority === "medium"
      ? "bg-amber-500"
      : "bg-green-600";

  return (
    <div className="w-full rounded-3xl bg-gray-200/80 p-3 shadow-inner">
      <div className="flex items-start justify-between gap-2 text-sm font-semibold text-gray-800">
        <span className="truncate">{title}</span>
        {priority && (
          <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold text-white ${priorityColor}`}>
            {priority}
          </span>
        )}
      </div>
      <div className="mt-2 grid grid-cols-[90px_1fr] gap-y-1 text-xs text-gray-700">
        <span className="font-semibold">Sender:</span>
        <span className="truncate">{sender || "Unassigned"}</span>
        <span className="font-semibold">Date added:</span>
        <span className="truncate">{dateAdded || ""}</span>
      </div>
      <div className="mt-2 space-y-1">
        <div className="h-2 w-full rounded-full bg-gray-300" />
        <div className="h-2 w-full rounded-full bg-gray-300" />
        {description && (
          <p className="mt-2 text-xs text-gray-700 line-clamp-2">{description}</p>
        )}
      </div>
    </div>
  );
});
