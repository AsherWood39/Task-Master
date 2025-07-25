import { Sidebar } from "./sidbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <div>{children}</div>
    </div>
  );
}
