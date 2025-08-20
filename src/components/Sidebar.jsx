import React from "react";
import { Book, Box } from "lucide-react";

const Sidebar = ({
  activeTab,
  setActiveTab,
  libraries,
  toggleLibrary,
  examples,
  loadExample,
}) => (
  <div className="w-64 bg-gray-850 border-r border-gray-700 flex flex-col">
    <div className="flex">
      <button
        onClick={() => setActiveTab("libraries")}
        className={`flex-1 p-2 ${activeTab === "libraries" ? "bg-gray-700" : ""}`}
      >
        <Box className="inline" /> Libraries
      </button>
      <button
        onClick={() => setActiveTab("examples")}
        className={`flex-1 p-2 ${activeTab === "examples" ? "bg-gray-700" : ""}`}
      >
        <Book className="inline" /> Examples
      </button>
    </div>

    <div className="flex-1 overflow-auto p-2">
      {activeTab === "libraries" &&
        libraries.map((lib) => (
          <div
            key={lib.name}
            className="flex justify-between items-center p-1 border-b border-gray-700"
          >
            <span>{lib.name}</span>
            <button
              onClick={() => toggleLibrary(lib.name)}
              className="text-xs px-2 py-1 bg-gray-700 rounded"
            >
              {lib.installed ? "Remove" : "Install"}
            </button>
          </div>
        ))}

      {activeTab === "examples" &&
        examples.map((ex) => (
          <div
            key={ex.name}
            className="p-2 border-b border-gray-700 hover:bg-gray-700 cursor-pointer"
            onClick={() => loadExample(ex)}
          >
            {ex.name}
          </div>
        ))}
    </div>
  </div>
);

export default Sidebar;
