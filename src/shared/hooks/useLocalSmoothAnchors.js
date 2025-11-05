// src/shared/hooks/useLocalSmoothAnchors.js
export default function useLocalSmoothAnchors() {
  const prefersReduce =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function isSamePageHash(href) {
    if (!href) return false;
    if (href.startsWith("#")) return true; // hash puro
    try {
      const target = new URL(href, window.location.href);
      const current = new URL(window.location.href);
      return target.pathname === current.pathname && !!target.hash;
    } catch {
      return false;
    }
  }

  function scrollToHash(hash) {
    if (!hash) return;
    const id = hash.replace(/^#/, "");
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: prefersReduce ? "auto" : "smooth",
      block: "start",
    });

    try {
      history.pushState(null, "", `#${id}`);
    } catch {
      /* noop */
    }
  }

  function handleAnchorClick(e, href, onAfter) {
    if (!href) return;
    if (!isSamePageHash(href)) return; // deixa navegação normal

    e?.preventDefault();
    const url = new URL(href, window.location.href);
    scrollToHash(url.hash || href);
    onAfter?.(); // fechar menus/overlays, etc.
  }

  return { isSamePageHash, scrollToHash, handleAnchorClick };
}
