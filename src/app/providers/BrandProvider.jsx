// src/app/providers/BrandProvider.jsx
import { createContext, useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import brands from "../../brands/index.js";

/**
 * Regras:
 * - "/" e "/sunlive-group" => brand "group" (página mãe)
 * - "/sunlive-group/<submarca>(/…)" => brand "<submarca>" se existir em `brands`
 * - Rotas diretas "/<brand>(/…)" também são suportadas se existir em `brands`
 * - Fallback sempre para "group"
 */

const BrandCtx = createContext(null);

/** Mapeia um pathname para o id da brand */
function resolveBrandFromPath(pathname) {
  const parts = pathname.split("/").filter(Boolean); // ex.: ["sunlive-group","travel","destinos"]

  // Caso 1: namespace principal "sunlive-group"
  if (parts[0] === "sunlive-group") {
    const sub = parts[1]; // pode ser undefined
    if (sub && brands[sub]) return sub;
    return "group";
  }

  // Caso 2: rota direta por brand (se algum dia usares)
  if (parts[0] && brands[parts[0]]) {
    return parts[0];
  }

  // Fallback
  return "group";
}

export default function BrandProvider({ children }) {
  const { pathname } = useLocation();

  const active = useMemo(() => {
    const candidate = resolveBrandFromPath(pathname);
    return brands[candidate] ? candidate : "group";
  }, [pathname]);

  const value = useMemo(
    () => ({
      prefix: active, // "group" | "travel" | "sports" | ...
      brandId: active, // alias de conveniência
      config: brands[active] || null, // config/tema/strings específicas da brand
    }),
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
