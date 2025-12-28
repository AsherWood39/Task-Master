import { TaskView } from "./views/task-view";
import { useSidebarStore } from "../../store/sidebar-store";
import { MeetingView } from "./views/meeting-view";
import { useShallow } from "zustand/shallow";
import Layout from "./layout";
import CalendarView from "./views/calender-view";
import { ProfileView } from "./views/profile-view";
import { InboxView } from "./views/inbox-view";
import HomeView from "./views/home-view";


export default function UserHome() {
  const current = useSidebarStore(useShallow((state) => state.current));

  return (
    <Layout>
      {current == "Home" && <HomeView />}
      {current == "Task" && <TaskView />}
      {current == "Meetings" && <MeetingView />}
      {current == "Inbox" && <InboxView />}
      {current == "Calendar" && <CalendarView />}
      {current == "Profile" && <ProfileView />}
    </Layout>
  );
}
