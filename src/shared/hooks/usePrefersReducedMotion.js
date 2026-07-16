import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function getInitial() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia(QUERY).matches;
}

/**
 * usePrefersReducedMotion — fonte única para a preferência
 * prefers-reduced-motion, reativa a alterações em tempo real.
 * @returns {boolean}
 */
export default function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(getInitial);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mql = window.matchMedia(QUERY);
    const onChange = (event) => setPrefersReduced(event.matches);

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }

    // Fallback para browsers sem addEventListener em MediaQueryList.
    mql.addListener(onChange);
    return () => mql.removeListener(onChange);
  }, []);

  return prefersReduced;
}
