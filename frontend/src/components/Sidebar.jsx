export default function Sidebar() {
  return (
    <div className="min-h-screen bg-gray-200 w-[20%] fixed top-0 left-0">
      <ul className="space-y-5 p-5">
        <li className="font-bold text-xl text-center p-3 bg-gray-100 rounded">
          <div className="flex items-center justify-between mb-5">
            <img
              src="https://via.placeholder.com/50"
              alt="User Avatar"
              className="rounded-full h-12 w-12"
            />
            <p className="text-sm text-gray-700">Dark Mode</p>
          </div>
          <div className="text-[14px] text-black space-y-1">
            <p>UserName</p>
            <p>Email@gmail.com</p>
          </div>
        </li>
        <li className="hover:bg-green-300 cursor-pointer p-3 rounded px-10">
          Home
        </li>
        <li className="hover:bg-green-300 cursor-pointer p-3 rounded px-10">
          Settings
        </li>
        <li className="hover:bg-green-300 cursor-pointer p-3 rounded px-10">
          About
        </li>
        <li className="hover:bg-red-400 cursor-pointer p-3 rounded px-10 text-black font-semibold">
          Logout
        </li>
      </ul>
    </div>
  );
}
