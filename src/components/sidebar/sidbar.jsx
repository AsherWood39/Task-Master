
import { LabelSidebar } from "./LabelSidebar";
import { MuthootIcon } from "../../icons/muthoot";
import { useSidebarStore } from "../../store/sidebar-store";
import { useShallow } from "zustand/shallow";

export const Sidebar = function Sidebar( ) {
  const current = useSidebarStore(useShallow((state) => state.current));
  const setCurrent = useSidebarStore(useShallow((state) => state.setCurrent))
  return (
    <div className="bg-primary h-screen flex flex-col ">
      <div className="p-4">
        <MuthootIcon/>
      </div>
      <div className="flex flex-col w-fit h-full py-20 px-10">
        <LabelSidebar name="Home" setCurrent={setCurrent} isCurrent={current === "Home"} />
        <LabelSidebar name="Task" setCurrent={setCurrent} isCurrent={current === "Task"} />
        <LabelSidebar name="Inbox" setCurrent={setCurrent} isCurrent={current === "Inbox"} />
        <LabelSidebar name="Meetings" setCurrent={setCurrent} isCurrent={current === "Meetings"} />
        <LabelSidebar name="Calendar" setCurrent={setCurrent} isCurrent={current === "Calendar"} />
      </div>
      <div>
        <p className="text-center  mt-4">© 2023 Muthoot</p>
      </div>
    </div>
  );
};
