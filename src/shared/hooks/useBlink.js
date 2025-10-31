import { useEffect, useMemo, useRef, useState } from "react";

/**
 * useBlink — alterna um estado booleano ON/OFF num ciclo.
 * cycleMs: duração do ciclo total (ex.: 2000 = 1s OFF + 1s ON)
 * disabled: desliga o blink
 * pauseOnHover / pauseOnFocus: pausa enquanto hover/focus
 */
export function useBlink({
  cycleMs = 2000,
  disabled = false,
  pauseOnHover = true,
  pauseOnFocus = true,
} = {}) {
  const [on, setOn] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (disabled || paused || prefersReduced) return;
    // alterna a cada metade do ciclo (ex.: 1000ms) => OFF/ON
    timerRef.current = setInterval(() => setOn((v) => !v), cycleMs / 2);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [cycleMs, disabled, paused, prefersReduced]);

  const bind = {
    onMouseEnter: pauseOnHover ? () => setPaused(true) : undefined,
    onMouseLeave: pauseOnHover ? () => setPaused(false) : undefined,
    onFocus: pauseOnFocus ? () => setPaused(true) : undefined,
    onBlur: pauseOnFocus ? () => setPaused(false) : undefined,
  };

  return { on, paused, setPaused, bind };
}
