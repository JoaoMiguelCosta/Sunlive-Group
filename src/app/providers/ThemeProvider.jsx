// src/app/providers/ThemeProvider.jsx
import { useEffect } from "react";
import { useBrand } from "./BrandProvider.jsx";

/**
 * Aplica data-brand="group|sports|travel|..." ao <html>
 * para poderes tematizar via CSS (ex.: :root[data-brand="sports"] {...})
 */
export default function ThemeProvider({ children }) {
  const { prefix } = useBrand();

  useEffect(() => {
    document.documentElement.setAttribute("data-brand", prefix);
  }, [prefix]);

  return children;
}
