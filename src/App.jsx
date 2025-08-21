import { useState } from "react";

export default function App() {
  const [output, setOutput] = useState("Serial output will appear here...");

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-4">Boards</h2>
        <select className="p-2 border rounded mb-4">
          <option>ESP32</option>
          <option>ESP8266</option>
          <option>Arduino Uno</option>
        </select>

        <h2 className="text-xl font-bold mb-4">Examples</h2>
        <ul className="flex-1 space-y-2">
          <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">Blink</li>
          <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">WiFi Scan</li>
          <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">HTTP Client</li>
        </ul>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <header className="bg-white shadow p-4 flex gap-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
            Verify
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
            Upload
          </button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600">
            Save
          </button>
        </header>

        {/* Code Editor placeholder */}
        <main className="flex-1 p-4">
          <textarea
            className="w-full h-full border rounded-lg p-4 font-mono text-sm"
            defaultValue={`// Write your Arduino code here\n\nvoid setup() {\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  Serial.println("Hello from Web IDE!");\n  delay(1000);\n}`}
          />
        </main>

        {/* Serial Console */}
        <footer className="h-40 bg-black text-green-400 font-mono text-sm p-2 overflow-y-auto">
          <div>{output}</div>
        </footer>
      </div>
    </div>
  );
}
