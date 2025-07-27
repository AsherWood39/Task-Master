import { TaskView } from "./views/task-view";

import { useSidebarStore } from "../../store/sidebar-store";
import { MeetingView } from "./views/meeting-view";
import { useShallow } from "zustand/shallow";
import Layout from "./layout";


export default function UserHome() {
  const current = useSidebarStore(useShallow((state) => state.current));

  return (
    <Layout>
      {current == "Task" && <TaskView />}
      {current == "Meetings" && <MeetingView />}
    </Layout>
  );
}
