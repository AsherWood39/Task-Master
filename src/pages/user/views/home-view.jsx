import { BoardCard } from "../../../components/cards/board-card";

const columns = [
  {
    title: "To do",
    items: [
      { title: "CRM system design", participant: "Azhar", dateAdded: "12/04/2021", priority: "medium" },
      { title: "Statistics", participant: "Artur", dateAdded: "12/04/2021", priority: "low" },
      { title: "Priorities", participant: "Adyl, Artur", dateAdded: "12/04/2021", priority: "high" },
      { title: "CRM system design", participant: "Azhar", dateAdded: "12/04/2021", priority: "medium" },
      { title: "Statistics", participant: "Artur", dateAdded: "12/04/2021", priority: "low" },
    ],
  },
  {
    title: "In progress",
    items: [
      { title: "Notifications", participant: "Artur", dateAdded: "12/04/2021", priority: "low" },
      { title: "Task types", participant: "Adyl", dateAdded: "12/04/2021", priority: "low" },
      { title: "Task types", participant: "Adyl", dateAdded: "12/04/2021", priority: "low" },
      { title: "Task types", participant: "Adyl", dateAdded: "12/04/2021", priority: "low" },
    ],
  },
  {
    title: "Frozen",
    items: [
      { title: "Todoshnik design", participant: "Azhar", dateAdded: "12/04/2021", priority: "low" },
    ],
  },
  {
    title: "Closed",
    items: [],
  },
];

export default function HomeView() {
  return (
    <div className="h-full w-full rounded-2xl overflow-y-auto">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
        <div className="mt-2 h-20 rounded-2xl bg-gray-100 flex items-center gap-4 px-4 overflow-x-auto overflow-y-hidden">
          <div className="h-14 w-24 rounded-xl bg-gray-300 flex-shrink-0" />
          <div className="h-14 w-24 rounded-xl bg-gray-300 flex-shrink-0" />
          <div className="h-14 w-24 rounded-xl bg-gray-300 flex-shrink-0" />
          <div className="h-14 w-24 rounded-xl bg-gray-300 flex-shrink-0" />
          <div className="h-14 w-24 rounded-xl bg-gray-300 flex-shrink-0" />
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="grid grid-cols-4 gap-4">
          {columns.map((col) => (
            <div key={col.title} className="rounded-3xl bg-gray-100 p-4 space-y-3">
              <div className="flex items-center justify-between text-base font-semibold text-gray-800">
                <span>{col.title}</span>
                {col.title === "To do" && (
                  <button className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-sm">
                    +
                  </button>
                )}
              </div>
              {col.items.length === 0 && <div className="text-sm text-gray-500">No items</div>}
              <div className="space-y-3">
                {col.items.map((item, idx) => (
                  <BoardCard key={`${col.title}-${idx}`} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
