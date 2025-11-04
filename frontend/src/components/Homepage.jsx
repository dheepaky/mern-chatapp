import { MdBorderAll, MdChat, MdGroups, MdPerson } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function HomepageNav() {
  return (
    <div className="flex gap-2  items-center text-[14px]  md:text-[17px]  justify-between shadow-lg p-6 sticky top-0 bg-gray-100 z-10">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `flex items-center gap-1 hover:scale-105 transition-all duration-300 ${
            isActive
              ? "transition-all duration-300 font-semibold underline-offset-8 text-blue-700 underline scale-105"
              : "text-gray-800 "
          }`
        }>
        <MdBorderAll />
        All
      </NavLink>
      <NavLink
        to={"/chats"}
        className={({ isActive }) =>
          `flex items-center gap-1 hover:scale-105 transition-all duration-300 ${
            isActive
              ? "transition-all duration-300 font-semibold underline-offset-8 text-blue-700 underline scale-105"
              : "text-gray-800 "
          }`
        }>
        <MdChat />
        Chats
      </NavLink>
      <NavLink
        to={"/users"}
        className={({ isActive }) =>
          `flex items-center gap-1 hover:scale-105 transition-all duration-300 ${
            isActive
              ? "transition-all duration-300 font-semibold underline-offset-8 text-blue-700 underline scale-105"
              : "text-gray-800 "
          }`
        }>
        <MdPerson />
        Users
      </NavLink>
      <NavLink
        to={"/rooms"}
        className={({ isActive }) =>
          `flex items-center gap-1 hover:scale-105 transition-all duration-300 ${
            isActive
              ? "transition-all duration-300 font-semibold underline-offset-8 text-blue-700 underline scale-105"
              : "text-gray-800 "
          }`
        }>
        <MdGroups />
        Rooms
      </NavLink>
    </div>
  );
}
