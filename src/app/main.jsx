import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./router/App.jsx";
import { BrandProvider, ThemeProvider } from "./providers";

import "../styles/brands.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BrandProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrandProvider>
    </BrowserRouter>
  </StrictMode>,
);
