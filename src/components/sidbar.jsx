import { MuthootIcon } from "../icons/muthoot";
import { useSidebarStore } from "../store/sidebar";

export function Sidebar() {
  return (
    <div className="bg-primary h-screen flex flex-col ">
      <div className="p-4">
        <MuthootIcon />
      </div>
      <div className="flex flex-col w-fit h-full py-20 px-10">
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
        className="relative inline-block w-fit font-rubik m-2 hover:cursor-pointer hover:text-danger hover:text-shadow-xl  transition-all duration-200 group">
        <span className={state === name ? "font-bold" : ""}>
          {state === name ? "— " : ""}
          {name}
        </span>

        {/* Underline */}
        {state !== name && (
          <span className="absolute -bottom-[1px] left-0 h-[2px] bg-danger w-0 group-hover:w-full transition-all duration-300"></span>
        )}
      </div>
    </>
  );
}
