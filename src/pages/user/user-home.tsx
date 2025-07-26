import { useEffect } from "react";
import { TaskView } from "../../components/views/task-view";
import Layout from "../../layout";
import { useSidebarStore } from "../../store/sidebar";

export default function UserHome() {
  const state = useSidebarStore((state) => state.state);

  return (
    <Layout>
      {state == "Task" && <TaskView />}
    </Layout>
  );
}
