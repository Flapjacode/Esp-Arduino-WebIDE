import React, { useState, useEffect, useRef } from "react";
import Toolbar from "./components/Toolbar";
import Sidebar from "./components/Sidebar";
import SerialMonitor from "./components/SerialMonitor";
import StatusBar from "./components/StatusBar";
import { boards, mockLibraries, EXAMPLES, DEFAULT_CODE } from "./config";
import { FileText } from "lucide-react";

export default function ArduinoIDE() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [selectedBoard, setSelectedBoard] = useState("esp32");
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [serialOutput, setSerialOutput] = useState("");
  const [isCompiling, setIsCompiling] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [activeTab, setActiveTab] = useState("libraries");
  const [projectName, setProjectName] = useState("Arduino_Sketch");
  const [libraries, setLibraries] = useState([]);
  const [compilationStatus, setCompilationStatus] = useState("idle");

  const serialRef = useRef(null);
  const deviceTimerRef = useRef(null);
  const serialIntervalRef = useRef(null);

  useEffect(() => setLibraries(mockLibraries), []);

  useEffect(() => {
    if (deviceTimerRef.current) clearTimeout(deviceTimerRef.current);
    deviceTimerRef.current = setTimeout(() => {
      setConnectedDevice({
        port: "/dev/ttyUSB0",
        board: selectedBoard,
        status: "connected",
      });
    }, 800);
    return () => clearTimeout(deviceTimerRef.current);
  }, [selectedBoard]);

  useEffect(() => {
    if (serialRef.current) serialRef.current.scrollTop = serialRef.current.scrollHeight;
  }, [serialOutput]);

  useEffect(() => () => clearInterval(serialIntervalRef.current), []);

  // === Handlers ===
  const handleCompile = async () => {
    setIsCompiling(true);
    setCompilationStatus("compiling");
    setSerialOutput((p) => p + "\n=== COMPILING ===\n");
    await new Promise((r) => setTimeout(r, 1000));
    if (code.includes("setup()") && code.includes("loop()")) {
      setSerialOutput((p) => p + "Compilation successful!\n");
      setCompilationStatus("success");
    } else {
      setSerialOutput((p) => p + "ERROR: Missing setup() or loop()\n");
      setCompilationStatus("error");
    }
    setIsCompiling(false);
  };

  const handleUpload = async () => {
    if (!connectedDevice) {
      setSerialOutput((p) => p + "\nERROR: No device connected\n");
      return;
    }
    if (serialIntervalRef.current) clearInterval(serialIntervalRef.current);
    setIsUploading(true);
    setSerialOutput((p) => p + "\n=== UPLOADING ===\n");
    await new Promise((r) => setTimeout(r, 1500));
    setSerialOutput((p) => p + "Upload complete!\n\n=== SERIAL MONITOR ===\n");
    setIsUploading(false);
    serialIntervalRef.current = setInterval(() => setSerialOutput((p) => p + "LED blinked\n"), 2000);
    setTimeout(() => clearInterval(serialIntervalRef.current), 10000);
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

  const handleLoad = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setCode(String(ev.target?.result));
      reader.readAsText(file);
      setProjectName(file.name.replace(/\.[^.]+$/, ""));
    }
  };

  const clearSerial = () => setSerialOutput("");

  const loadExample = (name) => {
    if (EXAMPLES[name]) {
      setProjectName(name.replace(/\s+/g, "_"));
      setCode(EXAMPLES[name]);
      setActiveTab("libraries");
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white">
      {/* Toolbar */}
      <Toolbar
        projectName={projectName}
        setProjectName={setProjectName}
        selectedBoard={selectedBoard}
        setSelectedBoard={setSelectedBoard}
        connectedDevice={connectedDevice}
        handleCompile={handleCompile}
        handleUpload={handleUpload}
        handleSave={handleSave}
        handleLoad={handleLoad}
        isCompiling={isCompiling}
        isUploading={isUploading}
        compilationStatus={compilationStatus}
      />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          libraries={libraries}
          examples={EXAMPLES}
          loadExample={loadExample}
        />

        {/* Editor + Serial Monitor */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Editor */}
          <div className="flex-1 p-4 overflow-hidden">
            <div className="h-full flex flex-col border border-gray-600 rounded bg-gray-800 overflow-hidden">
              <div className="flex items-center gap-2 p-2 border-b border-gray-600">
                <FileText className="w-4 h-4" />
                <span className="text-sm font-medium">{projectName}.ino</span>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="flex-1 w-full bg-gray-800 text-white font-mono text-sm p-3 resize-none outline-none overflow-auto"
                spellCheck={false}
              />
            </div>
          </div>

          {/* Serial Monitor */}
          <SerialMonitor
            serialRef={serialRef}
            serialOutput={serialOutput}
            clearSerial={clearSerial}
          />
        </div>
      </div>

      {/* Status Bar */}
      <StatusBar
        boards={boards}
        selectedBoard={selectedBoard}
        connectedDevice={connectedDevice}
        compilationStatus={compilationStatus}
      />
    </div>
  );
}
