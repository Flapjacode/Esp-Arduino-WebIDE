import React from "react";

export default function Sidebar({ activeTab, setActiveTab, libraries, examples, loadExample }) {
  return (
    <div className="w-64 bg-gray-800 border-r border-gray-700 p-4">
      <div className="flex gap-1 mb-4">
        <button
          onClick={() => setActiveTab("libraries")}
          className={`px-3 py-2 text-sm rounded ${activeTab === "libraries" ? "bg-blue-600" : "bg-gray-700"}`}
        >
          Libraries
        </button>
        <button
          onClick={() => setActiveTab("examples")}
          className={`px-3 py-2 text-sm rounded ${activeTab === "examples" ? "bg-blue-600" : "bg-gray-700"}`}
        >
          Examples
        </button>
      </div>

      {activeTab === "libraries" && (
        <div className="space-y-2">
          {libraries.map((lib) => (
            <div key={lib.name} className="flex justify-between p-2 bg-gray-700 rounded">
              <div>
                <div className="text-sm font-medium">{lib.name}</div>
                <div className="text-xs text-gray-400">v{lib.version}</div>
              </div>
              <div className={`w-2 h-2 rounded-full ${lib.installed ? "bg-green-400" : "bg-gray-500"}`}></div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "examples" && (
        <div className="space-y-1">
          {Object.keys(examples).map((name) => (
            <div key={name} className="cursor-pointer hover:text-white text-sm" onClick={() => loadExample(name)}>
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
