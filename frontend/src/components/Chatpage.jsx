import { MdArrowBack, MdOutlineSend, MdSend } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import Ripples from "react-ripples";

export default function Chatpage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen rounded-lg">
      {/* Header */}
      <div className="flex md:gap-4 gap-2 items-center shadow p-2 sticky top-0 bg-gray-50 z-10">
        <button
          className="cursor-pointer p-3 rounded-full hover:bg-gray-200 active:bg-gray-300 transition-all"
          onClick={() => navigate(-1)}>
          <MdArrowBack size={24} />
        </button>
        <img
          src="/avatar-placeholder.png"
          alt=""
          className="rounded-full md:h-10 h-8"
        />
        <h2 className="font-semibold">UserName</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 relative overflow-y-auto px-4 space-y-4">
        {/* Background image */}

        <div
          className="fixed inset-0 bg-[url('/chatpage.png')] bg-repeat-round bg-contain  bg-center"
          style={{ opacity: 1, zIndex: -1 }}></div>
        <div
          className="fixed inset-0 bg-gradient-to-b from-[#eafcff]/50 to-[#e0f1f5]/50"
          style={{ zIndex: -1 }}></div>

        {/* Messages content */}
        <div className="relative ">
          <div className="bg-white p-3 rounded-lg shadow w-fit mt-5 mb-5">
            Hello 👋
          </div>

          <div className="bg-[#e3ffd4] text-black p-3 rounded-lg mb-5 shadow w-fit ml-auto">
            Hi there! How are you?
          </div>

          <div className="bg-white p-3 rounded-lg shadow w-fit max-w-72 break-words mb-10 ">
            I’m good, thanks. What about
            you?xsxswwwwwwwazdxeccccccccwsxxswswwwwwwwzaq
          </div>

          <div className="bg-[#e3ffd4] text-black p-3 rounded-lg mb-5 shadow w-fit ml-auto">
            Hi there! How are you?
          </div>
          <div className="bg-white p-3 rounded-lg shadow w-fit max-w-72 break-words mb-10 ">
            I’m good, thanks. What about
            you?xsxswwwwwwwazdxeccccccccwsxxswswwwwwwwzaq
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="bg-gray-50 p-2 rounded-lg flex items-center gap-2 bottom-0 sticky">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-500 cursor-pointer text-white px-2 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700 transition">
          <MdSend size={23} />
        </button>
      </div>
    </div>
  );
}
