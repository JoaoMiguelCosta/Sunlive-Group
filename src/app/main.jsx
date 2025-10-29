import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import BrandProvider from "./providers/BrandProvider.jsx";
import ThemeProvider from "./providers/ThemeProvider.jsx";

/**
 * Importa temas:
 * - group/theme.css funciona como base global (Prestige Noir + Liquid Gold)
 * - travel/theme.css apenas define overrides condicionais a data-brand="travel"
 *   (por isso é seguro importar já aqui)
 */
import "../brands/group/theme.css";
import "../brands/travel/theme.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <BrandProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrandProvider>
  </BrowserRouter>
);
