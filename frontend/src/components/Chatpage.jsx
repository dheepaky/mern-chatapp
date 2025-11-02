export default function Chatpage() {
  return (
    <div className="flex flex-col h-full bg-amber-100 rounded-lg shadow-md ">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="bg-white p-3 rounded-lg shadow w-fit">Hello 👋</div>

        <div className="bg-green-800 text-white p-3 rounded-lg shadow w-fit ml-auto relative">
          Hi there! How are you?
        </div>

        <div className="bg-white p-3 rounded-lg shadow w-fit">
          I’m good, thanks. What about you?
        </div>
        <div className="bg-green-800 text-white p-3 rounded-lg shadow w-fit ml-auto relative">
          Hi there! How are you?
        </div>

        <div className="bg-white p-3 rounded-lg shadow w-fit">
          I’m good, thanks. What about you?
        </div>
        <div className="bg-green-800 text-white p-3 rounded-lg shadow w-fit ml-auto relative">
          Hi there! How are you?
        </div>

        <div className="bg-white p-3 rounded-lg shadow w-fit">
          I’m good, thanks. What about you?
        </div>
        <div className="bg-green-800 text-white p-3 rounded-lg shadow w-fit ml-auto relative">
          Hi there! How are you?
        </div>

        <div className="bg-white p-3 rounded-lg shadow w-fit">
          I’m good, thanks. What about you?
        </div>
      </div>

      {/* Input */}
      <div className="bg-gray-200 p-4 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700 transition">
          Send
        </button>
      </div>
    </div>
  );
}
