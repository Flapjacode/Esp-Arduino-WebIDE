export default function Toolbar({ onVerify, onUpload, onSave, onOpen, boards, selectedBoard, onBoardChange }) {
  return (
    <div className="flex items-center gap-2 bg-gray-800 p-2 shadow-md">
      <button className="px-3 py-1 bg-green-600 rounded hover:bg-green-500" onClick={onVerify}>✓ Verify</button>
      <button className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500" onClick={onUpload}>⬆ Upload</button>
      <button className="px-3 py-1 bg-yellow-600 rounded hover:bg-yellow-500" onClick={onSave}>💾 Save</button>
      <button className="px-3 py-1 bg-purple-600 rounded hover:bg-purple-500" onClick={onOpen}>📂 Open</button>

      <select
        value={selectedBoard}
        onChange={(e) => onBoardChange(e.target.value)}
        className="ml-auto bg-gray-700 p-1 rounded text-sm"
      >
        {boards.map((board, idx) => (
          <option key={idx} value={board}>{board}</option>
        ))}
      </select>
    </div>
  );
}
