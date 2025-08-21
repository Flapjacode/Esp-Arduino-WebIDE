export default function Sidebar({ activeTab, setActiveTab, libraries, examples, onExampleSelect }) {
  return (
    <div className="w-48 bg-gray-800 p-2 flex flex-col border-r border-gray-700">
      <div className="flex gap-2 mb-2">
        <button
          className={`flex-1 px-2 py-1 rounded ${activeTab === "libraries" ? "bg-blue-600" : "bg-gray-700"}`}
          onClick={() => setActiveTab("libraries")}
        >
          Libraries
        </button>
        <button
          className={`flex-1 px-2 py-1 rounded ${activeTab === "examples" ? "bg-blue-600" : "bg-gray-700"}`}
          onClick={() => setActiveTab("examples")}
        >
          Examples
        </button>
      </div>

      {activeTab === "libraries" && (
        <ul className="space-y-1">
          {libraries.map((lib, i) => (
            <li key={i} className="p-1 hover:bg-gray-700 rounded">{lib.name}</li>
          ))}
        </ul>
      )}

      {activeTab === "examples" && (
        <ul className="space-y-1">
          {examples.map((ex, i) => (
            <li
              key={i}
              className="p-1 hover:bg-gray-700 rounded cursor-pointer"
              onClick={() => onExampleSelect(ex.code)}
            >
              {ex.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
