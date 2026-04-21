import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppPreferencesProvider } from "./context/AppPreferencesContext";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppPreferencesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppPreferencesProvider>
  </React.StrictMode>
);
