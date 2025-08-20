import React from "react";
import { Save, Upload, Play } from "lucide-react";

const Toolbar = ({
  projectName,
  selectedBoard,
  boards,
  setSelectedBoard,
  handleSave,
  handleOpen,
  handleCompile,
  handleUpload,
}) => (
  <div className="flex items-center justify-between p-2 bg-gray-800 border-b border-gray-700">
    <div className="flex items-center gap-2">
      <span className="font-bold text-green-400">{projectName}</span>
      <select
        className="bg-gray-700 text-gray-100 px-2 py-1 rounded"
        value={selectedBoard.id}
        onChange={(e) =>
          setSelectedBoard(boards.find((b) => b.id === e.target.value))
        }
      >
        {boards.map((b) => (
          <option key={b.id} value={b.id}>
            {b.name}
          </option>
        ))}
      </select>
    </div>

    <div className="flex items-center gap-2">
      <button
        onClick={handleSave}
        className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
      >
        <Save size={16} /> Save
      </button>

      <label className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded cursor-pointer">
        <Upload size={16} /> Open
        <input type="file" accept=".ino" className="hidden" onChange={handleOpen} />
      </label>

      <button
        onClick={handleCompile}
        className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
      >
        <Play size={16} /> Verify
      </button>

      <button
        onClick={handleUpload}
        className="flex items-center gap-1 bg-green-700 hover:bg-green-600 px-3 py-1 rounded"
      >
        <Upload size={16} /> Upload
      </button>
    </div>
  </div>
);

export default Toolbar;
