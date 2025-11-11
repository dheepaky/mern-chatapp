import { useRef, useState } from "react";
import { MdArrowDropDown, MdDarkMode, MdLightMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdArrowDropUp } from "react-icons/md";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const dropdownRef = useRef(null);
  return (
    <div
      className={`min-h-screen md:block hidden w-[30%] fixed top-0 px-2 text-white transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-gray-700" : "bg-blue-800"
      }`}>
      <ul className="space-y-5">
        {/* Header */}
        <li className="flex justify-start gap-2 items-center px-10">
          <img
            src="logo.png"
            alt=""
            className="rounded-full h-15 p-1 w-fit object-cover "
          />
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 inline-block text-transparent bg-clip-text ">
            ChatWebApp
          </h2>
        </li>

        {/* User Info */}
        <li
          className={`font-bold text-xl text-center p-5 rounded-md shadow-2xs ${
            darkMode ? "bg-gray-950 text-gray-400" : "bg-blue-900"
          }`}>
          <div className="flex items-center justify-between mb-5">
            <img
              src="/avatar-placeholder.png"
              alt="User Avatar"
              className="rounded-full h-12 w-12"
            />
            <button onClick={toggleTheme} className="text-2xl">
              {darkMode ? <MdDarkMode /> : <MdLightMode />}
            </button>
          </div>
          <div className="text-[14px] space-y-1 justify-items-start">
            <p>UserName</p>
            <p>Email@gmail.com</p>
          </div>
        </li>

        {/* Dropdown */}
        <li
          ref={dropdownRef}
          className="relative hover:bg-blue-500 cursor-pointer p-3 rounded px-10 transition">
          {/* Trigger */}
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between w-full font-medium">
            <span>Recent Chats</span>
            <span
              className={`transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}>
              <MdArrowDropUp size={22} />
            </span>
          </button>

          {/* Dropdown content */}
          <ul
            className={`overflow-hidden transition-all duration-300 mt-2 space-y-2 ${
              isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}>
            <NavLink
              to="/rooms"
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 rounded-lg hover:bg-blue-50 transition ${
                  isActive ? "font-semibold text-blue-600 bg-blue-200" : ""
                }`
              }>
              <img
                src="avatar-placeholder.png"
                alt="User 1"
                className="rounded-full h-6"
              />
              <div>
                <h2>UserName1</h2>
                <p className="text-[10px] text-gray-500">last message...</p>
              </div>
            </NavLink>

            <NavLink
              to="/user2"
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 rounded-lg hover:bg-blue-100 transition ${
                  isActive ? "font-semibold text-blue-600 bg-blue-50" : ""
                }`
              }>
              <img
                src="avatar-placeholder.png"
                alt="User 2"
                className="rounded-full h-6"
              />
              <div>
                <h2>UserName2</h2>
                <p className="text-[10px] text-gray-500">last message...</p>
              </div>
            </NavLink>
          </ul>
        </li>
        {/* Nav Links */}
        <NavLink
          to={"/chatpage"}
          className={({ isActive }) =>
            `block p-3 rounded px-10 hover:bg-blue-500 transition ${
              isActive ? "font-semibold underline" : ""
            }`
          }>
          Chat
        </NavLink>

        <li className="hover:bg-blue-500 cursor-pointer p-3 rounded px-10">
          About
        </li>

        <li className="hover:bg-red-400 cursor-pointer p-3 rounded px-10 font-semibold">
          Logout
        </li>
      </ul>
    </div>
  );
}
