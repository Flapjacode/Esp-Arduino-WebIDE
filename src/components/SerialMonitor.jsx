import React, { useEffect, useRef } from "react";
import { Terminal } from "lucide-react";

const SerialMonitor = ({ serialOutput }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [serialOutput]);

  return (
    <div className="bg-black text-green-400 p-2 h-32 overflow-auto font-mono" ref={ref}>
      <div className="flex items-center gap-2 mb-1 text-gray-400">
        <Terminal size={14} /> Serial Monitor
      </div>
      {serialOutput.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  );
};

export default SerialMonitor;
