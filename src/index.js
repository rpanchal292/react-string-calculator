import React from "react";
import ReactDOM from "react-dom/client"; // Use "react-dom/client" in React 18
import "./index.css";
import StringCalculatorApp from "./App";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <StringCalculatorApp />
  </AuthProvider>
);
