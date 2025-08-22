import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import SerialMonitor from "./components/SerialMonitor";
import StatusBar from "./components/StatusBar";
import { boards, mockLibraries, DEFAULT_CODE } from "./config";

export default function ArduinoIDE() {
  const [code, setCode] = useState(DEFAULT_CODE);

  return (
    <div className="flex h-screen overflow-hidden bg-primary text-white">
      <aside className="w-64 bg-secondary p-4 flex flex-col">
        <Sidebar boards={boards} libraries={mockLibraries} />
      </aside>

      <main className="flex-1 flex flex-col">
        <Toolbar />
        <div className="flex-1 p-4 overflow-auto">
          <textarea
            className="w-full h-full bg-primary text-white font-mono p-2 rounded outline-none resize-none"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <StatusBar />
      </main>

      <aside className="w-80 bg-secondary p-4">
        <SerialMonitor />
      </aside>
    </div>
  );
}
