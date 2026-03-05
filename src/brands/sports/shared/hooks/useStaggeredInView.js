// src/shared/hooks/useStaggeredInView.js
import { useEffect, useMemo, useRef, useState } from "react";

/**
 * useStaggeredInView
 * - Observa uma secção.
 * - Quando entra em vista, ativa animação com delays progressivos (0ms, 80ms, 160ms...).
 */
export default function useStaggeredInView(options = {}) {
  const {
    itemCount = 0,
    baseDelay = 80, // ms entre cada card
    threshold = 0.2,
    rootMargin = "0px 0px -15% 0px",
    once = true,
  } = options;

  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  // Delays calculados para cada índice
  const delays = useMemo(
    () =>
      Array.from({ length: itemCount }, (_, index) => `${index * baseDelay}ms`),
    [itemCount, baseDelay]
  );

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      // fallback: se não houver suporte, ativa logo
      setIsActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setIsActive(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  function getItemDelay(index) {
    return delays[index] || "0ms";
  }

  return {
    sectionRef,
    isActive,
    getItemDelay,
  };
}
