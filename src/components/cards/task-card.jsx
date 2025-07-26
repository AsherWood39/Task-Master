import ProgressBar from "../progressbar";

export function TaskCard({ task }) {
  return (
    <div className="bg-card p-5 rounded-xl shadow-lg shadow-secondary w-72 h-72  ">
      {/* title */}
      <div className="bg-ctitle rounded-xl py-3 px-5">
        <div className="flex justify-between  h-full items-center">
          <h2 className="font-bold mb-2 text-sm h-fit">{task.title}</h2>
          <h2
            // priority
            className={`${task.priority === "high" && "bg-danger"} ${
              task.priority === "medium" && "bg-warning"
            } ${
              task.priority === "low" && "bg-success"
            } text-xs text-white  mb-2 px-3 rounded-full h-fit`}>
            {task.priority}
          </h2>
        </div>
        <p className="text-xs ">Assigned by: {task.assignedBy}</p>
        <p className="text-xs ">Date added: {task.dateAdded}</p>
        <p className="text-xs ">Due Date: {task.dueDate}</p>
      </div>
      <ProgressBar progress={75} />

      {/* description */}
      <div>
        <p className="text-xs font-bold mb-2">Description</p>
        <p className="text-xs text-gray-600 mb-2">{task.description}</p>
      </div>
    </div>
  );
}
