import React from "react";

export default function StatusBar() {
  return (
    <div className="bg-secondary text-gray-300 text-sm p-2 border-t border-gray-700 flex justify-between">
      <div>Board: Arduino Uno</div>
      <div>Port: COM3</div>
      <div>Line: 1, Col: 1</div>
    </div>
  );
}
