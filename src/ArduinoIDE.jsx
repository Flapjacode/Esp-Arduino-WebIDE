import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import SerialMonitor from "./components/SerialMonitor";
import StatusBar from "./components/StatusBar";
import { boards, mockLibraries, DEFAULT_CODE } from "./config";

export default function ArduinoIDE() {
  const [code, setCode] = useState(DEFAULT_CODE);

  return (
    <div className="arduino-ide">
      {/* Sidebar */}
      <aside className="sidebar">
        <Sidebar boards={boards} libraries={mockLibraries} />
      </aside>

      {/* Main editor area */}
      <main className="main-editor">
        <div className="toolbar">
          <Toolbar />
        </div>

        <textarea
          className="editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <div className="status-bar">
          <StatusBar />
        </div>
      </main>

      {/* Serial monitor */}
      <aside className="serial-monitor">
        <SerialMonitor />
      </aside>
    </div>
  );
}
