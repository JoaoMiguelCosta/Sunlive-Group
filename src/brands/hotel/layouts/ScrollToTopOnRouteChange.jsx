import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return;
    if (typeof window === "undefined") return;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
}
