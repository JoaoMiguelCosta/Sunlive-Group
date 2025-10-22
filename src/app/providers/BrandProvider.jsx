// src/app/providers/BrandProvider.jsx
import { createContext, useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import brands from "../../brands/index.js";

/**
 * Regras:
 * - "/" e "/sunlive-group" => brand "group" (página mãe)
 * - "/sunlive-group/travel" => brand "travel"
 * - "/sunlive-group/sports" => brand "sports"
 * - Qualquer outra coisa que exista em `brands` também é aceite (fallback "group")
 */
const BrandCtx = createContext(null);

export default function BrandProvider({ children }) {
  const { pathname } = useLocation();

  const parts = pathname.split("/").filter(Boolean); // ["sunlive-group","sports",...]
  let candidate = "group";

  if (parts[0] === "sunlive-group") {
    // /sunlive-group/(submarca?)
    const sub = parts[1];
    if (sub && brands[sub]) candidate = sub;
    else candidate = "group";
  } else if (brands[parts[0]]) {
    // rota direta por brand (se algum dia usares)
    candidate = parts[0];
  }

  const active = brands[candidate] ? candidate : "group";

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
