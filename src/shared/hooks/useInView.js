// src/shared/hooks/useInView.js
import { useEffect, useRef, useState } from "react";

/**
 * useInView
 * - devolve { ref, inView }
 * - se once = true, só dispara 1 vez
 * - se once = false, alterna true/false sempre que entra/sai do viewport
 */
export default function useInView(options = {}) {
  const {
    threshold = 0.25,
    root = null,
    rootMargin = "0px",
    once = false,
  } = options;

  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            // 👈 volta a false quando sai do viewport
            setInView(false);
          }
        });
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold, root, rootMargin, once]);

  return { ref, inView };
}
