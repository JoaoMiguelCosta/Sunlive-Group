import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollToHashTarget(hash, offset = 72) {
  if (!hash || typeof window === "undefined") return false;

  const id = decodeURIComponent(hash.replace(/^#/, ""));
  if (!id) return false;

  const target = document.getElementById(id);
  if (!target) return false;

  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(top, 0),
    left: 0,
    behavior: "smooth",
  });

  return true;
}

export default function ScrollToTopOnRouteChange() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
      return;
    }

    let frameId = 0;
    let attempts = 0;
    const maxAttempts = 30;
    const offset = 72;

    const tryScroll = () => {
      attempts += 1;

      const didScroll = scrollToHashTarget(hash, offset);
      if (didScroll || attempts >= maxAttempts) return;

      frameId = window.requestAnimationFrame(tryScroll);
    };

    frameId = window.requestAnimationFrame(tryScroll);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [pathname, hash]);

  return null;
}
