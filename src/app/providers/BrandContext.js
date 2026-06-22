import { createContext, useContext } from "react";

export const BrandContext = createContext(null);

export function useBrand() {
  const brandContext = useContext(BrandContext);

  if (!brandContext) {
    throw new Error("useBrand deve ser usado dentro de <BrandProvider />");
  }

  return brandContext;
}
