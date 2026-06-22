import { useEffect } from "react";

import { useBrand } from "./BrandContext.js";

export default function ThemeProvider({ children }) {
  const { prefix } = useBrand();

  useEffect(() => {
    document.documentElement.setAttribute("data-brand", prefix);
  }, [prefix]);

  return children;
}
