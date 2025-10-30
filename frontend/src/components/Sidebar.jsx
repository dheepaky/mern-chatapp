export default function Sidebar() {
  return (
    <div className="min-h-screen bg-green-400 p-2 fixed">
      <ul className="py-5 space-y-6 bg-amber-200 p-5 rounded-xl shadow-md">
        <li className="font-bold text-xl text-center">Profile Logo</li>
        <li className="hover:bg-green-300 cursor-pointer p-2 rounded">Home</li>
        <li className="hover:bg-green-300 cursor-pointer p-2 rounded">
          Settings
        </li>
        <li className="hover:bg-green-300 cursor-pointer p-2 rounded">About</li>
        <li className="hover:bg-red-400 cursor-pointer p-2 rounded text-white font-semibold">
          Logout
        </li>
      </ul>
    </div>
  );
}
