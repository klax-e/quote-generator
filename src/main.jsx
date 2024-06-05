import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ModelProvider from "./ModelProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModelProvider>
      <App />
    </ModelProvider>
  </React.StrictMode>
);
