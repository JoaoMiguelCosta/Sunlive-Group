// src/app/providers/ThemeProvider.jsx
import { useEffect } from "react";
import { useBrand } from "./BrandProvider.jsx";

export default function ThemeProvider({ children }) {
  const { prefix } = useBrand();

  useEffect(() => {
    document.documentElement.setAttribute("data-brand", prefix);
  }, [prefix]);

  return children;
}
