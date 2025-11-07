import { MdArrowBack, MdSend } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Chatpage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full rounded-lg  ">
      {/* individual Headers */}
      <div className="flex md:gap-4 gap-2  items-center shadow-2xs p-2 sticky top-0 bg-gray-50 z-10">
        {/* logo */}
        <button
          className="cursor-pointer p-3 rounded-full hover:bg-gray-200 active:bg-gray-300  transition-all"
          onClick={() => navigate(-1)}>
          <MdArrowBack size={24} />
        </button>
        <img
          src="/avatar-placeholder.png"
          alt=""
          className="rounded-full md:h-10 h-8"
        />
        {/*chat username */}
        <h2 className="font-semibold">UserName</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 space-y-4  bg-[url('chatpage.png')] bg-repeat-round bg-cont  ">
        {/* bg-[#fff8ea] */}

        <div className="bg-white p-3 rounded-lg shadow w-fit mt-10">
          Hello 👋
        </div>

        <div className="bg-[#e3ffd4]  z-10 text-black p-3 rounded-lg shadow w-fit ml-auto relative">
          Hi there! How are you?
        </div>

        <div className="bg-white p-3 rounded-lg shadow w-fit mb-10">
          I’m good, thanks. What about you?
        </div>
        <div className="bg-white p-3 rounded-lg shadow w-fit mt-10">
          Hello 👋
        </div>

        <div className="bg-[#f0fce6] text-black p-3 rounded-lg shadow w-fit ml-auto relative">
          Hi there! How are you?
        </div>

        <div className="bg-white p-3 rounded-lg shadow w-fit mb-10">
          I’m good, thanks. What about you?
        </div>
        <div className="bg-white p-3 rounded-lg shadow w-fit mt-10">
          Hello 👋
        </div>

        <div className="bg-[#f0fce6] text-black p-3 rounded-lg shadow w-fit ml-auto relative">
          Hi there! How are you?
        </div>

        <div className="bg-white p-3 rounded-lg shadow w-fit mb-10">
          I’m good, thanks. What about you?
        </div>
      </div>

      {/* Input */}
      <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-2 bottom-2 sticky">
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
