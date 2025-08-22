import React from "react";
import { Upload, Save, FolderOpen, Code, Clock, CheckCircle, AlertCircle, Zap } from "lucide-react";

export default function Toolbar({
  projectName,
  setProjectName,
  selectedBoard,
  setSelectedBoard,
  connectedDevice,
  handleCompile,
  handleUpload,
  handleSave,
  handleLoad,
  isCompiling,
  isUploading,
  compilationStatus,
}) {
  const getStatusIcon = () => {
    switch (compilationStatus) {
      case "compiling":
        return <Clock className="w-4 h-4 text-blue-500 animate-spin" />;
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "error":
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Code className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="bg-gray-800 border-b border-gray-700 p-3 flex items-center gap-2">
      <div className="flex items-center gap-2 mr-6">
        <Zap className="w-6 h-6 text-blue-400" />
        <input
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="bg-gray-700 px-3 py-1 rounded border border-gray-600 focus:border-blue-500 outline-none"
        />
      </div>

      <button
        onClick={handleCompile}
        disabled={isCompiling}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
      >
        {getStatusIcon()}
        {isCompiling ? "Compiling..." : "Verify"}
      </button>

      <button
        onClick={handleUpload}
        disabled={isUploading || !connectedDevice}
        className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
      >
        <Upload className="w-4 h-4" />
        {isUploading ? "Uploading..." : "Upload"}
      </button>

      <button onClick={handleSave} className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded flex items-center gap-1">
        <Save className="w-4 h-4" /> Save
      </button>

      <label className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded flex items-center gap-1 cursor-pointer">
        <FolderOpen className="w-4 h-4" /> Open
        <input type="file" accept=".ino,.cpp,.c,.h,.txt" onChange={handleLoad} className="hidden" />
      </label>
    </div>
  );
}
