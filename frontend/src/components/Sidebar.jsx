import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

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
        <li className="hover:bg-blue-500 cursor-pointer p-3 rounded px-10">
          <div className="dropdown-container">
            <button onClick={toggleDropdown} className="dropdown-trigger">
              Recent Chats
            </button>
          </div>
          {isOpen && (
            <ul className="dropdown-content space-y-3 mt-2">
              <NavLink
                to={"/user1"}
                className={({ isActive }) =>
                  ` p-3 rounded px-10 hover:bg-blue-500 transition ${
                    isActive ? "font-semibold underline" : ""
                  }`
                }>
                <div className="flex gap-2">
                  <img
                    src="avatar-placeholder.png"
                    alt=""
                    className="rounded-full h-6"
                  />
                  <h2>UserName1</h2>
                </div>

                <h2 className="text-[5px]">last message</h2>
              </NavLink>

              <NavLink
                to={"/user2"}
                className={({ isActive }) =>
                  ` p-3 rounded px-10 hover:bg-blue-500 transition ${
                    isActive ? "font-semibold underline" : ""
                  }`
                }>
                UserName2
              </NavLink>
            </ul>
          )}
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
