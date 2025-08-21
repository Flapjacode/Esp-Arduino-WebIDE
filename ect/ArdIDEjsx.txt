export default function ArduinoIDE() {
  // ...state setup same as before

  return (
    <div className="h-screen flex flex-col">
      <Toolbar
        onVerify={handleVerify}
        onUpload={handleUpload}
        onSave={handleSave}
        onOpen={handleOpen}
        boards={boards}
        selectedBoard={selectedBoard}
        onBoardChange={setSelectedBoard}
      />

      <div className="flex flex-1">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          libraries={libraries}
          examples={examples}
          onExampleSelect={handleExampleSelect}
        />

        <textarea
          className="flex-1 bg-black text-green-300 font-mono p-3 outline-none resize-none"
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
