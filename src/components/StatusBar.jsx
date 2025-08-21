export default function StatusBar({ selectedBoard, status }) {
  return (
    <div className="bg-gray-800 p-2 mt-2 text-sm flex justify-between items-center border-t border-gray-700">
      <span className="text-gray-300">Board: <span className="font-bold">{selectedBoard}</span></span>
      <span className="text-gray-400">Status: {status}</span>
    </div>
  );
}
