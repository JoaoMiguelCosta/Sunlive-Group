import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    // Se houver hash, não mexe (anchors tratam disso)
    if (location.hash) return;

    if (typeof window === "undefined") return;

    // ✅ instantâneo para garantir que “aparece o topo” da página destino
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
}
