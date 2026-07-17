import { useEffect, useRef, useState } from "react";

const THRESHOLD = 0.15;
const ROOT_MARGIN = "0px 0px -10% 0px";

function getInitialIsIntersecting(disabled) {
  if (disabled) return true;
  if (typeof window === "undefined" || !window.IntersectionObserver) return true;
  return false;
}

/**
 * useIntersectionObserver — observa a entrada de um único elemento
 * no viewport.
 * @param {{once?: boolean, disabled?: boolean}} [options]
 * @returns {{ ref: import("react").RefObject, isIntersecting: boolean }}
 */
export default function useIntersectionObserver({
  once = true,
  disabled = false,
} = {}) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(() =>
    getInitialIsIntersecting(disabled),
  );

  useEffect(() => {
    if (disabled) {
      setIsIntersecting(true);
      return;
    }

    const node = ref.current;
    if (!node || typeof window === "undefined" || !window.IntersectionObserver) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      { threshold: THRESHOLD, rootMargin: ROOT_MARGIN },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [disabled, once]);

  return { ref, isIntersecting };
}
