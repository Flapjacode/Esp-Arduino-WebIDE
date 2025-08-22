import React from "react";
import { Upload, Save, FolderOpen, Zap } from "lucide-react";

export default function Toolbar() {
  return (
    <div className="flex items-center justify-between bg-secondary p-2 border-b border-gray-700">
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1 px-2 py-1 bg-accent rounded hover:bg-blue-500">
          <Upload size={16} /> Upload
        </button>
        <button className="flex items-center gap-1 px-2 py-1 bg-accent rounded hover:bg-blue-500">
          <Save size={16} /> Save
        </button>
        <button className="flex items-center gap-1 px-2 py-1 bg-accent rounded hover:bg-blue-500">
          <FolderOpen size={16} /> Open
        </button>
      </div>
      <div className="text-sm text-gray-300">Arduino IDE</div>
    </div>
  );
}
