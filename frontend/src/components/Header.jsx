import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-gray-300 p-5 top-0 sticky px-2 ml-[20%] z-10">
      <div className="flex gap-10 justify-center">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "font-semibold text-blue-700 underline" : "text-gray-800"
          }>
          Home
        </NavLink>
        <NavLink
          to={"/chats"}
          className={({ isActive }) =>
            isActive ? "font-semibold text-blue-700 underline" : "text-gray-800"
          }>
          Chat
        </NavLink>
        <NavLink
          to={"/users"}
          className={({ isActive }) =>
            isActive ? "font-semibold text-blue-700 underline" : "text-gray-800"
          }>
          Users
        </NavLink>
      </div>
    </div>
  );
}
