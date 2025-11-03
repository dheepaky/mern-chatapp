import { MdDarkMode, MdLightMode } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="min-w-screen md:min-w-fit min-h-screen bg-blue-700 w-[35%] fixed top-0 px-2 text-white ">
      <ul className="space-y-5">
        {/* main header */}
        <li className="flex justify-center gap-3 items-center p-3 ">
          {/* logo */}
          <img
            src="/avatar-placeholder.png"
            alt=""
            className="rounded-full h-10"
          />
          {/* chatapp */}
          <h2 className="font-semibold">ChatWebApp</h2>
        </li>

        {/* user */}
        <li className="font-bold text-xl text-center p-5  bg-blue-600 rounded-md shadow-2xs ">
          <div className="flex items-center justify-between mb-5 ">
            <img
              src="avatar-placeholder.png"
              alt="User Avatar"
              className="rounded-full h-12 w-12"
            />
            <p className="">
              <MdLightMode />
            </p>
          </div>
          <div className="text-[14px]  space-y-1 justify-items-start">
            <p>UserName</p>
            <p>Email@gmail.com</p>
          </div>
        </li>

        {/* options */}
        <li className="hover:bg-blue-500 cursor-pointer p-3 rounded px-10">
          Home
        </li>
        <NavLink
          to={"/chat"}
          className={({ isActive }) =>
            isActive ? "font-semibold text-white underline" : "text-white "
          }>
          Chat
        </NavLink>
        <li className="hover:bg-blue-500 cursor-pointer p-3 rounded px-10">
          About
        </li>
        <li className="hover:bg-red-400 cursor-pointer p-3 rounded px-10  font-semibold">
          Logout
        </li>
      </ul>
    </div>
  );
}
