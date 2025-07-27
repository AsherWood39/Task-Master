import { memo } from "react";
import { TaskCard } from "../../../components/cards/task-card";

export const TaskView = memo(function TaskView() {
  return (
    <div className= "fixed p-10 h-full flex flex-wrap gap-10 overflow-scroll  justify-center-safe">
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
});
