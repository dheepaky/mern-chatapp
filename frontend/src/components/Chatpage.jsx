import Sidebar from "./Sidebar";

export default function Chatpage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar with fixed width */} 

      {/* Chat section takes remaining width */}
      <div className="flex flex-col flex-1 bg-amber-100">
        {/* Header */}
        <div className="bg-orange-500 p-4 text-center font-bold text-white text-xl">
          Chat Page
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          <div className="bg-white p-3 rounded-lg shadow w-fit">Hello 👋</div>

          {/* user */}
          <div className="bg-green-200 p-3 rounded-lg shadow w-fit ml-auto">
            Hi there! How are you?
          </div>

          <div className="bg-white p-3 rounded-lg shadow w-fit">
            I’m good, thanks. What about you?
          </div>
        </div>

        {/* Input */}
      </div>
    </div>
  );
}
