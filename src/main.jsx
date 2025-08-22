import React from "react";
import ReactDOM from "react-dom/client";
import ArduinoIDE from "./ArduinoIDE";
import "./index.css"; // <-- make sure Tailwind is imported

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ArduinoIDE />
  </React.StrictMode>
);
