import React from "react";
import ReactDOM from "react-dom/client"; // Use "react-dom/client" in React 18
import "./index.css";
import StringCalculatorApp from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StringCalculatorApp />
  </React.StrictMode>
);
