import React from "react";

const StatusBar = ({ deviceConnected, selectedBoard }) => (
  <div className="bg-gray-800 text-xs text-gray-400 p-1 flex justify-between items-center border-t border-gray-700">
    <span>
      {deviceConnected
        ? `✔ Device connected on /dev/ttyUSB0 (${selectedBoard.name})`
        : "⏳ Searching for device..."}
    </span>
    <span>Arduino Web IDE (Simulated)</span>
  </div>
);

export default StatusBar;
