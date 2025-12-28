
import { Sidebar } from "../../components/sidebar/sidbar";
import { Topbar } from "../../components/topbar";

export default function Layout({ children }) {
  return (
    <div className="fixed h-screen bg-primary w-screen flex">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <div>
          <Topbar />
        </div>
        <div className="flex-1 overflow-hidden bg-white">{children}</div>
      </div>
    </div>
  );
};

