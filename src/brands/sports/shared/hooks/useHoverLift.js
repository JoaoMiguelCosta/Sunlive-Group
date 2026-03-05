// src/shared/hooks/useHoverLift.js
import { useEffect, useRef, useState } from "react";

/**
 * useHoverLift
 * - devolve { ref, isHovered }
 * - controla hover via event listeners (serve para React + futuros taps em mobile)
 */
export default function useHoverLift() {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleEnter = () => setIsHovered(true);
    const handleLeave = () => setIsHovered(false);

    node.addEventListener("mouseenter", handleEnter);
    node.addEventListener("mouseleave", handleLeave);
    node.addEventListener("focus", handleEnter, true);
    node.addEventListener("blur", handleLeave, true);

    // opcional: base para mobile tap
    node.addEventListener("touchstart", handleEnter, { passive: true });
    node.addEventListener("touchend", handleLeave);

    return () => {
      node.removeEventListener("mouseenter", handleEnter);
      node.removeEventListener("mouseleave", handleLeave);
      node.removeEventListener("focus", handleEnter, true);
      node.removeEventListener("blur", handleLeave, true);
      node.removeEventListener("touchstart", handleEnter);
      node.removeEventListener("touchend", handleLeave);
    };
  }, []);

  return { ref, isHovered };
}
