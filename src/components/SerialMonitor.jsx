export default function SerialMonitor({ serialOutput, setSerialInput, sendSerial }) {
  return (
    <div className="bg-gray-800 p-2 mt-2 rounded shadow-inner">
      <h3 className="font-bold mb-1">Serial Monitor</h3>
      <div className="h-32 overflow-y-auto bg-black text-green-400 p-2 rounded font-mono text-sm mb-2">
        {serialOutput.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Send command"
          className="flex-1 p-1 bg-gray-700 rounded"
          onChange={(e) => setSerialInput(e.target.value)}
        />
        <button onClick={sendSerial} className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500">
          Send
        </button>
      </div>
    </div>
  );
}
