import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"
import { HashRouter } from "react-router-dom";
import GlobalState from "./context/context.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <StrictMode>
      <GlobalState>
        <App />
      </GlobalState>
    </StrictMode>
  </HashRouter>
);
