import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen ">
      <Sidebar />
      <div className="flex flex-col flex-1  ">
        <main className="flex-1 px-2 md:ml-[30%]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
