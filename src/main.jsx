import React from "react";
import ReactDOM from "react-dom/client";
import ArduinoIDE from "./ArduinoIDE"; // matches the file name
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ArduinoIDE />
  </React.StrictMode>
);
