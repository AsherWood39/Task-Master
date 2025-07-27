import { GroupIcon } from "../../icons/group";
import Button from "../button";

export const MeetingCard = ({ meeting }) => {
  return (
    <div
      className={`p-5 w-full mb-10 flex  gap-10 h-40 rounded-2xl hover:-translate-0.5 hover:shadow-xl transition-all duration-200 shadow-lg bg-card ${
        meeting.status === "active" && "bg-success/35"
      } ${meeting.status === "completed" && "bg-danger/35"} `}>
      <div className="w-92 h-full bg-ctitle rounded-2xl p-5 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-rubik font-medium">{meeting.title}</h2>
          <div className="flex items-center">
            <span
              className={`text-xs w-15 text-center rounded-full font-rubik text-white ${
                meeting.priority === "high"
                  ? "bg-danger"
                  : meeting.priority === "medium"
                  ? "bg-warn"
                  : "bg-success"
              }`}>
              {meeting.priority}
            </span>
          </div>
        </div>
        <div className="">
          <p className="text-sm font-rubik ">
            Admin: {meeting.admin ? meeting.admin : "N/A"}
          </p>
          <p className="text-sm font-rubik">Date added: {meeting.date}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between w-full">
        <div className="flex items-center gap-2">
           {meeting.participants? meeting.participants.length : 0} <GroupIcon /> {meeting.participants ? meeting.participants.slice(0,3).join(", ") : "No participants"}
        </div>
        <p className="text-sm font-rubik text-justify">{meeting.description}</p>
        <div>

        </div>
      </div>

      <div className="flex   min-w-fit justify-between ">
        <Button variant="primary">view Minutes</Button>
      </div>
    </div>
  );
};
