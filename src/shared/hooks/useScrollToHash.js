import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll suave para o elemento indicado no #hash, em qualquer página.
 * - tenta várias vezes até o elemento existir (após navegação)
 * - compensa cabeçalho fixo via offsetPx
 * - evita re-scroll se já estiver muito perto do target
 * - respeita prefers-reduced-motion
 */
export default function useScrollToHash(offsetPx = 0) {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = decodeURIComponent(hash.slice(1));
    let cancelled = false;
    let tries = 0;
    const MAX_TRIES = 30;

    const prefersReduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tryScroll = () => {
      if (cancelled) return;

      const el = document.getElementById(id);
      if (!el) {
        if (tries++ < MAX_TRIES) requestAnimationFrame(tryScroll);
        return;
      }

      const targetTop =
        el.getBoundingClientRect().top + window.scrollY - offsetPx;

      // ✅ evita scroll se já estiver “no sítio” (tolerância)
      const delta = Math.abs(window.scrollY - targetTop);
      if (delta < 8) return;

      window.scrollTo({
        top: targetTop,
        behavior: prefersReduce ? "auto" : "smooth",
      });

      // acessibilidade mínima: foca algo dentro da secção
      const focusable =
        el.querySelector(
          "h1,h2,h3,[tabindex],a,button,input,select,textarea",
        ) || el;

      // garantir foco possível
      if (focusable && !focusable.hasAttribute("tabindex")) {
        focusable.setAttribute("tabindex", "-1");
      }

      setTimeout(() => focusable?.focus?.({ preventScroll: true }), 200);
    };

    requestAnimationFrame(tryScroll);

    return () => {
      cancelled = true;
    };
  }, [hash, pathname, offsetPx]);
}
