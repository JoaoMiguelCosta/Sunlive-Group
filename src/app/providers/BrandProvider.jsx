import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import brands from "../../brands/index.js";
import { BrandContext } from "./BrandContext.js";

/**
 * Regras:
 * - "/" e "/sunlive-group" => brand "group"
 * - "/sunlive-group/<submarca>(/...)" => brand "<submarca>", se existir
 * - "/<brand>(/...)" => suporta rotas diretas para uma brand existente
 * - fallback => brand "group"
 */
function resolveBrandFromPath(pathname) {
  const pathSegments = pathname.split("/").filter(Boolean);

  if (pathSegments[0] === "sunlive-group") {
    const subBrand = pathSegments[1];

    if (subBrand && brands[subBrand]) {
      return subBrand;
    }

    return "group";
  }

  const directBrand = pathSegments[0];

  if (directBrand && brands[directBrand]) {
    return directBrand;
  }

  return "group";
}

export default function BrandProvider({ children }) {
  const { pathname } = useLocation();

  const activeBrandId = useMemo(() => {
    const resolvedBrandId = resolveBrandFromPath(pathname);

    return brands[resolvedBrandId] ? resolvedBrandId : "group";
  }, [pathname]);

  const contextValue = useMemo(
    () => ({
      prefix: activeBrandId,
      brandId: activeBrandId,
      config: brands[activeBrandId] ?? null,
    }),
    [activeBrandId],
  );

  return (
    <BrandContext.Provider value={contextValue}>
      {children}
    </BrandContext.Provider>
  );
}
