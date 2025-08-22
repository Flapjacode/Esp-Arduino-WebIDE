import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import SerialMonitor from "./components/SerialMonitor";
import StatusBar from "./components/StatusBar";
import { boards, mockLibraries, EXAMPLES, DEFAULT_CODE } from "./config";

export default function ArduinoIDE() {
  const [code, setCode] = useState(DEFAULT_CODE);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-secondary p-4 flex flex-col">
        <Sidebar boards={boards} libraries={mockLibraries} />
      </aside>

      {/* Main editor + toolbar */}
      <main className="flex-1 flex flex-col">
        <Toolbar />
        <div className="flex-1 p-4 bg-primary overflow-auto">
          <textarea
            className="w-full h-full bg-primary text-white font-mono p-2 rounded outline-none resize-none"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <StatusBar />
      </main>

      {/* Serial monitor */}
      <aside className="w-80 bg-secondary p-4">
        <SerialMonitor />
      </aside>
    </div>
  );
}
export default function ArduinoIDE() {
  return (
    <div className="flex flex-col h-screen bg-primary text-white">
      <div className="p-4 text-2xl font-bold">Arduino IDE</div>
      <div className="flex flex-1">
        <aside className="w-64 bg-secondary p-4">Sidebar</aside>
        <main className="flex-1 p-4">Editor + other panels</main>
      </div>
    </div>
  );
}
