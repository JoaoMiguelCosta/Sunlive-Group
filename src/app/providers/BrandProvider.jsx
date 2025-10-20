// src/app/providers/BrandProvider.jsx
import { createContext, useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import brands from "../../brands/index.js";

const BrandCtx = createContext();

export default function BrandProvider({ children }) {
  const { pathname } = useLocation();
  const pathPrefix = pathname.split("/")[1] || "group";
  const active = brands[pathPrefix] ? pathPrefix : "group";

  const value = useMemo(
    () => ({ prefix: active, config: brands[active] }),
    [active]
  );

  return <BrandCtx.Provider value={value}>{children}</BrandCtx.Provider>;
}

export function useBrand() {
  const ctx = useContext(BrandCtx);
  if (!ctx)
    throw new Error("useBrand deve ser usado dentro de <BrandProvider/>");
  return ctx;
}
