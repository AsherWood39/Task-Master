import { TaskView } from "./views/task-view";
import { useSidebarStore } from "../../store/sidebar-store";
import { MeetingView } from "./views/meeting-view";
import { useShallow } from "zustand/shallow";
import Layout from "./layout";
import CalendarView from "./views/calender-view";


export default function UserHome() {
  const current = useSidebarStore(useShallow((state) => state.current));

  return (
    <Layout>
      {current == "Task" && <TaskView />}
      {current == "Meetings" && <MeetingView />}
      {current == "Calendar" && <CalendarView />}
    </Layout>
  );
}
