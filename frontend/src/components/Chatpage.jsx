import { MdSend } from "react-icons/md";

export default function Chatpage() {
  return (
    <div className="flex flex-col h-full min-w-screen md:min-w-fit rounded-lg  md:ml-[35%]">
      {/* individual Headers */}
      <div className="flex gap-3 items-center shadow-2xs p-5 sticky top-0 bg-gray-100 z-10">
        {/* logo */}
        <img
          src="/avatar-placeholder.png"
          alt=""
          className="rounded-full h-10"
        />
        {/*chat username */}
        <h2 className="font-semibold">UserName</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 space-y-4   bg-amber-100">
        <div className="bg-white p-3 rounded-lg shadow w-fit mt-10">
          Hello 👋
        </div>

        <div className="bg-green-800 text-white p-3 rounded-lg shadow w-fit ml-auto relative">
          Hi there! How are you?
        </div>

        <div className="bg-white p-3 rounded-lg shadow w-fit mb-10">
          I’m good, thanks. What about you?
        </div>
        <div className="bg-white p-3 rounded-lg shadow w-fit mt-10">
          Hello 👋
        </div>

        <div className="bg-green-800 text-white p-3 rounded-lg shadow w-fit ml-auto relative">
          Hi there! How are you?
        </div>

        <div className="bg-white p-3 rounded-lg shadow w-fit mb-10">
          I’m good, thanks. What about you?
        </div>
        <div className="bg-white p-3 rounded-lg shadow w-fit mt-10">
          Hello 👋
        </div>

        <div className="bg-green-800 text-white p-3 rounded-lg shadow w-fit ml-auto relative">
          Hi there! How are you?
        </div>

        <div className="bg-white p-3 rounded-lg shadow w-fit mb-10">
          I’m good, thanks. What about you?
        </div>
      </div>

      {/* Input */}
      <div className="bg-gray-100 p-4 flex items-center gap-2 bottom-0 sticky">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-500 cursor-pointer text-white px-3 py-3 rounded-lg hover:bg-blue-600 active:bg-blue-700 transition">
          <MdSend size={20} />
        </button>
      </div>
    </div>
  );
}
