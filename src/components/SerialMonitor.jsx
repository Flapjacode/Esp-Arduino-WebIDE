import React from "react";
import { Terminal, X } from "lucide-react";

export default function SerialMonitor({ serialRef, serialOutput, clearSerial }) {
  return (
    <div className="h-64 bg-gray-800 border-t border-gray-700">
      <div className="p-2 border-b border-gray-700 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Terminal className="w-4 h-4" />
          <span className="text-sm font-medium">Serial Monitor</span>
        </div>
        <button onClick={clearSerial} className="text-xs text-gray-400 hover:text-white flex items-center gap-1">
          <X className="w-3 h-3" /> Clear
        </button>
      </div>
      <div
        ref={serialRef}
        className="h-full overflow-y-auto p-4 font-mono text-sm text-green-400 whitespace-pre-wrap"
      >
        {serialOutput || "Serial monitor ready. Upload code to see output..."}
      </div>
    </div>
  );
}
