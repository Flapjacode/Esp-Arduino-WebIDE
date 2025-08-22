import React from "react";
import ReactDOM from "react-dom/client";
import ArduinoIDE from "./ArduinoIDE";
import "./index.css"; // our CSS replacement

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ArduinoIDE />
  </React.StrictMode>
);
