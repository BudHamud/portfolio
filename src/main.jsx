import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DevContextProvider } from "./context/DevContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DevContextProvider>
    <App />
  </DevContextProvider>
);
