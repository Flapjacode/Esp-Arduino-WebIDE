import React, { useState, useEffect, useRef } from "react";
import { Save, Upload, Play, Terminal, Book, Box } from "lucide-react";

import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";
import SerialMonitor from "./SerialMonitor";
import StatusBar from "./StatusBar";

import { boards } from "../config/boards";
import { libraries as defaultLibraries } from "../config/libraries";
import { examples } from "../config/examples";

const ArduinoIDE = () => {
  const [code, setCode] = useState("");
  const [logs, setLogs] = useState([]);
  const [serialOutput, setSerialOutput] = useState([]);
  const [libraries, setLibraries] = useState(defaultLibraries);
  const [activeTab, setActiveTab] = useState("libraries");
  const [selectedBoard, setSelectedBoard] = useState(boards[0]);
  const [deviceConnected, setDeviceConnected] = useState(false);
  const [projectName, setProjectName] = useState("sketch_jan20a");
  const serialRef = useRef(null);

  // Simulate board detection
  useEffect(() => {
    const timer = setTimeout(() => setDeviceConnected(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleCompile = () => {
    setLogs((prev) => [...prev, "Compiling sketch..."]);
    setTimeout(() => {
      if (code.includes("setup()") && code.includes("loop()")) {
        setLogs((prev) => [...prev, "Compilation successful."]);
      } else {
        setLogs((prev) => [...prev, "Error: Missing setup() or loop()."]);
      }
    }, 1500);
  };

  const handleUpload = () => {
    if (!deviceConnected) {
      setLogs((prev) => [...prev, "Error: No device connected."]);
      return;
    }
    setLogs((prev) => [...prev, `Uploading to ${selectedBoard.name}...`]);
    setTimeout(() => {
      setLogs((prev) => [...prev, "Upload complete."]);
      setSerialOutput([`Program started on ${selectedBoard.name}`]);

      clearInterval(serialRef.current);
      serialRef.current = setInterval(() => {
        setSerialOutput((prev) => [...prev, "Hello from Arduino!"]);
      }, 2000);
    }, 2000);
  };

  const handleSave = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${projectName}.ino`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleOpen = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setCode(event.target.result);
      setProjectName(file.name.replace(/\.[^/.]+$/, ""));
    };
    reader.readAsText(file);
  };

  const toggleLibrary = (name) => {
    setLibraries((prev) =>
      prev.map((lib) =>
        lib.name === name ? { ...lib, installed: !lib.installed } : lib
      )
    );
  };

  const loadExample = (example) => {
    setCode(example.code);
    setProjectName(example.name);
    setActiveTab("editor");
    setLogs((prev) => [...prev, `Loaded example: ${example.name}`]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100">
      {/* Toolbar */}
      <Toolbar
        projectName={projectName}
        selectedBoard={selectedBoard}
        boards={boards}
        setSelectedBoard={setSelectedBoard}
        handleSave={handleSave}
        handleOpen={handleOpen}
        handleCompile={handleCompile}
        handleUpload={handleUpload}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          libraries={libraries}
          toggleLibrary={toggleLibrary}
          examples={examples}
          loadExample={loadExample}
        />

        {/* Editor + Logs + Serial Monitor */}
        <div className="flex-1 flex flex-col">
          <textarea
            className="flex-1 font-mono bg-gray-800 text-green-400 p-4 resize-none focus:outline-none"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="// Write your Arduino sketch here..."
          />

          <div className="bg-gray-950 p-2 text-sm overflow-auto h-24">
            {logs.map((log, i) => (
              <div key={i}>{log}</div>
            ))}
          </div>

          <SerialMonitor serialOutput={serialOutput} />
        </div>
      </div>
    </div>
  );
};

export default ArduinoIDE;
