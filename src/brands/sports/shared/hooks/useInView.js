import { useEffect, useRef, useState } from "react";

/**
 * Observa quando um elemento entra ou sai do viewport.
 *
 * @param {object} options
 * @param {number|number[]} options.threshold
 * @param {Element|null} options.root
 * @param {string} options.rootMargin
 * @param {boolean} options.once
 * @param {boolean} options.enabled
 *
 * @returns {{ ref: import("react").RefObject<HTMLElement|null>, inView: boolean }}
 */
export default function useInView(options = {}) {
  const {
    threshold = 0.25,
    root = null,
    rootMargin = "0px",
    once = false,
    enabled = true,
  } = options;

  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setInView(false);
      return undefined;
    }

    const node = ref.current;

    if (!node || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);

            if (once) {
              observer.unobserve(entry.target);
            }

            return;
          }

          if (!once) {
            setInView(false);
          }
        });
      },
      {
        threshold,
        root,
        rootMargin,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [enabled, once, root, rootMargin, threshold]);

  return {
    ref,
    inView,
  };
}
