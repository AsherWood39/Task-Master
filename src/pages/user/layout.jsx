
import { Sidebar } from "../../components/sidebar/sidbar";
import { Topbar } from "../../components/topbar";

export default function Layout({ children }) {
  return (
    <div className="fixed h-screen bg-primary w-screen flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div>
          <Topbar />
        </div>
        <div className=" p-5  drop-shadow-xl  bg-white h-full">{children}</div>
      </div>
    </div>
  );
};

