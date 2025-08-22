import React from "react";
import { Code, Clock, CheckCircle, AlertCircle } from "lucide-react";

export default function StatusBar({ boards, selectedBoard, connectedDevice, compilationStatus }) {
  const getStatusIcon = () => {
    switch (compilationStatus) {
      case "compiling":
        return <Clock className="w-4 h-4 text-blue-500 animate-spin" />;
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "error":
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Code className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="bg-gray-800 border-t border-gray-700 px-4 py-2 flex justify-between text-sm">
      <div className="flex gap-4">
        <span>Board: {boards[selectedBoard].name}</span>
        <span>Port: {connectedDevice?.port || "Not connected"}</span>
      </div>
      <div className="flex items-center gap-2">
        {compilationStatus !== "idle" && (
          <span className="flex gap-1 items-center">
            {getStatusIcon()}
            {compilationStatus === "compiling"
              ? "Compiling..."
              : compilationStatus === "success"
              ? "Ready to upload"
              : "Compilation failed"}
          </span>
        )}
      </div>
    </div>
  );
}
