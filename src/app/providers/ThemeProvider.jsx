import { useEffect } from "react";
import { useBrand } from "./BrandProvider.jsx";

/**
 * Aplica data-brand="group|travel|sports|..." ao <html>
 * para tematização via CSS (ex.: :root[data-brand="travel"] {...})
 */
export default function ThemeProvider({ children }) {
  const { prefix } = useBrand();

  useEffect(() => {
    document.documentElement.setAttribute("data-brand", prefix);
  }, [prefix]);

  return children;
}
