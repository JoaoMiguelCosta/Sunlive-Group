import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * Autoplay cíclico com:
 * - pausa em hover;
 * - respeito por prefers-reduced-motion;
 * - pausa quando o separador fica oculto.
 */
export default function useSpotlightCycle(length = 0, intervalMs = 4500) {
  const [index, setIndex] = useState(0);

  const isPausedRef = useRef(false);
  const timerRef = useRef(null);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const clearCycle = useCallback(() => {
    if (!timerRef.current) {
      return;
    }

    window.clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  const startCycle = useCallback(() => {
    if (
      !length ||
      prefersReducedMotion ||
      isPausedRef.current ||
      timerRef.current
    ) {
      return;
    }

    timerRef.current = window.setInterval(
      () => {
        if (isPausedRef.current) {
          return;
        }

        setIndex((currentIndex) => (currentIndex + 1) % length);
      },
      Math.max(2000, intervalMs),
    );
  }, [intervalMs, length, prefersReducedMotion]);

  useEffect(() => {
    startCycle();

    return clearCycle;
  }, [clearCycle, startCycle]);

  useEffect(() => {
    if (length <= 0) {
      setIndex(0);
      return;
    }

    setIndex((currentIndex) => (currentIndex >= length ? 0 : currentIndex));
  }, [length]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isPausedRef.current = true;
        clearCycle();
        return;
      }

      isPausedRef.current = false;
      startCycle();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [clearCycle, startCycle]);

  const handleMouseEnter = useCallback(() => {
    isPausedRef.current = true;
    clearCycle();
  }, [clearCycle]);

  const handleMouseLeave = useCallback(() => {
    isPausedRef.current = false;
    startCycle();
  }, [startCycle]);

  return {
    index,
    setIndex,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
}
