export default function Footer() {
  return (
    <>
      <div className="bg-gray-200 p-4 flex items-center gap-2 bottom-0 sticky">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Send
        </button>
      </div>
    </>
  );
}
