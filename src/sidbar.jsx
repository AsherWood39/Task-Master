import { MuthootIcon } from "./icons/muthoot";
import { useSidebarStore } from "./store/sidebar";

export function Sidebar() {
  return (
    <div className="bg-primary h-screen flex flex-col ">
      <div className="p-4">
        <MuthootIcon />
      </div>
      <div className=" h-full py-20 px-10">
        <LabelSidebar name="Home" />
        <LabelSidebar name="Task" />
        <LabelSidebar name="Inbox" />
        <LabelSidebar name="Meetings" />
        <LabelSidebar name="Calendar" />
      </div>
      <div>
        <p className="text-center  mt-4">© 2023 Muthoot</p>
      </div>
    </div>
  );
}

function LabelSidebar({ name }) {
  const setState = useSidebarStore((state) => state.setState);
  const state = useSidebarStore((state) => state.state);
  return (
    <>
      <div
        onClick={() => {
          setState(name);
          window.scrollTo(0, 0);
        }}
        className={`font-rubik p-2 hover:cursor-pointer hover:text-danger ${
          state === name ? "font-bold" : ""
        }`}>
        {state === name ? "— " : ""}
        {name}
      </div>
    </>
  );
}
