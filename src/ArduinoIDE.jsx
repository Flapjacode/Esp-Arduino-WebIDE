import React, { useState } from "react";
import { boards } from "./config/boards";
import { libraries } from "./config/libraries";
import { examples } from "./config/examples";

import Toolbar from "./components/Toolbar";
import Sidebar from "./components/Sidebar";
import SerialMonitor from "./components/SerialMonitor";
import StatusBar from "./components/StatusBar";

export default function ArduinoIDE() {
  const [selectedBoard, setSelectedBoard] = useState(boards[0]);
  const [activeTab, setActiveTab] = useState("libraries");
  const [code, setCode] = useState("// Start coding here...");
  const [serialOutput, setSerialOutput] = useState([]);
  const [serialInput, setSerialInput] = useState("");
  const [status, setStatus] = useState("Idle");

  const handleVerify = () => setStatus("Verifying...");
  const handleUpload = () => setStatus("Uploading...");
  const handleSave = () => alert("Code saved (mock)");
  const handleOpen = () => alert("Open file (mock)");
  const handleExampleSelect = (code) => setCode(code);
  const sendSerial = () => {
    setSerialOutput([...serialOutput, `> ${serialInput}`]);
    setSerialInput("");
  };

  return (
    <div className="ide-container">
      <Toolbar
        onVerify={handleVerify}
        onUpload={handleUpload}
        onSave={handleSave}
        onOpen={handleOpen}
        boards={boards}
        selectedBoard={selectedBoard}
        onBoardChange={setSelectedBoard}
      />

      <div className="main-content">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          libraries={libraries}
          examples={examples}
          onExampleSelect={handleExampleSelect}
        />

        <textarea
          className="editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>

      <SerialMonitor
        serialOutput={serialOutput}
        setSerialInput={setSerialInput}
        sendSerial={sendSerial}
      />

      <StatusBar selectedBoard={selectedBoard} status={status} />
    </div>
  );
}
