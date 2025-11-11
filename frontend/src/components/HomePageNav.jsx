import {
  MdBorderAll,
  MdChat,
  MdGroups,
  MdMenu,
  MdPerson,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function HomePageNav() {
  return (
    <>
      <div className="flex gap-2  items-center text-[14px]  md:text-[18px]  justify-between shadow-lg p-1   bg-gray-100">
        <div className="flex gap-2 items-center">
          <div className="active:bg-gray-300 md:p-3 p-2 rounded-full hover:bg-gray-200 cursor-pointer transition-all">
            <MdMenu size={20} />
          </div>
          <h2>ChatWebApp</h2>
        </div>
      </div>

      <div className="flex gap-2  items-center text-[15px]  md:text-[17px]  justify-between shadow-lg p-5 sticky top-0 bg-gray-100 z-10">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `flex items-center gap-1 hover:scale-105 transition-all duration-300 ${
              isActive
                ? "font-semibold text-blue-700 scale-105"
                : "text-gray-800"
            }`
          }>
          <button
            className={`button-border flex items-center ${
              location.pathname === "/" ? "active" : ""
            }`}>
            <MdBorderAll />
            All
          </button>
        </NavLink>

        <NavLink
          to={"/chats"}
          className={({ isActive }) =>
            `flex items-center gap-1 hover:scale-105 transition-all duration-300 ${
              isActive
                ? "font-semibold text-blue-700 scale-105"
                : "text-gray-800"
            }`
          }>
          <button
            className={`button-border flex items-center ${
              location.pathname === "/chats" ? "active" : ""
            }`}>
            <MdChat />
            Chats
          </button>
        </NavLink>
        <NavLink
          to={"/users"}
          className={({ isActive }) =>
            `flex items-center gap-1 hover:scale-105 transition-all duration-300 ${
              isActive
                ? "font-semibold text-blue-700 scale-105"
                : "text-gray-800"
            }`
          }>
          <button
            className={`button-border flex items-center ${
              location.pathname === "/users" ? "active" : ""
            }`}>
            <MdPerson />
            Users
          </button>
        </NavLink>
        <NavLink
          to={"/rooms"}
          className={({ isActive }) =>
            `flex items-center gap-1 hover:scale-105 transition-all duration-300 ${
              isActive
                ? "font-semibold text-blue-700 scale-105"
                : "text-gray-800"
            }`
          }>
          <button
            className={`button-border flex items-center ${
              location.pathname === "/rooms" ? "active" : ""
            }`}>
            <MdGroups />
            Rooms
          </button>
        </NavLink>
      </div>
    </>
  );
}
