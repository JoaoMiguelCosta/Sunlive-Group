// src/shared/hooks/useSmartAnchorNav.js
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Navegação/scroll com offset e suporte a alvos dentro de submenus/colapsáveis.
 *
 * Opções extra:
 * - revealById?: (id: string) => void
 * - onBeforeNavigate?: (info) => void
 * - onAfterNavigate?: (info) => void
 * - closeOverlays?: () => void
 * - maxScrollRetries?: number (default 3)
 * - retryDelayMs?: number (default 60)
 */
export default function useSmartAnchorNav({
  targetPath,
  offset = 72,
  behavior = "smooth",
  revealById,
  onBeforeNavigate,
  onAfterNavigate,
  closeOverlays,
  maxScrollRetries = 3,
  retryDelayMs = 60,
} = {}) {
  const location = useLocation();
  const navigate = useNavigate();

  const curPath = () => location.pathname.replace(/\/+$/, "");
  const normalizePath = (p = "") => p.replace(/#.*$/, "").replace(/\/+$/, "");

  const parseHref = (href = "") => {
    if (href.startsWith("#")) return { path: curPath(), hash: href };
    const url = new URL(href, window.location.origin);
    return { path: normalizePath(url.pathname), hash: url.hash || "" };
  };

  const shouldIntercept = (hrefPath) => {
    const wanted = targetPath ? normalizePath(targetPath) : curPath();
    return normalizePath(hrefPath) === wanted;
  };

  const prefersReduce =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const isVisible = (el) => {
    if (!el) return false;
    const style = window.getComputedStyle(el);
    const notHidden =
      style.display !== "none" &&
      style.visibility !== "hidden" &&
      style.opacity !== "0";
    const rect = el.getBoundingClientRect();
    return (
      notHidden && !!el.offsetParent && rect.width >= 1 && rect.height >= 1
    );
  };

  const revealIfNeeded = (id) => {
    revealById?.(id);

    let el = document.getElementById(id);
    let parent = el?.parentElement;
    while (parent) {
      if (parent.tagName === "DETAILS" && !parent.open) parent.open = true;
      parent = parent.parentElement;
    }

    if (!el) el = document.getElementById(id);
    if (el && !isVisible(el)) {
      const btn = document.querySelector(`[data-controls="${id}"]`);
      if (btn) btn.click();
    }
  };

  const scrollToEl = (el) => {
    if (!el) return;
    const top =
      el.getBoundingClientRect().top + window.scrollY - Math.max(0, offset);
    window.scrollTo({ top, behavior: prefersReduce ? "auto" : behavior });
    if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
  };

  const scrollToHash = async (hash, tries = 0) => {
    if (!hash) return;
    const id = decodeURIComponent(hash.replace(/^#/, ""));
    let el = document.getElementById(id);

    if (!isVisible(el)) revealIfNeeded(id);

    el = document.getElementById(id);

    if (el && isVisible(el)) {
      await new Promise((r) => requestAnimationFrame(() => r()));
      closeOverlays?.();
      await new Promise((r) => requestAnimationFrame(() => r()));
      scrollToEl(el);
      return;
    }

    if (tries < maxScrollRetries) {
      await new Promise((r) => setTimeout(r, retryDelayMs));
      return scrollToHash(hash, tries + 1);
    }
  };

  const handleSmartAnchorClick = async (e, href, disabled) => {
    if (disabled || !href) return;

    if (e?.metaKey || e?.ctrlKey || e?.shiftKey || e?.altKey || e?.button === 1)
      return;

    const { path, hash } = parseHref(href);
    if (!shouldIntercept(path) || !hash) return;

    e.preventDefault();
    onBeforeNavigate?.({ path, hash });

    if (normalizePath(path) === curPath()) {
      navigate(`${path}${hash}`, { replace: false });
      await scrollToHash(hash);
      onAfterNavigate?.({ path, hash });
      return;
    }

    navigate(`${path}${hash}`);
    onAfterNavigate?.({ path, hash });
  };

  // ✅ Só auto-scroll quando o URL (pathname/hash) muda
  const lastHandledRef = useRef("");

  useEffect(() => {
    const ok = targetPath ? normalizePath(targetPath) === curPath() : true;
    if (!ok) return;
    if (!location.hash) return;

    const key = `${location.pathname}${location.hash}`;
    if (lastHandledRef.current === key) return;
    lastHandledRef.current = key;

    closeOverlays?.();
    requestAnimationFrame(() => {
      scrollToHash(location.hash);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash, targetPath]);

  return { handleSmartAnchorClick, scrollToHash };
}
