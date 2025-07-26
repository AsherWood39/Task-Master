import { TaskCard } from "../cards/task-card";

export function TaskView() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Task View</h1>
      <TaskCard
        task={{
          title: "Complete Project Report by tommarow",
          assignedBy: "Alice Smith",
          dateAdded: "2023-10-01",
          dueDate: "2023-10-15",
          description: "Prepare the final report for the project and submit it by the due date.",
          priority: "high"
        }}
      />
    </div>
  );
}
