import { useEffect, useMemo, useRef, useState } from "react";

/**
 * useSpotlightCycle
 * - Autoplay cíclico com pausa em hover
 * - Respeita prefers-reduced-motion
 * - Pausa quando o separador fica oculto (visibilitychange)
 */
export default function useSpotlightCycle(len = 0, ms = 4500) {
  const [index, setIndex] = useState(0);
  const pause = useRef(false);
  const timer = useRef(null);

  const reduceMotion = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // limpa intervalo
  const clear = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  // arranca intervalo
  const start = () => {
    if (!len || reduceMotion || pause.current || timer.current) return;
    timer.current = setInterval(
      () => {
        if (!pause.current) setIndex((v) => (v + 1) % len);
      },
      Math.max(2000, ms)
    );
  };

  useEffect(() => {
    start();
    return clear;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [len, ms, reduceMotion]);

  // se o índice ultrapassar len (quando dados mudam)
  useEffect(() => {
    if (index >= len) setIndex(0);
  }, [index, len]);

  // pausa quando o separador perde visibilidade
  useEffect(() => {
    const onVis = () => {
      if (document.hidden) {
        pause.current = true;
        clear();
      } else {
        pause.current = false;
        start();
      }
    };
    if (typeof document !== "undefined") {
      document.addEventListener("visibilitychange", onVis);
      return () => document.removeEventListener("visibilitychange", onVis);
    }
  }, [len, ms, reduceMotion]);

  // handlers de hover
  const onMouseEnter = () => {
    pause.current = true;
    clear();
  };
  const onMouseLeave = () => {
    pause.current = false;
    start();
  };

  return { index, setIndex, onMouseEnter, onMouseLeave };
}
