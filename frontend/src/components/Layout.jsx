import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-[20%]">
        <Header />
        <main className="flex-1 p-4 bg-amber-50">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
