// src/app/main.jsx
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import BrandProvider from "./providers/BrandProvider.jsx";
import ThemeProvider from "./providers/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <BrandProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrandProvider>
  </BrowserRouter>
);
