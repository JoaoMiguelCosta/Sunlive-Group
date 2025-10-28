import { useEffect } from "react";

export function useOutsideClick(ref, handler, when = true) {
  useEffect(() => {
    if (!when) return;
    const onDown = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler?.(e);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [ref, handler, when]);
}
