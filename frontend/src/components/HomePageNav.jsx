import {
  MdBorderAll,
  MdChat,
  MdGroups,
  MdLightMode,
  MdMenu,
  MdPerson,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function HomePageNav() {
  return (
    <div className="text-white">
      <div className="flex gap-2 justify-between items-center p-1 bg-gray-100">
        <div className="flex items-center gap-2">
          <div className="active:bg-gray-300 md:p-3 p-2 rounded-full hover:bg-gray-200 cursor-pointer transition-all">
            <MdMenu size={22} />
          </div>

          {/* logo img */}
          <div className="flex items-center">
            <img
              src="logo.png"
              alt=""
              className="rounded-full h-10 p-1 w-fit object-cover "
            />
            <span className="Poppins text-[20px] bg-gradient-to-r from-blue-400 to-cyan-400 inline-block text-transparent bg-clip-text">
              ChatWebApp
            </span>
          </div>
        </div>

        {/* theme */}
        <div className="flex items-center">
          <MdLightMode size={22} />
        </div>
      </div>

      {/* nav */}

      <div className=" flex  items-center text-[15px]  md:text-[17px]  justify-between shadow-lg py-5 px-1 sticky top-0 bg-blue-800 z-10 ">
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
            <span className=" text-[15px] md:text-[18px] text-blue-900">
              All
            </span>
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
            <span className=" text-[15px] md:text-[18px]">Chats</span>
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
            <span className=" text-[15px] md:text-[18px]">Users</span>
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
            <MdGroups className="text-2xl text-[18px]" />
            <span className=" text-[15px] md:text-[18px]">Rooms</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
}
