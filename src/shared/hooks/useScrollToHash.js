// src/shared/hooks/useScrollToHash.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll suave para o elemento indicado no #hash, em qualquer página.
 * - tenta várias vezes até o elemento existir (após navegação)
 * - compensa cabeçalho fixo via offsetPx
 */
export default function useScrollToHash(offsetPx = 0) {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.slice(1);
    let cancelled = false;
    let tries = 0;
    const MAX_TRIES = 30; // ~ meio segundo com rAF (depende do FPS)

    const tryScroll = () => {
      if (cancelled) return;

      const el = document.getElementById(id);
      if (!el) {
        if (tries++ < MAX_TRIES) {
          requestAnimationFrame(tryScroll);
        }
        return;
      }

      const top = el.getBoundingClientRect().top + window.scrollY - offsetPx;
      window.scrollTo({ top, behavior: "smooth" });

      // acessibilidade mínima
      const focusable =
        el.querySelector(
          "h1,h2,h3,[tabindex],a,button,input,select,textarea"
        ) || el;
      setTimeout(() => focusable?.focus?.(), 200);
    };

    // espera 1 frame para garantir render inicial após trocar de rota
    requestAnimationFrame(tryScroll);

    return () => {
      cancelled = true;
    };
  }, [hash, pathname, offsetPx]);
}
