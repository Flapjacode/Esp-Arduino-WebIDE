import React, { useState, useEffect } from "react";

export default function SerialMonitor() {
  const [logs, setLogs] = useState([
    "Connected to Arduino...",
    "Waiting for data...",
  ]);

  // Example: simulate incoming serial data
  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => [...prev, `Data: ${Math.floor(Math.random() * 100)}`]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-bold mb-2">Serial Monitor</h2>
      <div className="flex-1 bg-primary p-2 rounded overflow-auto text-sm font-mono">
        {logs.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Send data..."
        className="mt-2 p-1 rounded bg-secondary text-white outline-none"
      />
    </div>
  );
}
