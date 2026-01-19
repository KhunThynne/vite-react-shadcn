import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/global.css";
import "./shared/libs/i18n";
import App from "./App.tsx";
import Provider from "./provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
);
